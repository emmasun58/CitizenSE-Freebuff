import type { ReadBlock } from '../content/types'

/**
 * Renders one Read block.
 *
 * New block kinds are added by extending this switch — content authors never
 * need to touch layout code, which keeps the Read step consistent across all
 * 13 chapters.
 */
export function ReadBlockView({ block }: { block: ReadBlock }) {
  switch (block.kind) {
    case 'lead':
      return (
        <div className="read__block read__lead">
          <p>{block.text}</p>
        </div>
      )

    case 'paragraph':
      return (
        <div className="read__block">
          <p>{block.text}</p>
        </div>
      )

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <div className="read__block">
          <ListTag>
            {block.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ListTag>
        </div>
      )
    }

    case 'concept':
      return (
        <aside className="read__concept">
          <h4>{block.term}</h4>
          <p>{block.explanation}</p>
        </aside>
      )

    case 'example':
      return (
        <aside className="read__example">
          {block.title ? <h4>{block.title}</h4> : null}
          <p>{block.text}</p>
        </aside>
      )

    case 'quote':
      return (
        <blockquote className="read__quote">
          <p>{block.text}</p>
          <cite>{block.citation}</cite>
        </blockquote>
      )

    case 'note':
      return (
        <div className={`read__note read__note--${block.tone}`}>
          <p>{block.text}</p>
        </div>
      )
  }
}
