import { Link } from 'react-router-dom'
import { lessons } from '../content/lessons'
import { ProgressBar } from '../components/ProgressBar'
import { calculateProgressPercent } from '../features/progress/progress'
import { useProgress } from '../features/progress/useProgress'

export function HomePage() {
  const { progress } = useProgress()
  const percent = calculateProgressPercent(progress, lessons.length)
  const nextLesson = lessons.find((lesson) => !progress.completedLessonIds.includes(lesson.id)) ?? lessons[0]

  return (
    <div className="page home-page">
      <section className="hero-card">
        <p className="eyebrow">ko.react.dev 공식 문서 기반</p>
        <h1>React Quest</h1>
        <p className="hero-copy">읽고, 고치고, 실행하면서 React를 배운다.</p>
        <p>
          React 공식 문서를 따라가며 컴포넌트, props, state, 이벤트, Thinking in React를 퀘스트처럼 익히는 한국어 실습형 학습 웹앱입니다.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/quest">
            코스 맵 보기
          </Link>
          <Link className="secondary-button" to={`/quest/${nextLesson.slug}`}>
            이어서 학습하기
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Progress</p>
            <h2>나의 진행률</h2>
          </div>
          <strong>{percent}%</strong>
        </div>
        <ProgressBar value={percent} />
        <p>다음 추천 퀘스트: {nextLesson.title}</p>
      </section>
    </div>
  )
}
