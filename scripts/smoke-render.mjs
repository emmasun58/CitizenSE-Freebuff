/**
 * Renders every reachable route through the real component tree and reports
 * any route that crashes or renders empty.
 *
 * React and React Router stay external so Node resolves them from the project's
 * own node_modules; the bundle is therefore emitted inside the project.
 */
import { build } from 'esbuild'
import { mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const outDir = join(process.cwd(), '.tmp-smoke')
const outFile = join(outDir, 'smoke.mjs')

try {
  await mkdir(outDir, { recursive: true })

  await build({
    entryPoints: ['src/smoke/render.tsx'],
    outfile: outFile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    jsx: 'automatic',
    loader: { '.css': 'empty' },
    external: ['react', 'react-dom', 'react-dom/server', 'react-router-dom'],
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'warning',
  })

  const mod = await import(pathToFileURL(outFile).href)
  const result = mod.runSmokeRender()

  console.log(`Renderade: ${result.checked} routes`)
  if (result.failures.length === 0) {
    console.log('Alla routes renderade korrekt.')
    process.exit(0)
  }

  console.error(`\n${result.failures.length} problem:`)
  for (const failure of result.failures) {
    console.error(` · ${failure.path}: ${failure.reason}`)
  }
  process.exit(1)
} finally {
  await rm(outDir, { recursive: true, force: true })
}
