import { CAPABILITIES, NOT_IMPLEMENTED_YET } from '../learning/capabilities'
import { SOURCE_DOCUMENT } from '../content/source'
import { Badge, Card } from '../components/ui/primitives'

/**
 * Transparency page: what the app does, what it is built on, and what is
 * deliberately not built yet.
 */
export function AboutPage() {
  return (
    <div className="content">
      <h1>Om materialet och metoden</h1>

      <Card label="Källan">
        <p>
          Allt lärandeinnehåll i CitizenSE utgår från <strong>{SOURCE_DOCUMENT.title}</strong>, utgiven
          av {SOURCE_DOCUMENT.publisher} ({SOURCE_DOCUMENT.edition}).
        </p>
        <p>
          <a href={SOURCE_DOCUMENT.url} target="_blank" rel="noreferrer">
            Öppna Sverige i fokus hos UHR
          </a>
        </p>
        <p className="small muted" style={{ marginBottom: 0 }}>
          CitizenSE är inte en officiell tjänst från UHR eller Skolverket. Appen sammanfattar
          materialet kapitel för kapitel och hänvisar varje avsnitt till kapitel och sidor i
          originalet, så att du alltid kan kontrollera innehållet mot källan.
        </p>
      </Card>

      <Card label="SQ3R">
        <p>
          SQ3R är en lässtrategi i fem steg: <strong>Survey</strong> (skaffa översikt),{' '}
          <strong>Question</strong> (ställ frågor), <strong>Read</strong> (läs),{' '}
          <strong>Recite</strong> (återberätta ur minnet) och <strong>Review</strong>{' '}
          (sammanfatta och repetera). Poängen är att du inte bara läser texten – du förbereder dig
          innan, återberättar efter och repeterar det du missade. Varje avsnitt i CitizenSE är byggt
          som exakt de fem stegen.
        </p>
      </Card>

      <Card label="Innehållsstruktur och utbyggnad">
        <p className="small muted">
          Kapitel och avsnitt har stabila id:n, och varje avsnitt innehåller färdiga block för
          översikt, frågor, läsning, repetition och sammanfattning. Det gör att funktionerna nedan
          kan byggas ovanpå innehållet utan att det behöver skrivas om.
        </p>
        <table className="section-list" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {CAPABILITIES.map((capability) => (
              <tr key={capability.id} className="section-list__item">
                <td style={{ verticalAlign: 'top' }}>
                  <strong>{capability.title}</strong>
                  <div className="small muted">{capability.readyInCode}</div>
                  <div className="small muted">Nästa steg: {capability.nextStep}</div>
                </td>
                <td style={{ verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                  <Badge tone={capability.status === 'seam-ready' ? 'accent' : 'neutral'}>
                    {capability.status === 'seam-ready' ? 'Redo att bygga på' : 'Ej påbörjad'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card label="Ingår inte ännu" soft>
        <ul style={{ marginBottom: 0 }} className="small muted">
          {NOT_IMPLEMENTED_YET.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
