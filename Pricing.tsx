import './Pricing.css';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const defaultPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for trying out our product',
    features: ['Up to 3 projects', 'Basic analytics', 'Community support', '1GB storage'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and businesses',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '100GB storage', 'Custom domains'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'SSO & SAML', 'Custom integrations'],
    cta: 'Contact Sales',
  },
];

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <span className="popular-badge">Most Popular</span>}
      <h3 className="plan-name">{plan.name}</h3>
      <div className="plan-price">
        <span className="price-amount">{plan.price}</span>
        <span className="price-period">{plan.period}</span>
      </div>
      <p className="plan-description">{plan.description}</p>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#" className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
        {plan.cta}
      </a>
    </div>
  );
}

interface PricingProps {
  title?: string;
  plans?: PricingPlan[];
}

function Pricing({ title = 'Simple, Transparent Pricing', plans = defaultPlans }: PricingProps) {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">{title}</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function PricingPreview() {
  return (
    <div className="preview-container">
      <Pricing />
    </div>
  );
}

export { Pricing, PricingCard };
export type { PricingPlan };
