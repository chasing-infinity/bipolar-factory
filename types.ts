export type Department =
  | 'Technology - Frontend'
  | 'Technology - Backend'
  | 'Technology - DevOps'
  | 'Technology - AI'
  | 'Project Manager'
  | 'Product Manager'
  | 'Growth Executive'
  | 'Content'
  | 'Operations'
  | 'Support'
  | 'Data Annotation'

export interface CandidateDetails {
  fullName: string
  email: string
  phone: string
  department: Department | ''
}

export interface PersonalityAnswer {
  category: string
  questionIndex: number
  optionIndex: number
  score: number
}

export interface PersonalityScores {
  Awareness: number
  Accountability: number
  Proactivity: number
  Ethics: number
  Communication: number
  Agility: number
  Integrity: number
  total: number
}

export interface MemoryGameResult {
  timeTaken: number   // seconds
  moves: number
  score: number       // computed
}

export interface DepartmentAnswer {
  questionIndex: number
  answer: string
  score?: number      // for MCQ
}

export interface FinalDetails {
  motivation: string
  companyUnderstanding: string
  resumeUrl: string
  noticePeriod: string
  currentCTC: string
  expectedCTC: string
}

export interface AppState {
  currentStep: number
  candidate: CandidateDetails
  personalityAnswers: PersonalityAnswer[]
  personalityScores: PersonalityScores
  memoryGame: MemoryGameResult | null
  departmentAnswers: DepartmentAnswer[]
  final: FinalDetails
}

export const initialState: AppState = {
  currentStep: 0,
  candidate: { fullName: '', email: '', phone: '', department: '' },
  personalityAnswers: [],
  personalityScores: {
    Awareness: 0,
    Accountability: 0,
    Proactivity: 0,
    Ethics: 0,
    Communication: 0,
    Agility: 0,
    Integrity: 0,
    total: 0,
  },
  memoryGame: null,
  departmentAnswers: [],
  final: {
    motivation: '',
    companyUnderstanding: '',
    resumeUrl: '',
    noticePeriod: '',
    currentCTC: '',
    expectedCTC: '',
  },
}
