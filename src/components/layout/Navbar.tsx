import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Button } from '@/components/ui/Button';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'About', href: 'about' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Contact', href: 'contact' },
];

const sectionIds = navItems.map((item) => item.href);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-gray-800/60 bg-base/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="NexaAI home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Nexa<span className="text-gradient">AI</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={[
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                    activeSection === item.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                  <span
                    className={[
                      'mt-0.5 block h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300',
                      activeSection === item.href ? 'w-full opacity-100' : 'w-0 opacity-0',
                    ].join(' ')}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button onClick={() => handleNavClick('contact')} className="px-5 py-2.5">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-base/95 backdrop-blur-xl"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-2 px-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={[
                  'py-3 text-2xl font-semibold transition-colors',
                  activeSection === item.href ? 'text-gradient' : 'text-gray-300 hover:text-white',
                ].join(' ')}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8">
              <Button onClick={() => handleNavClick('contact')} className="px-8 py-3.5 text-base">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
