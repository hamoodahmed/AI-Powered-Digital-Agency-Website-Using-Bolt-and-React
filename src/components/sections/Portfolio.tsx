import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Project, ProjectCategory } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    name: 'Nexus E-commerce',
    category: 'Web Design',
    description: 'A headless e-commerce platform with real-time inventory and AI-driven product recommendations.',
    gradient: 'from-blue-500 to-cyan-400',
    shape: 'circles',
  },
  {
    id: '2',
    name: 'PulseAI Chatbot',
    category: 'AI',
    description: 'An intelligent customer support agent handling 80% of queries autonomously across 12 languages.',
    gradient: 'from-violet-500 to-purple-400',
    shape: 'grid',
  },
  {
    id: '3',
    name: 'GrowthLab SEO',
    category: 'Marketing',
    description: 'A data-driven SEO campaign that boosted organic traffic by 340% in six months.',
    gradient: 'from-emerald-500 to-teal-400',
    shape: 'waves',
  },
  {
    id: '4',
    name: 'CryptoFlow Dashboard',
    category: 'Web Design',
    description: 'A real-time crypto analytics dashboard with predictive charts and portfolio tracking.',
    gradient: 'from-amber-500 to-orange-400',
    shape: 'triangles',
  },
  {
    id: '5',
    name: 'VisionAI Platform',
    category: 'AI',
    description: 'Computer vision pipeline automating quality control for a manufacturing client.',
    gradient: 'from-pink-500 to-rose-400',
    shape: 'hexagons',
  },
  {
    id: '6',
    name: 'BrandBoost Campaign',
    category: 'Marketing',
    description: 'A multi-channel marketing campaign that generated 2M impressions and 15K leads.',
    gradient: 'from-indigo-500 to-blue-400',
    shape: 'spline',
  },
];

const filters: ('All' | ProjectCategory)[] = ['All', 'Web Design', 'AI', 'Marketing'];

function ProjectVisual({ gradient, shape }: { gradient: string; shape: Project['shape'] }) {
  return (
    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-base/30" />
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        {shape === 'circles' && (
          <>
            <div className="absolute h-24 w-24 rounded-full border-2 border-white/30" />
            <div className="absolute h-16 w-16 rounded-full border-2 border-white/40" />
            <div className="absolute h-8 w-8 rounded-full bg-white/30" />
          </>
        )}
        {shape === 'grid' && (
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-4 rounded bg-white/20"
                style={{ opacity: `${0.3 + (i % 4) * 0.2}` }}
              />
            ))}
          </div>
        )}
        {shape === 'waves' && (
          <svg className="w-full" viewBox="0 0 200 100" fill="none">
            <path d="M0 50 Q50 20 100 50 T200 50" stroke="white" strokeWidth="2" opacity="0.4" />
            <path d="M0 65 Q50 35 100 65 T200 65" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M0 80 Q50 50 100 80 T200 80" stroke="white" strokeWidth="2" opacity="0.2" />
          </svg>
        )}
        {shape === 'triangles' && (
          <>
            <div className="absolute h-0 w-0 border-x-[30px] border-b-[52px] border-x-transparent border-b-white/30" />
            <div className="absolute left-8 top-4 h-0 w-0 border-x-[20px] border-b-[35px] border-x-transparent border-b-white/20" />
            <div className="absolute right-6 top-8 h-0 w-0 border-x-[24px] border-b-[42px] border-x-transparent border-b-white/25" />
          </>
        )}
        {shape === 'hexagons' && (
          <div className="relative">
            <div className="h-16 w-16 rotate-45 rounded-lg border-2 border-white/30" />
            <div className="absolute left-6 top-6 h-12 w-12 rotate-45 rounded-lg border-2 border-white/20" />
          </div>
        )}
        {shape === 'spline' && (
          <svg className="w-full" viewBox="0 0 200 100" fill="none">
            <circle cx="40" cy="40" r="6" fill="white" opacity="0.5" />
            <circle cx="100" cy="60" r="6" fill="white" opacity="0.5" />
            <circle cx="160" cy="35" r="6" fill="white" opacity="0.5" />
            <path d="M40 40 Q70 20 100 60 T160 35" stroke="white" strokeWidth="2" opacity="0.4" />
          </svg>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
    </div>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That"
          highlight="Speak for Themselves"
          subtitle="A selection of our recent work across AI, web design, and digital marketing. Every project is engineered for impact."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                'rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300',
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md shadow-blue-500/20'
                  : 'border border-gray-800 bg-gray-900/40 text-gray-400 hover:border-gray-700 hover:text-white',
              ].join(' ')}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <ProjectVisual gradient={project.gradient} shape={project.shape} />

              <div className="p-6">
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {project.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-base/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
