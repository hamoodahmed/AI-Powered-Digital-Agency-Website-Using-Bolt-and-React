import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 1500,
    annualPrice: 1200,
    description: 'Perfect for small businesses getting started with digital.',
    features: [
      'Landing page design',
      'Basic SEO setup',
      'AI chatbot integration',
      '2 revision rounds',
      'Email support',
      '1-month delivery',
    ],
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 3500,
    annualPrice: 2800,
    description: 'Our most popular plan for growing companies that need more.',
    features: [
      'Full website design & development',
      'Advanced SEO & analytics',
      'AI automation workflows',
      'Digital marketing campaign',
      'Unlimited revisions',
      'Priority support',
      '2-week delivery',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large-scale operations and enterprises.',
    features: [
      'Custom web application',
      'Dedicated AI infrastructure',
      'Full-scale marketing strategy',
      'Brand identity package',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom timeline',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute left-[10%] bottom-[20%] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans That"
          highlight="Scale With You"
          subtitle="Transparent pricing with no hidden fees. Choose the plan that fits your needs today, and upgrade as you grow."
        />

        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isAnnual ? 'text-white' : 'text-gray-500'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative h-7 w-14 rounded-full bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle annual billing"
            role="switch"
            aria-checked={isAnnual}
          >
            <span
              className={[
                'absolute top-1 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-md transition-all duration-300',
                isAnnual ? 'left-8' : 'left-1',
              ].join(' ')}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isAnnual ? 'text-white' : 'text-gray-500'
            }`}
          >
            Annual
            <span className="ml-2 inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={[
                  'relative flex flex-col rounded-2xl p-8 transition-all duration-300',
                  plan.highlighted
                    ? 'border-2 border-transparent bg-gradient-to-br from-blue-500/10 to-violet-500/10 shadow-xl shadow-blue-500/10 lg:scale-105 lg:hover:scale-110'
                    : 'border border-gray-800 bg-gray-900/40 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10',
                ].join(' ')}
                style={
                  plan.highlighted
                    ? {
                        borderImage:
                          'linear-gradient(135deg, #3b82f6, #8b5cf6) 1',
                      }
                    : undefined
                }
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  {price !== null ? (
                    <>
                      <span className="text-4xl font-bold text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-white">Custom</span>
                  )}
                </div>
                {isAnnual && price !== null && (
                  <p className="mt-1 text-xs text-emerald-400">
                    Billed annually (${(price * 12).toLocaleString()}/yr)
                  </p>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                        <Check className="h-3 w-3 text-blue-400" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    onClick={scrollToContact}
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
