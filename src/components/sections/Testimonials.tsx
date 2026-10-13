import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Inc.',
    quote:
      'NexaAI transformed our entire digital infrastructure. Their AI automation saved us 200+ hours per month and their web redesign doubled our conversion rate.',
    rating: 5,
    avatarGradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'Founder',
    company: 'StartupHub',
    quote:
      'Working with NexaAI was a game-changer. They built our platform in 3 weeks, not 3 months. The AI chatbot they deployed handles 80% of our support tickets.',
    rating: 5,
    avatarGradient: 'from-violet-500 to-purple-400',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    quote:
      'The digital marketing campaign NexaAI ran for us was incredible. Organic traffic up 340%, leads up 5x. They truly understand data-driven growth.',
    rating: 5,
    avatarGradient: 'from-emerald-500 to-teal-400',
  },
];

function Avatar({ name, gradient }: { name: string; gradient: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-bold text-white shadow-lg`}
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[40%] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our"
          highlight="Clients Say"
          subtitle="We have partnered with startups and enterprises alike. Here is what they have to say about working with us."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative flex flex-col rounded-2xl border border-gray-800 bg-gray-900/40 p-7 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gray-800 transition-colors group-hover:text-blue-500/20" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Avatar name={testimonial.name} gradient={testimonial.avatarGradient} />
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
