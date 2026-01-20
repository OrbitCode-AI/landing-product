import './CTA.css';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

function CTA({
  title = 'Ready to Get Started?',
  subtitle = "Join thousands of teams who've already made the switch. Start your free trial today.",
  buttonText = 'Start Free Trial',
}: CTAProps) {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-glow" />
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <a href="#" className="cta-button">{buttonText}</a>
        <p className="cta-note">No credit card required • 14-day free trial</p>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function CTAPreview() {
  return (
    <div className="preview-container">
      <CTA />
    </div>
  );
}

export { CTA };
