import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  CheckCircle2,
  Send,
  AlertCircle,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import type { FormData, FormErrors } from '@/types';

const services = [
  'AI Automation',
  'Web Design & Development',
  'Digital Marketing',
  'Brand Identity',
  'Other',
];

const budgets = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@nexaai.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
];

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.service) {
      newErrors.service = 'Please select a service';
    }

    if (!data.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const inputBaseClass =
    'w-full rounded-xl border bg-gray-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40';

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[30%] h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build"
          highlight="Something Great"
          subtitle="Tell us about your project and we will get back to you within 24 hours. No obligations, just a conversation about how we can help."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Contact info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Whether you have a project in mind or just want to explore what is possible,
              we are here to help. Reach out through any of the channels below.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/40 p-4 transition-colors hover:border-blue-500/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-wider text-gray-500">
                Follow Us
              </div>
              <div className="mt-3 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 transition-all duration-300 hover:border-blue-500/40 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30"
                  style={{ animation: 'fadeInUp 0.5s ease-out' }}
                >
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">Message Received!</h3>
                <p className="mt-2 max-w-sm text-sm text-gray-400">
                  Thanks! We will be in touch within 24 hours. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className={`${inputBaseClass} ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-gray-800 focus:border-blue-500/50'
                    }`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    className={`${inputBaseClass} ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-gray-800 focus:border-blue-500/50'
                    }`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`${inputBaseClass} ${
                        errors.service
                          ? 'border-red-500/50 focus:ring-red-500/40'
                          : 'border-gray-800 focus:border-blue-500/50'
                      }`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className={`${inputBaseClass} ${
                        errors.budget
                          ? 'border-red-500/50 focus:ring-red-500/40'
                          : 'border-gray-800 focus:border-blue-500/50'
                      }`}
                      aria-invalid={!!errors.budget}
                    >
                      <option value="">Select a range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.budget}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputBaseClass} resize-none ${
                      errors.message
                        ? 'border-red-500/50 focus:ring-red-500/40'
                        : 'border-gray-800 focus:border-blue-500/50'
                    }`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
