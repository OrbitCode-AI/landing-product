import './HowItWorks.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your account in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Set up your workspace and customize settings to match your workflow.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'Go live with your product and start seeing results immediately.',
  },
];

interface StepCardProps {
  step: Step;
}

function StepCard({ step }: StepCardProps) {
  return (
    <div className="step-card">
      <span className="step-number">{step.number}</span>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-description">{step.description}</p>
    </div>
  );
}

interface HowItWorksProps {
  title?: string;
  steps?: Step[];
}

function HowItWorks({ title = 'How It Works', steps = defaultSteps }: HowItWorksProps) {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">{title}</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HowItWorksPreview() {
  return (
    <div className="preview-container">
      <HowItWorks />
    </div>
  );
}

export { HowItWorks, StepCard };
export type { Step };
