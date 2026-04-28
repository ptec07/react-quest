import { beforeEach, describe, expect, it } from 'vitest'
import {
  addCompletedExercise,
  addCompletedQuiz,
  calculateProgressPercent,
  emptyProgress,
  readProgress,
  setLastOpenedLesson,
  STORAGE_KEY,
  writeProgress,
} from './progress'

beforeEach(() => {
  localStorage.clear()
})

describe('progress persistence helpers', () => {
  it('falls back to empty progress when stored JSON is malformed', () => {
    localStorage.setItem(STORAGE_KEY, '{not valid json')

    expect(readProgress()).toEqual(emptyProgress)
  })

  it('normalizes partial stored progress and ignores invalid array fields', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completedLessonIds: ['react-intro'],
        completedExerciseIds: 'wrong-shape',
        completedQuizIds: ['state-basic-1'],
        incorrectQuizIds: null,
        bookmarkedLessonIds: ['props'],
        lastOpenedLessonId: 42,
      }),
    )

    expect(readProgress()).toEqual({
      completedLessonIds: ['react-intro'],
      completedExerciseIds: [],
      completedQuizIds: ['state-basic-1'],
      incorrectQuizIds: [],
      bookmarkedLessonIds: ['props'],
      lastOpenedLessonId: undefined,
    })
  })

  it('keeps completed quiz and exercise ids unique when the same item is saved twice', () => {
    const withQuiz = addCompletedQuiz(addCompletedQuiz(emptyProgress, 'state-basic-1'), 'state-basic-1')
    const withExercise = addCompletedExercise(
      addCompletedExercise(withQuiz, 'fix-counter-state'),
      'fix-counter-state',
    )

    expect(withExercise.completedQuizIds).toEqual(['state-basic-1'])
    expect(withExercise.completedExerciseIds).toEqual(['fix-counter-state'])
  })

  it('writes last-opened lesson progress and calculates rounded completion percent', () => {
    const progress = setLastOpenedLesson(
      { ...emptyProgress, completedLessonIds: ['react-intro', 'first-component', 'jsx-basics'] },
      'jsx-basics',
    )

    writeProgress(progress)

    expect(readProgress().lastOpenedLessonId).toBe('jsx-basics')
    expect(calculateProgressPercent(progress, 10)).toBe(30)
    expect(calculateProgressPercent(progress, 0)).toBe(0)
  })
})
