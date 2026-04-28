import { describe, expect, it } from 'vitest'
import { lessons } from './lessons'
import { exercises, getExerciseForLesson, getExercisesForLesson } from './exercises'

const expectedMarkersByLesson: Record<string, string[]> = {
  'react-intro': ['WelcomePanel', 'React Quest 시작하기'],
  'first-component': ['ProfileCard', 'Ada Lovelace'],
  'jsx-basics': ['learner', 'React Explorer'],
  props: ['Avatar', 'Grace Hopper'],
  'conditional-rendering': ['packed', '✅'],
  'rendering-lists': ['people.map', 'key={person.id}'],
  events: ['onClick={handleClick}', '알림 열기'],
  'state-usestate': ['useState', 'Count: {count}'],
  'state-objects-arrays': ['setForm', '...form'],
  'thinking-in-react': ['FilterableProductTable', 'ProductTable'],
}

describe('official-doc-aligned practice content', () => {
  it('provides a unique curated exercise for every MVP lesson', () => {
    for (const lesson of lessons) {
      const exercise = getExerciseForLesson(lesson.id)

      expect(exercise, `${lesson.id} should have an exercise`).toBeDefined()
      expect(exercise?.starterCode, `${lesson.id} should not use Sandpack defaults`).not.toMatch(/Hello world/i)
      expect(exercise?.solutionCode, `${lesson.id} should not use Sandpack defaults`).not.toMatch(/Hello world/i)
      expect(exercise?.starterCode, `${lesson.id} should have a real task, not a completed duplicate`).not.toBe(
        exercise?.solutionCode,
      )
      expect(exercise?.hints.length, `${lesson.id} should guide the learner`).toBeGreaterThanOrEqual(2)
      expect(exercise?.explanation, `${lesson.id} should explain the official React concept`).toMatch(
        /공식 문서|React|JSX|props|state|key|이벤트|컴포넌트/,
      )

      for (const marker of expectedMarkersByLesson[lesson.id] ?? []) {
        expect(
          `${exercise?.starterCode}\n${exercise?.solutionCode}`,
          `${lesson.id} should include marker ${marker}`,
        ).toContain(marker)
      }
    }
  })

  it('provides at least two curated exercises for every MVP lesson', () => {
    const ids = new Set<string>()

    for (const exercise of exercises) {
      expect(ids.has(exercise.id), `${exercise.id} should be unique`).toBe(false)
      ids.add(exercise.id)
    }

    for (const lesson of lessons) {
      const lessonExercises = getExercisesForLesson(lesson.id)
      expect(lessonExercises.length, `${lesson.id} should have multiple exercises`).toBeGreaterThanOrEqual(2)
      expect(new Set(lessonExercises.map((exercise) => exercise.title)).size).toBe(lessonExercises.length)
    }
  })
})
