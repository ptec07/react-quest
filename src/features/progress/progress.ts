export const STORAGE_KEY = 'react-quest-progress'

export type Progress = {
  completedLessonIds: string[]
  completedExerciseIds: string[]
  completedQuizIds: string[]
  incorrectQuizIds: string[]
  bookmarkedLessonIds: string[]
  lastOpenedLessonId?: string
}

export const emptyProgress: Progress = {
  completedLessonIds: [],
  completedExerciseIds: [],
  completedQuizIds: [],
  incorrectQuizIds: [],
  bookmarkedLessonIds: [],
}

function unique(values: string[]) {
  return Array.from(new Set(values))
}

export function readProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgress
    const parsed = JSON.parse(raw) as Partial<Progress>
    return {
      completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
      completedExerciseIds: Array.isArray(parsed.completedExerciseIds) ? parsed.completedExerciseIds : [],
      completedQuizIds: Array.isArray(parsed.completedQuizIds) ? parsed.completedQuizIds : [],
      incorrectQuizIds: Array.isArray(parsed.incorrectQuizIds) ? parsed.incorrectQuizIds : [],
      bookmarkedLessonIds: Array.isArray(parsed.bookmarkedLessonIds) ? parsed.bookmarkedLessonIds : [],
      lastOpenedLessonId: typeof parsed.lastOpenedLessonId === 'string' ? parsed.lastOpenedLessonId : undefined,
    }
  } catch {
    return emptyProgress
  }
}

export function writeProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function addCompletedQuiz(progress: Progress, quizId: string): Progress {
  return { ...progress, completedQuizIds: unique([...progress.completedQuizIds, quizId]) }
}

export function addCompletedExercise(progress: Progress, exerciseId: string): Progress {
  return { ...progress, completedExerciseIds: unique([...progress.completedExerciseIds, exerciseId]) }
}

export function setLastOpenedLesson(progress: Progress, lessonId: string): Progress {
  return { ...progress, lastOpenedLessonId: lessonId }
}

export function calculateProgressPercent(progress: Progress, totalLessons: number) {
  if (totalLessons === 0) return 0
  return Math.round((progress.completedLessonIds.length / totalLessons) * 100)
}
