import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+27 84 890 5690' },
  { icon: Mail, label: 'Email', value: 'lastvheremu1@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Queenstown, South Africa' },
  { icon: Clock, label: 'Operating Hours', value: 'Monday - Saturday\n8:00 AM - 6:00 PM' },
];

const serviceOptions = [
  'Computer Repair',
  'CCTV Installation',
  'DSTV Installation',
  'Solar Lights',
  'Electrical Accessories',
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      left,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      right,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const subject = `Service Inquiry: ${formData.service}`;
      const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:lastvheremu1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-surface-dark border ${
      errors[field] ? 'border-red-500' : 'border-border-subtle'
    } text-txt-primary px-4 py-3.5 rounded-sm font-body text-base placeholder:text-txt-muted/50 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_0_2px_rgba(48,245,224,0.1)] transition-all duration-300`;

  return (
    <section ref={sectionRef} id="contact" className="bg-void py-24 lg:py-32">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
          {/* Left — Form */}
          <div ref={leftRef}>
            <SectionHeader label="GET IN TOUCH" title="Contact Us" />

            {submitted ? (
              <div className="bg-surface-dark border border-neon-dim p-8 rounded-sm text-center">
                <p className="text-neon-cyan font-display text-2xl mb-2">Message Sent!</p>
                <p className="text-txt-secondary font-body">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses('name')}
                  />
                </div>

                <div>
                  <label className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 84 890 5690"
                    className={inputClasses('phone')}
                  />
                </div>

                <div>
                  <label className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses('email')}
                  />
                </div>

                <div>
                  <label className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses('service')}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`${inputClasses('message')} resize-vertical`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neon-cyan text-void py-4 font-body text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 hover:shadow-neon-md hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right — Info Card */}
          <div ref={rightRef}>
            <div className="bg-surface-dark border border-border-subtle p-10 lg:p-12 rounded-sm lg:mt-20">
              <h3 className="font-display text-3xl font-medium text-txt-primary mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <Icon className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <span className="text-txt-muted text-xs font-body uppercase tracking-[0.08em] block mb-1">
                          {item.label}
                        </span>
                        <span className="text-txt-primary font-body text-base whitespace-pre-line">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://wa.me/c/27848905690"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-[#25D366] text-white py-4 px-6 rounded-sm font-body text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                View WhatsApp Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
