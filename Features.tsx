import './Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps your users engaged with instant load times.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and compliance built-in.',
  },
  {
    icon: '📊',
    title: 'Powerful Analytics',
    description: 'Deep insights into user behavior with real-time dashboards and reports.',
  },
  {
    icon: '🔗',
    title: 'Easy Integrations',
    description: 'Connect with your favorite tools through our extensive API and webhooks.',
  },
  {
    icon: '🎨',
    title: 'Customizable',
    description: 'Tailor every aspect to match your brand with our flexible theming system.',
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description: 'Built on distributed infrastructure to serve users anywhere in the world.',
  },
];

interface FeatureCardProps {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <span className="feature-icon">{feature.icon}</span>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

function Features({
  title = 'Everything You Need',
  subtitle = 'Powerful features to help you build, launch, and scale your product.',
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{title}</h2>
          <p className="features-subtitle">{subtitle}</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function FeaturesPreview() {
  return (
    <div className="preview-container">
      <Features />
    </div>
  );
}

export { Features, FeatureCard };
export type { Feature };
