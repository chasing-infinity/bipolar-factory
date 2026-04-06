export interface DeptOption {
  text: string
  score: number
}

export interface DeptQuestion {
  question: string
  type: 'mcq' | 'text'
  options?: DeptOption[]
  placeholder?: string
}

export const DEPARTMENT_QUESTIONS: Record<string, DeptQuestion[]> = {
  'Technology - Frontend': [
    {
      question: 'Which rendering strategy do you prefer and why?',
      type: 'mcq',
      options: [
        { text: 'SSR — better SEO and initial load', score: 3 },
        { text: 'CSR — simpler development flow', score: 2 },
        { text: 'SSG — best performance for static content', score: 3 },
        { text: 'ISR — best of both worlds', score: 4 },
      ],
    },
    {
      question: 'What is your approach to performance optimization in a React app?',
      type: 'text',
      placeholder: 'Describe your approach with specific techniques...',
    },
    {
      question: 'How comfortable are you with design systems and component libraries?',
      type: 'mcq',
      options: [
        { text: 'I have built one from scratch', score: 4 },
        { text: 'I have extended existing ones', score: 3 },
        { text: 'I consume them but haven\'t built one', score: 2 },
        { text: 'Still learning about them', score: 1 },
      ],
    },
  ],
  'Technology - Backend': [
    {
      question: 'How do you approach API design?',
      type: 'mcq',
      options: [
        { text: 'REST — standard, well understood', score: 3 },
        { text: 'GraphQL — flexible and efficient', score: 4 },
        { text: 'gRPC — for high-performance services', score: 4 },
        { text: 'Whatever the frontend needs', score: 1 },
      ],
    },
    {
      question: 'Describe how you would design a system for 10 million users.',
      type: 'text',
      placeholder: 'Walk through your architecture decisions...',
    },
    {
      question: 'What is your preferred database strategy for complex relationships?',
      type: 'mcq',
      options: [
        { text: 'Relational DB with careful schema design', score: 3 },
        { text: 'NoSQL for flexibility and scale', score: 3 },
        { text: 'Hybrid — right tool for the right job', score: 4 },
        { text: 'I let the ORM decide', score: 1 },
      ],
    },
  ],
  'Technology - DevOps': [
    {
      question: 'What is your CI/CD tool of choice?',
      type: 'mcq',
      options: [
        { text: 'GitHub Actions', score: 4 },
        { text: 'GitLab CI', score: 4 },
        { text: 'Jenkins', score: 3 },
        { text: 'CircleCI', score: 3 },
      ],
    },
    {
      question: 'How do you approach incident management and on-call?',
      type: 'text',
      placeholder: 'Describe your process from alert to resolution...',
    },
    {
      question: 'Which Kubernetes experience level fits you best?',
      type: 'mcq',
      options: [
        { text: 'I manage production clusters daily', score: 4 },
        { text: 'I can deploy and debug workloads', score: 3 },
        { text: 'I understand the concepts but limited hands-on', score: 2 },
        { text: 'Still learning Kubernetes', score: 1 },
      ],
    },
  ],
  'Technology - AI': [
    {
      question: 'What is your go-to framework for ML model development?',
      type: 'mcq',
      options: [
        { text: 'PyTorch — more flexible for research', score: 4 },
        { text: 'TensorFlow/Keras — better production tooling', score: 3 },
        { text: 'Scikit-learn for classical ML', score: 3 },
        { text: 'I use pre-trained APIs and fine-tune', score: 2 },
      ],
    },
    {
      question: 'Describe a real ML problem you solved end-to-end.',
      type: 'text',
      placeholder: 'Include data pipeline, model selection, evaluation and deployment...',
    },
    {
      question: 'How do you handle class imbalance in datasets?',
      type: 'mcq',
      options: [
        { text: 'SMOTE or other oversampling techniques', score: 4 },
        { text: 'Class weighting in the loss function', score: 4 },
        { text: 'Undersampling the majority class', score: 3 },
        { text: 'Collect more data for underrepresented classes', score: 3 },
      ],
    },
  ],
  'Project Manager': [
    {
      question: 'Which project methodology do you primarily use?',
      type: 'mcq',
      options: [
        { text: 'Agile/Scrum', score: 4 },
        { text: 'Kanban', score: 3 },
        { text: 'Waterfall', score: 2 },
        { text: 'Hybrid depending on the project', score: 4 },
      ],
    },
    {
      question: 'Describe how you would handle a project that is 3 weeks behind schedule.',
      type: 'text',
      placeholder: 'Walk through your recovery plan...',
    },
    {
      question: 'How do you manage conflicting priorities from multiple stakeholders?',
      type: 'mcq',
      options: [
        { text: 'Align on a shared priority framework with all parties', score: 4 },
        { text: 'Escalate to leadership to decide', score: 2 },
        { text: 'Focus on the loudest stakeholder', score: 1 },
        { text: 'Negotiate scope and timelines transparently', score: 3 },
      ],
    },
  ],
  'Product Manager': [
    {
      question: 'How do you decide what to build next?',
      type: 'mcq',
      options: [
        { text: 'Data-driven: analytics + user research + business goals', score: 4 },
        { text: 'What the sales team is asking for', score: 1 },
        { text: 'What engineering thinks is feasible quickly', score: 2 },
        { text: 'Competitive analysis and market gaps', score: 3 },
      ],
    },
    {
      question: 'Describe a feature you killed and why it was the right call.',
      type: 'text',
      placeholder: 'Explain your reasoning and what data informed the decision...',
    },
    {
      question: 'How do you measure product success?',
      type: 'mcq',
      options: [
        { text: 'Revenue and retention metrics', score: 3 },
        { text: 'NPS and user satisfaction', score: 3 },
        { text: 'Activation, retention, and referral funnels', score: 4 },
        { text: 'Feature adoption rates', score: 2 },
      ],
    },
  ],
  'Growth Executive': [
    {
      question: 'What is your preferred growth channel for a B2C product?',
      type: 'mcq',
      options: [
        { text: 'Paid acquisition (Meta, Google Ads)', score: 3 },
        { text: 'SEO and content marketing', score: 3 },
        { text: 'Viral loops and referral programs', score: 4 },
        { text: 'Community and influencer marketing', score: 3 },
      ],
    },
    {
      question: 'Walk us through a growth experiment you ran. What was the result?',
      type: 'text',
      placeholder: 'Hypothesis, test, result, and what you learned...',
    },
    {
      question: 'What metric would you obsess over in the first 90 days of a new growth role?',
      type: 'mcq',
      options: [
        { text: 'CAC and CAC payback period', score: 4 },
        { text: 'DAU/MAU ratio', score: 3 },
        { text: 'Top of funnel traffic volume', score: 2 },
        { text: 'Revenue per user', score: 3 },
      ],
    },
  ],
  'Content': [
    {
      question: 'What content format drives the most engagement in your experience?',
      type: 'mcq',
      options: [
        { text: 'Long-form SEO articles', score: 3 },
        { text: 'Short-form video (Reels, Shorts)', score: 4 },
        { text: 'Email newsletters', score: 3 },
        { text: 'Threads and micro-content', score: 3 },
      ],
    },
    {
      question: 'Write a one-paragraph hook for a LinkedIn post announcing a new product launch.',
      type: 'text',
      placeholder: 'Show us your copywriting voice...',
    },
    {
      question: 'How do you approach content ideation for a new brand?',
      type: 'mcq',
      options: [
        { text: 'Audience research + competitor analysis + keyword tools', score: 4 },
        { text: 'Ask the founders what they want to say', score: 2 },
        { text: 'Start with what\'s trending and adapt', score: 3 },
        { text: 'Build from the brand guidelines outward', score: 3 },
      ],
    },
  ],
  'Operations': [
    {
      question: 'What tool best describes your operational workflow setup?',
      type: 'mcq',
      options: [
        { text: 'Notion + Zapier automations', score: 3 },
        { text: 'Custom SOPs in spreadsheets', score: 2 },
        { text: 'Dedicated ops software (e.g. ClickUp, Monday)', score: 3 },
        { text: 'Combination tailored to team size', score: 4 },
      ],
    },
    {
      question: 'Describe a process you completely revamped. What were the before/after results?',
      type: 'text',
      placeholder: 'Include the problem, your solution, and measurable impact...',
    },
    {
      question: 'When do you automate vs. keep a process manual?',
      type: 'mcq',
      options: [
        { text: 'Automate anything repetitive above a frequency threshold', score: 4 },
        { text: 'Only automate when errors become a problem', score: 2 },
        { text: 'If it takes more than 5 minutes daily, automate it', score: 3 },
        { text: 'Automate only when the team is too large to handle it manually', score: 2 },
      ],
    },
  ],
  'Support': [
    {
      question: 'How do you handle an angry customer who is completely wrong?',
      type: 'mcq',
      options: [
        { text: 'Empathize first, then educate gently with facts', score: 4 },
        { text: 'Send them the documentation link', score: 2 },
        { text: 'Escalate immediately to avoid conflict', score: 1 },
        { text: 'Acknowledge their frustration and work toward resolution', score: 3 },
      ],
    },
    {
      question: 'Describe your process for handling a surge in support tickets.',
      type: 'text',
      placeholder: 'Walk through your triage and resolution process...',
    },
    {
      question: 'What metric matters most in a support function?',
      type: 'mcq',
      options: [
        { text: 'First Response Time', score: 3 },
        { text: 'CSAT / Customer Satisfaction Score', score: 4 },
        { text: 'Ticket Resolution Rate', score: 3 },
        { text: 'Average Handle Time', score: 2 },
      ],
    },
  ],
  'Data Annotation': [
    {
      question: 'How do you ensure consistency in annotation across a large team?',
      type: 'mcq',
      options: [
        { text: 'Clear annotation guidelines + regular calibration sessions', score: 4 },
        { text: 'Individual reviewers checking each annotator\'s work', score: 3 },
        { text: 'Automated quality checks after annotation', score: 3 },
        { text: 'Trust the annotators to be consistent', score: 1 },
      ],
    },
    {
      question: 'Describe how you would approach annotating ambiguous data samples.',
      type: 'text',
      placeholder: 'Explain your decision-making process and escalation path...',
    },
    {
      question: 'Which annotation task type have you worked with most?',
      type: 'mcq',
      options: [
        { text: 'Text classification and NER', score: 4 },
        { text: 'Image bounding boxes and segmentation', score: 4 },
        { text: 'Audio transcription and labeling', score: 3 },
        { text: 'RLHF and preference ranking', score: 4 },
      ],
    },
  ],
}
