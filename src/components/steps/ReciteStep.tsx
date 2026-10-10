import { useMemo, useState } from 'react'
import type {
  ExplainRecite,
  MultipleChoiceRecite,
  ReciteItem,
  Section,
  ShortAnswerRecite,
} from '../../content/types'
import { useProgress } from '../../learning/ProgressContext'
import { Card } from '../ui/primitives'

/** Case- and punctuation-insensitive comparison for short answers. */
function normalise(value: string): string {
  return value
    .toLowerCase()
    .replace(/[.,!?;:"'`´’]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isAccepted(answer: string, accepted: string[]): boolean {
  const given = normalise(answer)
  if (given.length === 0) return false
  return accepted.some((candidate) => {
    const expected = normalise(candidate)
    return expected === given || given.includes(expected) || expected.includes(given)
  })
}

function SaveButton({ itemId }: { itemId: string }) {
  const { isSaved, toggleSaved } = useProgress()
  const saved = isSaved(itemId)
  return (
    <button
      type="button"
      className="btn btn--ghost btn--small"
      onClick={() => toggleSaved(itemId)}
      aria-pressed={saved}
      title="Spara frågan för senare repetition"
    >
      {saved ? '★ Sparad' : '☆ Spara'}
    </button>
  )
}

interface ItemProps {
  item: ReciteItem
  sectionId: string
  chapterId: string
}

function MultipleChoiceActivity({ item, sectionId, chapterId }: ItemProps & { item: MultipleChoiceRecite }) {
  const { recordAnswer } = useProgress()
  const [selected, setSelected] = useState<string | null>(null)
  const answered = selected !== null
  const correct = answered && selected === item.correctOptionId

  const choose = (optionId: string) => {
    if (answered) return
    setSelected(optionId)
    recordAnswer({ itemId: item.id, sectionId, chapterId, correct: optionId === item.correctOptionId })
  }

  return (
    <div className="recite-item">
      <div className="recite-item__head">
        <p className="recite-item__prompt">{item.prompt}</p>
        <SaveButton itemId={item.id} />
      </div>

      <ul className="option-list">
        {item.options.map((option, index) => {
          const isCorrectOption = option.id === item.correctOptionId
          const isChosen = option.id === selected
          const classes = [
            'option-button',
            answered && isCorrectOption ? 'option-button--correct' : '',
            answered && isChosen && !isCorrectOption ? 'option-button--wrong' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <li key={option.id}>
              <button
                type="button"
                className={classes}
                onClick={() => choose(option.id)}
                disabled={answered}
                aria-pressed={isChosen}
              >
                <span className="option-button__key">{String.fromCharCode(65 + index)}</span>
                <span>{option.text}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {answered ? (
        <div className={correct ? 'feedback feedback--correct' : 'feedback feedback--wrong'}>
          <span className="feedback__title">{correct ? 'Rätt!' : 'Inte rätt den här gången'}</span>
          <p>{item.explanation}</p>
          {!correct ? (
            <p className="small">
              Frågan läggs till i din repetition och kommer tillbaka under Repetera.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

function ShortAnswerActivity({ item, sectionId, chapterId }: ItemProps & { item: ShortAnswerRecite }) {
  const { recordAnswer } = useProgress()
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState<boolean | null>(null)

  const check = () => {
    const correct = isAccepted(value, item.acceptedAnswers)
    setChecked(correct)
    recordAnswer({ itemId: item.id, sectionId, chapterId, correct, response: value })
  }

  const reveal = () => {
    setChecked(false)
    recordAnswer({ itemId: item.id, sectionId, chapterId, correct: false, response: value })
  }

  return (
    <div className="recite-item">
      <div className="recite-item__head">
        <p className="recite-item__prompt">{item.prompt}</p>
        <SaveButton itemId={item.id} />
      </div>

      <p className="small muted">Svara med egna ord utan att titta i texten.</p>

      <label className="sr-only" htmlFor={`answer-${item.id}`}>
        Ditt svar
      </label>
      <input
        id={`answer-${item.id}`}
        className="input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && checked === null && value.trim().length > 0) check()
        }}
        disabled={checked !== null}
        placeholder="Skriv ditt svar här"
      />

      {checked !== null ? (
        <div className={checked ? 'feedback feedback--correct' : 'feedback feedback--neutral'}>
          <span className="feedback__title">{checked ? 'Rätt!' : 'Jämför med modellsvaret'}</span>
          <p>{item.modelAnswer}</p>
          {!checked ? (
            <p className="small">
              Frågan läggs till i din repetition. Du kan gå tillbaka till Läs om du vill läsa
              igen.
            </p>
          ) : null}
        </div>
      ) : (
        <div className="recite-item__actions">
          <button type="button" className="btn btn--primary" onClick={check} disabled={!value.trim()}>
            Kontrollera
          </button>
          <button type="button" className="btn btn--ghost" onClick={reveal}>
            Visa modellsvar
          </button>
        </div>
      )}
    </div>
  )
}

function ExplainActivity({ item, sectionId, chapterId }: ItemProps & { item: ExplainRecite }) {
  const { recordAnswer } = useProgress()
  const [value, setValue] = useState('')
  const [checkedPoints, setCheckedPoints] = useState<boolean[]>(() =>
    item.checklist.map(() => false),
  )
  const [revealed, setRevealed] = useState(false)

  const coveredCount = useMemo(
    () => checkedPoints.filter(Boolean).length,
    [checkedPoints],
  )

  const togglePoint = (index: number) => {
    setCheckedPoints((current) => current.map((value, i) => (i === index ? !value : value)))
  }

  const finish = () => {
    // Self-assessment: the learner decides whether the answer covered the points.
    const covered = coveredCount >= Math.ceil(item.checklist.length / 2)
    recordAnswer({ itemId: item.id, sectionId, chapterId, correct: covered, response: value })
    setRevealed(true)
  }

  return (
    <div className="recite-item">
      <div className="recite-item__head">
        <p className="recite-item__prompt">{item.prompt}</p>
        <SaveButton itemId={item.id} />
      </div>

      <p className="small muted">Förklara med egna ord. Titta inte i texten medan du skriver.</p>

      <label className="sr-only" htmlFor={`explain-${item.id}`}>
        Din förklaring
      </label>
      <textarea
        id={`explain-${item.id}`}
        className="textarea"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Skriv din förklaring här"
        disabled={revealed}
      />

      <div className="recite-item__actions">
        <button
          type="button"
          className="btn btn--primary"
          onClick={finish}
          disabled={revealed || value.trim().length === 0}
        >
          Rätta själv
        </button>
        {!revealed ? (
          <span className="small muted">{value.trim().length} tecken</span>
        ) : null}
      </div>

      {revealed ? (
        <div className="feedback feedback--neutral">
          <span className="feedback__title">
            Punkter att pricka av ({coveredCount} av {item.checklist.length})
          </span>
          <ul className="self-check">
            {item.checklist.map((point, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`check-${item.id}-${index}`}
                  checked={checkedPoints[index]}
                  onChange={() => togglePoint(index)}
                />
                <label htmlFor={`check-${item.id}-${index}`}>{point}</label>
              </li>
            ))}
          </ul>
          <p className="small muted" style={{ marginTop: '0.75rem' }}>
            Modellsvar
          </p>
          <p>{item.modelAnswer}</p>
        </div>
      ) : null}
    </div>
  )
}

/**
 * SQ3R step 4: recall without looking at the text.
 *
 * Three activity types share one pattern: the learner attempts first, sees the
 * answer second, and everything that is missed is written to progress so the
 * Review step can bring it back.
 */
export function ReciteStep({ section, chapterId }: { section: Section; chapterId: string }) {
  return (
    <div>
      <Card soft label="Så funkar det här steget">
        <p style={{ marginBottom: 0 }}>
          Försök svara ur minnet. Det är själva återberättandet – inte att läsa om – som gör att du
          minns. Alla frågor du svarar fel på samlas automatiskt under Repetera.
        </p>
      </Card>

      {section.recite.map((item) => {
        switch (item.kind) {
          case 'multiple-choice':
            return (
              <MultipleChoiceActivity
                key={item.id}
                item={item}
                sectionId={section.id}
                chapterId={chapterId}
              />
            )
          case 'short-answer':
            return (
              <ShortAnswerActivity
                key={item.id}
                item={item}
                sectionId={section.id}
                chapterId={chapterId}
              />
            )
          case 'explain':
            return (
              <ExplainActivity
                key={item.id}
                item={item}
                sectionId={section.id}
                chapterId={chapterId}
              />
            )
        }
      })}
    </div>
  )
}
