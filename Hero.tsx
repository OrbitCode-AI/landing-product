import './Hero.css';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

function Hero({
  headline = 'The Modern Way to Build Products',
  subheadline = 'Powerful tools that help you ship faster, collaborate better, and delight your users. Join thousands of teams already using our platform.',
  ctaPrimary = 'Start Free Trial',
  ctaSecondary = 'Watch Demo',
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-badge">🚀 Launching Soon</div>
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-subheadline">{subheadline}</p>
        <div className="hero-actions">
          <a href="#" className="hero-btn primary">{ctaPrimary}</a>
          <a href="#" className="hero-btn secondary">
            <span className="play-icon">▶</span>
            {ctaSecondary}
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="hero-stat">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="hero-stat">
            <span className="stat-value">4.9★</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-mockup">
          <div className="mockup-header">
            <span className="mockup-dot" />
            <span className="mockup-dot" />
            <span className="mockup-dot" />
          </div>
          <div className="mockup-content">
            <span>📊</span>
            <p>Product Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return (
    <div className="preview-container">
      <Hero />
    </div>
  );
}

export { Hero };
