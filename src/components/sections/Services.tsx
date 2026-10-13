import { Bot, Code, TrendingUp, Palette, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Service } from '@/types';

const services: Service[] = [
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description:
      'Streamline operations with intelligent workflows, custom AI agents, and automated pipelines that work around the clock.',
    features: ['Workflow automation', 'AI chatbots', 'Smart data pipelines'],
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Design & Development',
    description:
      'Modern, lightning-fast websites and web apps built with the latest technologies and optimized for performance and conversion.',
    features: ['Responsive design', 'Web applications', 'E-commerce solutions'],
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Data-driven SEO, paid advertising, and growth strategies that put your brand in front of the right audience at the right time.',
    features: ['SEO optimization', 'Paid advertising', 'Growth strategy'],
  },
  {
    id: 'brand-identity',
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Memorable logos, cohesive design systems, and visual identities that make your brand instantly recognizable and trusted.',
    features: ['Logo design', 'Design systems', 'Visual identity'],
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services That"
          highlight="Drive Results"
          subtitle="From AI-powered automation to stunning web experiences, we offer a full suite of digital services designed to elevate your brand and accelerate growth."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} className="group flex flex-col p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-violet-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
