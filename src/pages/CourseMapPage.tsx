import { LessonCard } from '../components/LessonCard'
import { lessonsBySection } from '../content/lessons'
import { useProgress } from '../features/progress/useProgress'

export function CourseMapPage() {
  const groups = lessonsBySection()
  const { progress } = useProgress()

  return (
    <div className="page">
      <div className="page-heading">
        <p className="eyebrow">React Quest</p>
        <h1>Quest Map</h1>
        <p>React 공식 문서 흐름을 따라 핵심 개념을 차례대로 학습합니다.</p>
      </div>

      {Object.entries(groups).map(([section, sectionLessons]) => (
        <section className="course-section" key={section}>
          <h2>{section}</h2>
          <div className="lesson-grid">
            {sectionLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} completed={progress.completedLessonIds.includes(lesson.id)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
