# Employee Feedback & Evaluation Platform

A platform designed to evaluate employees' social and soft skills based on peer feedback. This platform helps assess workers' potential for leadership or promotion by using a structured set of criteria and scenario-based evaluations. The evaluation resembles a personality test format tailored to assess career readiness and suitability for specific roles, such as HR/Recruiter and Engineering roles.

## Project Overview

The Employee Feedback & Evaluation Platform enables team members to provide feedback on each other's soft skills, such as communication, collaboration, and problem-solving abilities. The feedback is used to generate role-specific scores that indicate a worker's readiness for promotion or leadership roles. The system is inspired by assessments like the 16 Personalities test, adapting it to career-focused evaluations.

## Key Features

- **Role-Specific Evaluation Criteria**: Tailored criteria and weighted scoring systems for roles like HR/Recruiter and Engineering.
- **Scenario-Based Evaluation**: Real-world scenarios to assess responses and gather insights into an individual's capabilities under different circumstances.
- **Peer Feedback Collection**: Structured feedback forms that allow team members to rate and comment on each other’s skills anonymously.
- **Automated Scoring**: A formula-based scoring system that calculates an overall score based on role-specific weighting.
- **Detailed Reports**: Comprehensive reports that highlight strengths, areas for improvement, and suitability for leadership roles.

## Evaluation Criteria

The evaluation focuses on key soft skills that are essential for success in leadership or specific roles within IT companies. Each criterion is rated on a scale from 1–5 and includes narrative feedback.

### General Criteria

- **Communication Skills**: Clarity, active listening, and constructive feedback.
- **Collaboration and Teamwork**: Cooperation, conflict resolution, and adaptability.
- **Empathy and Emotional Intelligence**: Self-awareness, empathy, and self-regulation.
- **Problem-Solving and Initiative**: Proactivity, decision-making, and resilience.
- **Leadership Potential**: Influence and inspiration, delegation, and accountability.

### Scenario-Based Criteria

Specific scenarios are provided to simulate real-life situations and assess individuals' responses in a context relevant to their roles:

- **HR/Recruiter Scenarios**: Conflict resolution, candidate feedback sessions, team collaboration, etc.
- **Engineering Scenarios**: Debugging under pressure, team project deadlines, task delegation, etc.

## Role-Specific Formulas

Each role has a formula-based scoring system that weighs specific skills according to the demands of that role. Here are example formulas:

### HR/Recruiter Role Formula

\[
\text{HR/Recruiter Score} = (0.35 \times \text{Communication}) + (0.30 \times \text{Empathy and Emotional Intelligence}) + (0.15 \times \text{Collaboration and Teamwork}) + (0.10 \times \text{Leadership Potential}) + (0.10 \times \text{Problem-Solving and Initiative})
\]

### Engineering Role Formula

\[
\text{Engineering Score} = (0.30 \times \text{Problem-Solving and Initiative}) + (0.20 \times \text{Communication}) + (0.20 \times \text{Collaboration and Teamwork}) + (0.10 \times \text{Adaptability}) + (0.10 \times \text{Leadership Potential}) + (0.10 \times \text{Emotional Intelligence})
\]

## Usage

1. **Create Evaluation Forms**: Forms are generated based on the specific role and criteria.
2. **Collect Peer Feedback**: Team members anonymously rate and provide feedback on each other.
3. **Calculate Scores**: Scores are calculated automatically using role-specific formulas.
4. **Generate Reports**: Detailed reports are created, indicating strengths, areas for growth, and leadership potential.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/litehacker/soft-skills-evaluation.git
   ```

2. Install locally:

   ```bash
   npm i
   ```

3. Start locally:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
