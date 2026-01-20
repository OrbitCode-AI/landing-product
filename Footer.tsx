import './Footer.css';

interface FooterProps {
  productName?: string;
}

function Footer({ productName = 'Product' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">✦ {productName}</span>
            <p className="footer-tagline">Building the future of productivity.</p>
          </div>
          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Integrations</a>
              <a href="#">Changelog</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Support</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {productName}. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return (
    <div className="preview-container">
      <Footer />
    </div>
  );
}

export { Footer };
