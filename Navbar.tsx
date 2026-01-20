import './Navbar.css';

interface NavbarProps {
  productName?: string;
}

function Navbar({ productName = 'Product' }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-mark">✦</span>
          {productName}
        </a>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#" className="navbar-cta">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

// Default export renders component in isolation for preview
export default function NavbarPreview() {
  return (
    <div className="preview-container">
      <Navbar />
      <Navbar productName="MyApp" />
    </div>
  );
}

export { Navbar };
