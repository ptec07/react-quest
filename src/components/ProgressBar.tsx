type ProgressBarProps = {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress" aria-label={`진행률 ${value}%`}>
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  )
}
