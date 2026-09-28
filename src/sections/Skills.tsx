import React, { useState } from 'react';
import { 
  Code, FileCode, Layout, Palette, Sparkles, Bot, Cpu, 
  Wrench, Boxes, Gamepad2, Monitor, Smartphone, Layers, 
  Laptop, GitBranch, Globe 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'programming', label: t.categories.programming },
    { id: 'creative_ai', label: t.categories.creative_ai },
    { id: 'robotics', label: t.categories.robotics },
    { id: 'development', label: t.categories.development },
    { id: 'computer', label: t.categories.computer },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-500" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-500" />;
      case 'Layout': return <Layout className="w-5 h-5 text-sky-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-rose-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-amber-500" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-sky-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-teal-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-slate-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-500" />;
      default: return <Code className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            <span>Tech &amp; Creative Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters (Segmented Functional Button Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 max-w-3xl mx-auto mb-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-150 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 shadow-sm border border-transparent dark:border-cyan-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 capitalize">
                    {skill.category.replace('_', ' ')}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description[language]}
                </p>
              </div>

              {/* Quiet unboxed discipline footer */}
              <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Practiced</span>
                <span className="text-cyan-500 font-medium">3 Years</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
