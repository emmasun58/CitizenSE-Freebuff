import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { chapters } from './content'
import { validateChapters } from './content/validate'
import './styles/global.css'

// Content is data, so structure it is checked loudly in development: a broken
// section (empty Read step, a multiple-choice answer pointing at a missing
// option, a duplicate id) should never silently reach the learner.
if (import.meta.env.DEV) {
  const issues = validateChapters(chapters)
  if (issues.length > 0) {
    console.error('[CitizenSE] Innehållsproblem hittades:')
    for (const issue of issues) {
      console.error(` · ${issue.path}: ${issue.message}`)
    }
  } else {
    console.info(`[CitizenSE] Innehållskontroll klar: ${chapters.length} kapitel utan anmärkningar.`)
  }
}

const container = document.getElementById('root')
if (!container) throw new Error('Saknar #root i index.html')

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
