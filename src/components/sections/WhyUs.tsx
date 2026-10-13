import { Brain, Zap, DollarSign, Headphones, Trophy, Cpu } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Differentiator, Stat } from '@/types';

const differentiators: Differentiator[] = [
  {
    id: 'ai-first',
    icon: Brain,
    title: 'AI-First Approach',
    description: 'We leverage artificial intelligence at every step to deliver smarter, faster, and more efficient solutions.',
  },
  {
    id: 'fast-delivery',
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile workflows and automated pipelines mean your project ships in weeks, not months.',
  },
  {
    id: 'transparent-pricing',
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. You know exactly what you are paying for before we start.',
  },
  {
    id: 'dedicated-support',
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'A dedicated team that is with you from day one and stays with you long after launch.',
  },
  {
    id: 'proven-results',
    icon: Trophy,
    title: 'Proven Results',
    description: '150+ successful projects and a 98% client satisfaction rate speak for themselves.',
  },
  {
    id: 'cutting-edge-tech',
    icon: Cpu,
    title: 'Cutting-Edge Tech',
    description: 'We use the latest frameworks, tools, and AI models to build future-proof solutions.',
  },
];

const stats: Stat[] = [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Years of Experience', value: '8+' },
  { label: 'Team Members', value: '25+' },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[5%] top-[30%] h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built Different,"
          highlight="Built to Last"
          subtitle="We do not just build websites and run campaigns. We engineer complete digital ecosystems powered by AI and designed for scale."
        />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Visual / Stats panel */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/40 p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
                  <Trophy className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Trusted by teams worldwide
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Our track record speaks for itself. Here are the numbers behind our success.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-gray-800 bg-gray-900/60 p-4"
                    >
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Differentiator grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {differentiators.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
