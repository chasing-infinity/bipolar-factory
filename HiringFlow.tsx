'use client'

import { useState } from 'react'
import { AppState, initialState, PersonalityAnswer, PersonalityScores, MemoryGameResult, DepartmentAnswer, FinalDetails } from '@/utils/types'
import { submitToGoogleSheets } from '@/utils/submit'

import ProgressBar from './ui/ProgressBar'
import Step1CandidateDetails from './steps/Step1CandidateDetails'
import Step2Personality from './steps/Step2Personality'
import Step3Memory from './steps/Step3Memory'
import Step4Department from './steps/Step4Department'
import Step5Final from './steps/Step5Final'
import SuccessScreen from './SuccessScreen'

export default function HiringFlow() {
  const [state, setState] = useState<AppState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const goTo = (step: number) =>
    setState((s) => ({ ...s, currentStep: step }))

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')
    try {
      await submitToGoogleSheets(state)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl">
            <SuccessScreen
              name={state.candidate.fullName}
              department={state.candidate.department}
              personalityTotal={state.personalityScores.total}
              memoryScore={state.memoryGame?.score ?? 0}
            />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-10">
            <ProgressBar currentStep={state.currentStep} />
          </div>

          {/* Step content */}
          <div key={state.currentStep}>
            {state.currentStep === 0 && (
              <Step1CandidateDetails
                data={state.candidate}
                onChange={(candidate) => setState((s) => ({ ...s, candidate }))}
                onNext={() => goTo(1)}
              />
            )}

            {state.currentStep === 1 && (
              <Step2Personality
                answers={state.personalityAnswers}
                onComplete={(personalityAnswers: PersonalityAnswer[], personalityScores: PersonalityScores) => {
                  setState((s) => ({ ...s, personalityAnswers, personalityScores }))
                  goTo(2)
                }}
                onBack={() => goTo(0)}
              />
            )}

            {state.currentStep === 2 && (
              <Step3Memory
                result={state.memoryGame}
                onComplete={(memoryGame: MemoryGameResult) => {
                  setState((s) => ({ ...s, memoryGame }))
                  goTo(3)
                }}
                onBack={() => goTo(1)}
              />
            )}

            {state.currentStep === 3 && (
              <Step4Department
                department={state.candidate.department}
                answers={state.departmentAnswers}
                onChange={(departmentAnswers: DepartmentAnswer[]) =>
                  setState((s) => ({ ...s, departmentAnswers }))
                }
                onNext={() => goTo(4)}
                onBack={() => goTo(2)}
              />
            )}

            {state.currentStep === 4 && (
              <>
                <Step5Final
                  data={state.final}
                  onChange={(final: FinalDetails) => setState((s) => ({ ...s, final }))}
                  onSubmit={handleSubmit}
                  onBack={() => goTo(3)}
                  isSubmitting={isSubmitting}
                />
                {submitError && (
                  <div className="mt-4 border border-ember/30 bg-ember/5 px-4 py-3">
                    <p className="font-mono text-xs text-ember">{submitError}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="border-b border-white/5 px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-acid flex items-center justify-center">
          <span className="font-display text-void text-lg leading-none">B</span>
        </div>
        <span className="font-display text-xl tracking-widest text-paper">BIPOLAR FACTORY</span>
      </div>
      <span className="font-mono text-xs text-white/20 hidden sm:block">Hiring Portal</span>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-4 flex items-center justify-between">
      <span className="font-mono text-[10px] text-white/15">© {new Date().getFullYear()} Bipolar Factory</span>
      <span className="font-mono text-[10px] text-white/15">All responses encrypted in transit</span>
    </footer>
  )
}
