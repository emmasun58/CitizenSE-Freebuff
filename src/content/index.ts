import type { Chapter, Section } from './types'

import { chapter01 } from './chapters/ch01-landet-sverige'
import { chapter02 } from './chapters/ch02-demokratiska-systemet'
import { chapter03 } from './chapters/ch03-sa-styrs-sverige'
import { chapter04 } from './chapters/ch04-politiska-val'
import { chapter05 } from './chapters/ch05-lag-och-ratt'
import { chapter06 } from './chapters/ch06-mediernas-roll'
import { chapter07 } from './chapters/ch07-manskliga-rattigheter'
import { chapter08 } from './chapters/ch08-arbetsmarknad-privatekonomi'
import { chapter09 } from './chapters/ch09-valfardssamhallet'
import { chapter10 } from './chapters/ch10-moderna-historien'
import { chapter11 } from './chapters/ch11-sverige-omvarlden'
import { chapter12 } from './chapters/ch12-sekular-stat'
import { chapter13 } from './chapters/ch13-traditioner'

/**
 * The full curriculum, in the order of the official material.
 *
 * Every chapter mirrors one chapter of "Sverige i fokus", and every section
 * mirrors one of its sub-headings. Adding real material = filling in the
 * `read`, `recite` and `review` blocks of the existing sections.
 */
export const chapters: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
].sort((a, b) => a.order - b.order)

const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]))

const sectionIndex = new Map<string, { chapter: Chapter; section: Section }>()
for (const chapter of chapters) {
  for (const section of chapter.sections) {
    sectionIndex.set(section.id, { chapter, section })
  }
}

export function getChapter(chapterId: string): Chapter | undefined {
  return chapterById.get(chapterId)
}

export function getSection(sectionId: string): { chapter: Chapter; section: Section } | undefined {
  return sectionIndex.get(sectionId)
}

/** All sections flattened, in curriculum order. */
export const allSections: { chapter: Chapter; section: Section }[] = chapters.flatMap((chapter) =>
  chapter.sections.map((section) => ({ chapter, section })),
)

export function totalSectionCount(): number {
  return allSections.length
}

/** Position of a section within its own chapter (1-based). */
export function sectionPosition(chapter: Chapter, sectionId: string): number {
  return chapter.sections.findIndex((section) => section.id === sectionId) + 1
}
