import { useCallback, useEffect, useState } from 'react'
import {
  addCompletedExercise,
  addCompletedQuiz,
  readProgress,
  setLastOpenedLesson,
  type Progress,
  writeProgress,
} from './progress'

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => readProgress())

  useEffect(() => {
    writeProgress(progress)
  }, [progress])

  const completeQuiz = useCallback((quizId: string) => {
    setProgress((current) => addCompletedQuiz(current, quizId))
  }, [])

  const completeExercise = useCallback((exerciseId: string) => {
    setProgress((current) => addCompletedExercise(current, exerciseId))
  }, [])

  const openLesson = useCallback((lessonId: string) => {
    setProgress((current) => setLastOpenedLesson(current, lessonId))
  }, [])

  return { progress, completeQuiz, completeExercise, openLesson }
}
