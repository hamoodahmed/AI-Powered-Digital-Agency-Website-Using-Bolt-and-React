import { ArrowRight, ChevronDown, Zap, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import type { Stat } from '@/types';

const stats: Stat[] = [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Rating', value: '5.0' },
];

const statIcons = [Zap, Users, Star];

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] animate-float-slow" />
        <div className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-[120px] animate-float-slower" />
        <div className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-blue-500/10 blur-[90px] animate-float-slow" />
      </div>
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge>
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            AI-Powered Digital Solutions
          </Badge>
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We Build the <span className="text-gradient">Future</span>
          <br />
          of Digital
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
          NexaAI combines artificial intelligence, automation, and cutting-edge design to
          transform your digital presence. From intelligent workflows to stunning websites,
          we engineer solutions that scale.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={() => scrollTo('contact')} className="w-full sm:w-auto">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-blue-400"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-6 w-6 animate-scroll-bounce" />
      </button>
    </section>
  );
}
