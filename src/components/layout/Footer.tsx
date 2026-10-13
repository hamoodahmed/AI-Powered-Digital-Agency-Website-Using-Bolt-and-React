import { Sparkles, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import type { NavItem, SocialLink } from '@/types';

const serviceLinks: NavItem[] = [
  { label: 'AI Automation', href: 'services' },
  { label: 'Web Development', href: 'services' },
  { label: 'Digital Marketing', href: 'services' },
  { label: 'Brand Identity', href: 'services' },
];

const companyLinks: NavItem[] = [
  { label: 'About Us', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Contact', href: 'contact' },
];

const legalLinks: NavItem[] = [
  { label: 'Privacy Policy', href: 'home' },
  { label: 'Terms of Service', href: 'home' },
  { label: 'Cookie Policy', href: 'home' },
];

const socials: SocialLink[] = [
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'Instagram', href: '#', icon: Instagram },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-gray-800/50 bg-base">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Nexa<span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              We build the future of digital with AI-powered automation, stunning web design,
              and data-driven marketing strategies that drive real growth.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 transition-all duration-300 hover:border-blue-500/40 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-800/50 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              hello@nexaai.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />
              +1 (555) 012-3456
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              San Francisco, CA
            </span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NexaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
