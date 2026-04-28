import { Link } from 'react-router-dom'
import type { Lesson } from '../features/lessons/types'

type LessonCardProps = {
  lesson: Lesson
  completed?: boolean
}

export function LessonCard({ lesson, completed = false }: LessonCardProps) {
  return (
    <article className="lesson-card">
      <div className="lesson-card-header">
        <span className="pill">{lesson.estimatedMinutes}분</span>
        <span className={completed ? 'status done' : 'status'}>{completed ? '완료' : '진행 가능'}</span>
      </div>
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      <Link to={`/quest/${lesson.slug}`}>{lesson.title} 퀘스트 열기</Link>
    </article>
  )
}
