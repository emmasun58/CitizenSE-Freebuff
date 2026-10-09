import type { ReactNode } from 'react'

type BadgeTone = 'neutral' | 'accent' | 'success' | 'danger' | 'warn'

export function Badge({ tone = 'neutral', children }: { tone?: BadgeTone; children: ReactNode }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}

export function ProgressBar({ percent, label }: { percent: number; label?: string }) {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)))
  return (
    <div>
      {label ? (
        <div className="small muted">
          {label} · {clamped} %
        </div>
      ) : null}
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Framsteg'}
      >
        <div className="progress-bar__fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}

export function Card({
  children,
  label,
  soft = false,
}: {
  children: ReactNode
  label?: string
  soft?: boolean
}) {
  return (
    <section className={soft ? 'card card--soft' : 'card'}>
      {label ? <div className="card__label">{label}</div> : null}
      {children}
    </section>
  )
}

export function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}
