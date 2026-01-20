import './Testimonials.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "This product has completely transformed how our team works. We've seen a 40% increase in productivity.",
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'TechCorp',
    avatar: '👩‍💼',
  },
  {
    quote: "The best investment we've made this year. The onboarding was seamless and support is exceptional.",
    author: 'Marcus Johnson',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: '👨‍💻',
  },
  {
    quote: "Finally a tool that actually delivers on its promises. Our customers love the new experience.",
    author: 'Emily Rodriguez',
    role: 'Product Lead',
    company: 'InnovateCo',
    avatar: '👩‍🔬',
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <div className="testimonial-author">
        <span className="author-avatar">{testimonial.avatar}</span>
        <div className="author-info">
          <span className="author-name">{testimonial.author}</span>
          <span className="author-role">{testimonial.role}, {testimonial.company}</span>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
}

function Testimonials({
  title = 'Loved by Teams Everywhere',
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">{title}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function TestimonialsPreview() {
  return (
    <div className="preview-container">
      <Testimonials />
    </div>
  );
}

export { Testimonials, TestimonialCard };
export type { Testimonial };
