export interface PersonalityOption {
  text: string
  score: number
}

export interface PersonalityQuestion {
  category: string
  question: string
  options: PersonalityOption[]
}

export const PERSONALITY_QUESTIONS: PersonalityQuestion[] = [
  // Awareness
  {
    category: 'Awareness',
    question: 'When you make a mistake at work, what is your immediate reaction?',
    options: [
      { text: 'I acknowledge it quickly and figure out what went wrong', score: 4 },
      { text: 'I try to fix it before anyone notices', score: 2 },
      { text: 'I analyze the situation before deciding what to do', score: 3 },
      { text: 'I wait to see if it causes any real issues first', score: 1 },
    ],
  },
  {
    category: 'Awareness',
    question: 'How often do you actively seek feedback on your work?',
    options: [
      { text: 'Regularly — I proactively ask for it after key milestones', score: 4 },
      { text: 'Occasionally, when I feel uncertain', score: 3 },
      { text: 'Rarely — I prefer to assess my own work', score: 2 },
      { text: 'Almost never — feedback makes me uncomfortable', score: 1 },
    ],
  },
  // Accountability
  {
    category: 'Accountability',
    question: 'A project you led missed its deadline. What do you do?',
    options: [
      { text: 'Own it fully, communicate clearly, and present a revised plan', score: 4 },
      { text: 'Explain the external factors that caused the delay', score: 2 },
      { text: 'Work overtime to minimize the impact first', score: 3 },
      { text: 'Wait for someone to raise it and then address it', score: 1 },
    ],
  },
  {
    category: 'Accountability',
    question: 'Your teammate is underperforming and affecting the team. You:',
    options: [
      { text: 'Have a direct, private conversation with them about it', score: 4 },
      { text: 'Pick up their slack to keep things running', score: 2 },
      { text: 'Bring it up in the next team meeting', score: 3 },
      { text: 'Hope the manager notices and addresses it', score: 1 },
    ],
  },
  // Proactivity
  {
    category: 'Proactivity',
    question: 'You spot a process that wastes time for your whole team. You:',
    options: [
      { text: 'Document the problem, draft a solution, and bring it to your manager', score: 4 },
      { text: 'Mention it in passing to a colleague', score: 2 },
      { text: 'Start fixing it quietly on your own', score: 3 },
      { text: 'Assume someone else is already aware of it', score: 1 },
    ],
  },
  {
    category: 'Proactivity',
    question: 'Your workload is lighter than usual this week. What do you do?',
    options: [
      { text: 'Find a skill gap or company problem to work on proactively', score: 4 },
      { text: 'Help teammates who seem overloaded', score: 3 },
      { text: 'Get ahead on upcoming tasks', score: 3 },
      { text: 'Enjoy the breather — rest is important too', score: 1 },
    ],
  },
  // Ethics
  {
    category: 'Ethics',
    question: 'You find out a colleague inflated their numbers in a report. You:',
    options: [
      { text: 'Speak to the colleague first, then escalate if needed', score: 4 },
      { text: 'Report it directly to your manager', score: 3 },
      { text: 'Stay out of it — not your responsibility', score: 1 },
      { text: 'Mention it anonymously if there is a channel for that', score: 2 },
    ],
  },
  {
    category: 'Ethics',
    question: 'A client offers you a personal gift for preferential treatment. You:',
    options: [
      { text: 'Decline politely and explain company policy', score: 4 },
      { text: 'Accept but ensure you still treat everyone fairly', score: 2 },
      { text: 'Report the offer to your manager', score: 3 },
      { text: 'Accept — it is a gesture of goodwill', score: 1 },
    ],
  },
  // Communication
  {
    category: 'Communication',
    question: 'You disagree with your manager\'s decision on a project approach. You:',
    options: [
      { text: 'Share your perspective clearly with data and reasoning, then respect the final call', score: 4 },
      { text: 'Go along with it to avoid conflict', score: 1 },
      { text: 'Express disagreement to peers but comply with the decision', score: 2 },
      { text: 'Ask for a 1:1 to discuss your concerns privately', score: 3 },
    ],
  },
  {
    category: 'Communication',
    question: 'How do you handle a situation where your message was clearly misunderstood?',
    options: [
      { text: 'Reflect on how I communicated it and rephrase with more clarity', score: 4 },
      { text: 'Repeat the same message more clearly', score: 2 },
      { text: 'Ask the other person to explain what they understood', score: 3 },
      { text: 'Get frustrated that they didn\'t get it the first time', score: 1 },
    ],
  },
  // Agility
  {
    category: 'Agility',
    question: 'Your company pivots and your role changes significantly. You:',
    options: [
      { text: 'Embrace it — new challenges mean new growth', score: 4 },
      { text: 'Feel anxious but adapt because you have to', score: 3 },
      { text: 'Try to negotiate staying in your original role', score: 2 },
      { text: 'Start looking for other opportunities immediately', score: 1 },
    ],
  },
  {
    category: 'Agility',
    question: 'A major tool or platform your team relies on is deprecated overnight. You:',
    options: [
      { text: 'Jump in to research alternatives and help drive the migration', score: 4 },
      { text: 'Wait for the team lead to assign next steps', score: 2 },
      { text: 'Raise the issue in the team and start a discussion', score: 3 },
      { text: 'Feel stressed and struggle to adapt quickly', score: 1 },
    ],
  },
  // Integrity
  {
    category: 'Integrity',
    question: 'You could take credit for a colleague\'s idea in a high-stakes meeting. You:',
    options: [
      { text: 'Give credit clearly and immediately', score: 4 },
      { text: 'Mention it was a collaborative idea', score: 3 },
      { text: 'Take credit but plan to acknowledge them later', score: 2 },
      { text: 'Take credit — ideas belong to whoever presents them', score: 1 },
    ],
  },
  {
    category: 'Integrity',
    question: 'You realize mid-project that your earlier estimate was completely wrong. You:',
    options: [
      { text: 'Flag it immediately with transparency and revised timelines', score: 4 },
      { text: 'Try to fix it without telling anyone', score: 2 },
      { text: 'Inform the team once you have a clearer picture', score: 3 },
      { text: 'Blame the complexity of the project when asked', score: 1 },
    ],
  },
]
