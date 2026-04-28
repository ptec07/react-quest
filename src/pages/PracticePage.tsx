import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PracticePanel } from '../components/PracticePanel'
import { getExercisesForLesson } from '../content/exercises'
import { getLessonBySlug } from '../content/lessons'
import { useProgress } from '../features/progress/useProgress'

export function PracticePage() {
  const { lessonSlug } = useParams()
  const lesson = lessonSlug ? getLessonBySlug(lessonSlug) : undefined
  const { progress, completeExercise } = useProgress()
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>()

  if (!lesson) {
    return (
      <div className="page">
        <h1>실습을 찾을 수 없습니다</h1>
        <Link to="/quest">Quest Map으로 돌아가기</Link>
      </div>
    )
  }

  const lessonExercises = getExercisesForLesson(lesson.id)
  const exercise = lessonExercises.find((item) => item.id === selectedExerciseId) ?? lessonExercises[0]

  if (!exercise) {
    return (
      <div className="page">
        <h1>실습이 아직 준비되지 않았습니다</h1>
        <p>{lesson.title} 단원의 실습 콘텐츠를 준비 중입니다.</p>
        <Link to={`/quest/${lesson.slug}`}>단원으로 돌아가기</Link>
      </div>
    )
  }

  const completed = progress.completedExerciseIds.includes(exercise.id)

  return (
    <div className="page">
      <div className="page-heading">
        <p className="eyebrow">{lesson.title}</p>
        <h1>코드 실습</h1>
        <p>깨진 코드를 고치며 React 개념을 몸으로 익힙니다.</p>
      </div>
      {lessonExercises.length > 1 && (
        <section className="exercise-picker" aria-label="실습 선택">
          <p className="eyebrow">Practice Set</p>
          <h2>이 단원의 실습 {lessonExercises.length}개</h2>
          <div className="exercise-picker-list">
            {lessonExercises.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={item.id === exercise.id ? 'active' : ''}
                onClick={() => setSelectedExerciseId(item.id)}
              >
                {index + 1}. {item.title}
              </button>
            ))}
          </div>
        </section>
      )}
      <PracticePanel exercise={exercise} completed={completed} onComplete={completeExercise} />
    </div>
  )
}
