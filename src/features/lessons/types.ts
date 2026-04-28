export type LessonLevel = 'beginner' | 'intermediate' | 'advanced'

export type OfficialDoc = {
  title: string
  url: string
}

export type Lesson = {
  id: string
  slug: string
  title: string
  section: string
  order: number
  level: LessonLevel
  estimatedMinutes: number
  summary: string
  objectives: string[]
  body: string[]
  officialDocs: OfficialDoc[]
  tags: string[]
  prerequisites: string[]
}

export type Quiz = {
  id: string
  lessonId: string
  type: 'multiple-choice' | 'true-false' | 'code-prediction'
  question: string
  choices: string[]
  answer: string
  explanation: string
}

export type Exercise = {
  id: string
  lessonId: string
  title: string
  type: 'fix-bug' | 'complete-code' | 'build-small-ui'
  prompt: string
  starterCode: string
  solutionCode: string
  hints: string[]
  explanation: string
}
