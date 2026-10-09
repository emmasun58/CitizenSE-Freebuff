/**
 * Validates the content modules and prints a report.
 *
 * Content is data, so it is checked like data: unique ids, every multiple-choice
 * answer pointing at a real option, no empty SQ3R step, and a source reference
 * on every section. Run with `npm test`.
 */
import { build } from 'esbuild'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const outDir = await mkdtemp(join(tmpdir(), 'citizense-validate-'))
const outFile = join(outDir, 'content.mjs')

try {
  await build({
    entryPoints: ['src/content/validate-cli.ts'],
    outfile: outFile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'warning',
  })

  const mod = await import(pathToFileURL(outFile).href)
  const report = mod.runValidation()

  console.log(`Kapitel: ${report.chapterCount}`)
  console.log(`Avsnitt: ${report.sectionCount}`)
  console.log(`Repetitionsuppgifter: ${report.reciteCount}`)
  console.log(`Sq3r-frågor: ${report.questionCount}`)
  console.log('')

  if (report.issues.length === 0) {
    console.log('Inga innehållsproblem hittades.')
    process.exit(0)
  }

  console.error(`Hittade ${report.issues.length} innehållsproblem:`)
  for (const issue of report.issues) {
    console.error(` · ${issue.path}: ${issue.message}`)
  }
  process.exit(1)
} finally {
  await rm(outDir, { recursive: true, force: true })
}
