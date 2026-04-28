import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { QuizCard } from '../components/QuizCard'
import { getLessonBySlug } from '../content/lessons'
import { getQuizzesForLesson } from '../content/quizzes'
import { useProgress } from '../features/progress/useProgress'

export function LessonPage() {
  const { lessonSlug } = useParams()
  const lesson = lessonSlug ? getLessonBySlug(lessonSlug) : undefined
  const { completeQuiz, openLesson } = useProgress()

  useEffect(() => {
    if (lesson) openLesson(lesson.id)
  }, [lesson, openLesson])

  if (!lesson) {
    return (
      <div className="page">
        <h1>퀘스트를 찾을 수 없습니다</h1>
        <Link to="/quest">Quest Map으로 돌아가기</Link>
      </div>
    )
  }

  const quizzes = getQuizzesForLesson(lesson.id)

  return (
    <div className="page lesson-page">
      <div className="page-heading">
        <p className="eyebrow">{lesson.section}</p>
        <h1>{lesson.title}</h1>
        <p>{lesson.summary}</p>
      </div>

      <section className="panel">
        <h2>학습 목표</h2>
        <ul>
          {lesson.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>개념 설명</h2>
        {lesson.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="panel">
        <h2>공식 문서에서 더 읽기</h2>
        <ul>
          {lesson.officialDocs.map((doc) => (
            <li key={doc.url}>
              <a href={doc.url} target="_blank" rel="noreferrer">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="lesson-actions">
        <Link className="primary-button" to={`/quest/${lesson.slug}/practice`}>
          실습 시작하기
        </Link>
      </div>

      <section className="quiz-list">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onComplete={completeQuiz} />
        ))}
      </section>
    </div>
  )
}
