import { chapters } from './index'
import { validateChapters, type ContentIssue } from './validate'

export interface ValidationReport {
  chapterCount: number
  sectionCount: number
  reciteCount: number
  questionCount: number
  issues: ContentIssue[]
}

/** Runs the structural content checks and returns a countable summary. */
export function runValidation(): ValidationReport {
  const sections = chapters.flatMap((chapter) => chapter.sections)

  return {
    chapterCount: chapters.length,
    sectionCount: sections.length,
    reciteCount: sections.reduce((sum, section) => sum + section.recite.length, 0),
    questionCount: sections.reduce((sum, section) => sum + section.questions.length, 0),
    issues: validateChapters(chapters),
  }
}
