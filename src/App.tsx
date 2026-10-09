import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { SectionView } from './components/SectionView'
import type { ProgressStore } from './learning/progress'
import { ProgressProvider } from './learning/ProgressContext'
import { AboutPage } from './pages/AboutPage'
import { ChapterPage } from './pages/ChapterPage'
import { HomePage } from './pages/HomePage'
import { ReviewPage } from './pages/ReviewPage'

export function App({ progressStore }: { progressStore?: ProgressStore } = {}) {
  return (
    <ProgressProvider store={progressStore}>
      <div className="app">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kapitel/:chapterId" element={<ChapterPage />} />
            <Route
              path="/kapitel/:chapterId/avsnitt/:sectionId"
              element={<RedirectToSurvey />}
            />
            <Route path="/kapitel/:chapterId/avsnitt/:sectionId/:stepId" element={<SectionView />} />
            <Route path="/repetition" element={<ReviewPage />} />
            <Route path="/om" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </ProgressProvider>
  )
}

/** Deep links without a step open the first SQ3R step, canonically. */
function RedirectToSurvey() {
  const { chapterId, sectionId } = useParams<{ chapterId: string; sectionId: string }>()
  return <Navigate to={`/kapitel/${chapterId}/avsnitt/${sectionId}/survey`} replace />
}
