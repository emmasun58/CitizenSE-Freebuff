import type { Section } from '../../content/types'
import { formatSourceRef } from '../../content/source'
import { ReadBlockView } from '../ReadBlockView'
import { Badge } from '../ui/primitives'

/**
 * SQ3R step 3: the material itself.
 *
 * Content is rendered in short blocks (lead, paragraph, list, concept, example,
 * quote, note) so the reading stays focused and difficult terms can be
 * explained inline where they appear.
 */
export function ReadStep({ section }: { section: Section }) {
  const conceptCount = section.read.filter((block) => block.kind === 'concept').length

  return (
    <article className="read">
      <p className="row" style={{ marginBottom: '1.25rem' }}>
        <Badge tone="accent">Läs i korta delar</Badge>
        {conceptCount > 0 ? (
          <span className="small muted">
            {conceptCount} begrepp förklaras direkt i texten
          </span>
        ) : null}
      </p>

      {section.read.map((block, index) => (
        <ReadBlockView key={index} block={block} />
      ))}

      <p className="small muted" style={{ marginTop: '2rem' }}>
        Källa: {formatSourceRef(section.source.chapter, section.source.pages)}.
      </p>
    </article>
  )
}
