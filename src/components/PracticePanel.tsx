import { useState } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import type { Exercise } from '../features/lessons/types'

type PracticePanelProps = {
  exercise: Exercise
  completed: boolean
  onComplete: (exerciseId: string) => void
}

export function PracticePanel({ exercise, completed, onComplete }: PracticePanelProps) {
  const [hintCount, setHintCount] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const code = showSolution ? exercise.solutionCode : exercise.starterCode

  return (
    <section className="practice-panel">
      <div className="practice-copy">
        <p className="eyebrow">Practice</p>
        <h2>{exercise.title}</h2>
        <p>{exercise.prompt}</p>
        <div className="practice-actions">
          <button type="button" onClick={() => setHintCount((count) => Math.min(count + 1, exercise.hints.length))}>
            힌트 보기
          </button>
          <button type="button" onClick={() => setShowSolution(true)}>
            정답 보기
          </button>
          <button type="button" onClick={() => setShowSolution(false)}>
            초기화
          </button>
          <button type="button" className="primary-button" onClick={() => onComplete(exercise.id)}>
            실습 완료
          </button>
        </div>
        {completed && <p className="feedback success">완료됨 — progress에 저장되었습니다.</p>}
        {hintCount > 0 && (
          <ol className="hint-list">
            {exercise.hints.slice(0, hintCount).map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ol>
        )}
        {showSolution && <p className="feedback">{exercise.explanation}</p>}
      </div>
      <Sandpack
        template="react"
        files={{
          '/App.js': code,
        }}
        options={{
          showNavigator: false,
          showTabs: true,
          activeFile: '/App.js',
          visibleFiles: ['/App.js'],
        }}
      />
    </section>
  )
}
