import type { Chapter, ReciteItem, Section } from './types'

export interface ContentIssue {
  path: string
  message: string
}

/**
 * Structural checks for the content modules.
 *
 * Content is data, so mistakes in it (a duplicate id, a multiple-choice answer
 * pointing at an option that does not exist, an empty Read step) would silently
 * break the learner's review history or the SQ3R loop. Running these checks in
 * development and in the test suite catches that before it ships.
 */
export function validateChapters(chapters: Chapter[]): ContentIssue[] {
  const issues: ContentIssue[] = []
  const chapterIds = new Set<string>()
  const sectionIds = new Set<string>()
  const reciteIds = new Set<string>()

  for (const chapter of chapters) {
    if (chapterIds.has(chapter.id)) {
      issues.push({ path: chapter.id, message: 'Duplicerat kapitel-id' })
    }
    chapterIds.add(chapter.id)

    if (chapter.sections.length === 0) {
      issues.push({ path: chapter.id, message: 'Kapitlet saknar avsnitt' })
    }
    if (chapter.source.chapter !== chapter.order) {
      issues.push({
        path: chapter.id,
        message: `source.chapter (${chapter.source.chapter}) matchar inte order (${chapter.order})`,
      })
    }
    if (chapter.learningGoals.length === 0) {
      issues.push({ path: chapter.id, message: 'Kapitlet saknar lärandemål' })
    }

    for (const section of chapter.sections) {
      const path = `${chapter.id}/${section.id}`
      if (sectionIds.has(section.id)) {
        issues.push({ path, message: 'Duplicerat avsnitts-id' })
      }
      sectionIds.add(section.id)

      validateSection(section, path, issues)
      for (const item of section.recite) {
        if (reciteIds.has(item.id)) {
          issues.push({ path, message: `Duplicerat recite-id: ${item.id}` })
        }
        reciteIds.add(item.id)
        validateReciteItem(item, path, issues)
      }
    }
  }

  return issues
}

function validateSection(section: Section, path: string, issues: ContentIssue[]): void {
  if (section.source.pages.length === 0) {
    issues.push({ path, message: 'Avsnittet saknar källhänvisning (sidor)' })
  }
  if (section.read.length === 0) {
    issues.push({ path, message: 'Read-steget är tomt' })
  }
  if (section.questions.length === 0) {
    issues.push({ path, message: 'Question-steget är tomt' })
  }
  if (section.recite.length === 0) {
    issues.push({ path, message: 'Recite-steget är tomt' })
  }
  if (section.survey.themes.length === 0) {
    issues.push({ path, message: 'Survey-steget saknar teman' })
  }
  if (section.survey.keyConcepts.length === 0) {
    issues.push({ path, message: 'Survey-steget saknar nyckelbegrepp' })
  }
  if (section.review.keyTakeaways.length === 0) {
    issues.push({ path, message: 'Review-steget saknar sammanfattning' })
  }

  const questionIds = new Set<string>()
  for (const question of section.questions) {
    if (questionIds.has(question.id)) {
      issues.push({ path, message: `Duplicerat fråge-id: ${question.id}` })
    }
    questionIds.add(question.id)
  }
}

function validateReciteItem(item: ReciteItem, path: string, issues: ContentIssue[]): void {
  if (item.kind === 'multiple-choice') {
    if (item.options.length < 2) {
      issues.push({ path, message: `${item.id}: behöver minst två svarsalternativ` })
    }
    if (!item.options.some((option) => option.id === item.correctOptionId)) {
      issues.push({ path, message: `${item.id}: correctOptionId finns inte bland alternativen` })
    }
    const optionIds = new Set(item.options.map((option) => option.id))
    if (optionIds.size !== item.options.length) {
      issues.push({ path, message: `${item.id}: duplicerade svarsalternativ` })
    }
  }
  if (item.kind === 'short-answer' && item.acceptedAnswers.length === 0) {
    issues.push({ path, message: `${item.id}: saknar accepterade svar` })
  }
  if (item.kind === 'explain' && item.checklist.length === 0) {
    issues.push({ path, message: `${item.id}: saknar checklista` })
  }
}
