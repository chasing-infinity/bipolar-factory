import { AppState } from './types'

export async function uploadResumeToCloudinary(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary environment variables not set.')
  }

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)
  formData.append('resource_type', 'raw')
  formData.append('folder', 'bipolar-factory-resumes')

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error?.message || 'Cloudinary upload failed')
  }

  const data = await res.json()
  return data.secure_url
}

export function computeMemoryScore(timeTaken: number, moves: number): number {
  // Lower time and fewer moves = higher score, max 100
  const timeScore = Math.max(0, 100 - Math.floor(timeTaken / 3))
  const moveScore = Math.max(0, 100 - moves * 4)
  return Math.round((timeScore + moveScore) / 2)
}

export async function submitToGoogleSheets(state: AppState): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_GAS_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('Google Apps Script webhook URL not set.')
  }

  const { candidate, personalityScores, memoryGame, departmentAnswers, final } = state

  const payload = {
    timestamp: new Date().toISOString(),
    name: candidate.fullName,
    email: candidate.email,
    phone: candidate.phone,
    department: candidate.department,

    // Personality
    personalityAwareness: personalityScores.Awareness,
    personalityAccountability: personalityScores.Accountability,
    personalityProactivity: personalityScores.Proactivity,
    personalityEthics: personalityScores.Ethics,
    personalityCommunication: personalityScores.Communication,
    personalityAgility: personalityScores.Agility,
    personalityIntegrity: personalityScores.Integrity,
    personalityTotal: personalityScores.total,

    // Memory game
    memoryTimeTaken: memoryGame?.timeTaken ?? 0,
    memoryMoves: memoryGame?.moves ?? 0,
    memoryScore: memoryGame?.score ?? 0,

    // Department answers (stringified)
    departmentAnswers: departmentAnswers
      .map((a, i) => `Q${i + 1}: ${a.answer}`)
      .join(' | '),

    // Final
    motivation: final.motivation,
    companyUnderstanding: final.companyUnderstanding,
    resumeUrl: final.resumeUrl,
    noticePeriod: final.noticePeriod,
    currentCTC: final.currentCTC,
    expectedCTC: final.expectedCTC,
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  // no-cors means we can't read the response, but if it throws it's a network error
  void res
}
