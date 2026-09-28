import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectDetail } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { ProjectModal } from '../components/ProjectModal';
import { InteractiveComparison } from '../components/InteractiveComparison';
import { InteractiveDriverGuide } from '../components/InteractiveDriverGuide';
import { CarFactsExplorer } from '../components/CarFactsExplorer';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeTab, setActiveTab] = useState<'cards' | 'compare' | 'guide' | 'facts'>('cards');

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            <span>Portfolio Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* View Switcher Tabs (All 5 Projects Case Studies vs Live Interactive Explorers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 ${
              activeTab === 'cards'
                ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-transparent dark:border-cyan-500/30 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Barcha 5 ta Loyiha (Case Studies)
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 flex items-center gap-1.5 ${
              activeTab === 'compare'
                ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-transparent dark:border-cyan-500/30 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Live Taqqoslash (Project #02)</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-transparent dark:border-cyan-500/30 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Boshlovchi Qo‘llanmasi (Project #03)</span>
          </button>
          <button
            onClick={() => setActiveTab('facts')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 flex items-center gap-1.5 ${
              activeTab === 'facts'
                ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-transparent dark:border-cyan-500/30 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Avto Faktlar Explorer (Project #04)</span>
          </button>
        </div>

        {/* Dynamic Tab Contents */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                className={`group rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Preview */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Project Number & Category Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-cyan-400 font-mono text-xs font-bold border border-cyan-500/30">
                      #{project.projectNumber}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white font-mono text-xs border border-white/10">
                      {project.category[language]}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="mt-1 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                      {project.subtitle[language]}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Technologies tags & CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.viewDetails}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.id === 'car-comparison-system' && (
                        <button
                          onClick={() => setActiveTab('compare')}
                          className="text-[11px] font-mono text-amber-500 hover:underline"
                        >
                          Jonli Sinov →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Interactive Tabs */}
        {activeTab === 'compare' && <InteractiveComparison />}
        {activeTab === 'guide' && <InteractiveDriverGuide />}
        {activeTab === 'facts' && <CarFactsExplorer />}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
