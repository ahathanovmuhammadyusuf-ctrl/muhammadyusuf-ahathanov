import React from 'react';
import { Terminal, Award, Compass, Cpu, Code2, Bot, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const milestones = [
    {
      value: t.milestoneYears,
      label: t.milestoneYearsLabel,
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
    },
    {
      value: t.milestoneAge,
      label: t.milestoneAgeLabel,
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      value: t.milestoneDirection,
      label: t.milestoneDirectionLabel,
      icon: <Compass className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Scratch & mBlock',
      desc: {
        uz: 'Vizual bloklar orqali dastur algoritmlari va voqelik mantig‘i',
        ru: 'Освоение базовых алгоритмов через визуальные логические блоки',
        en: 'Algorithmic logic through visual block-based programming',
      },
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
    },
    {
      step: '02',
      title: 'Arduino & Robotics',
      desc: {
        uz: 'Datchiklar, motorlar va mikrokontrollerlar bilan amaliy tajribalar',
        ru: 'Схемотехника, работа с датчиками, сервоприводами и микроконтроллерами',
        en: 'Hands-on hardware with sensors, motors, and microcontrollers',
      },
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
    },
    {
      step: '03',
      title: 'Python, Web & Android',
      desc: {
        uz: 'HTML, CSS, JavaScript, MIT App Inventor va Python kodlari',
        ru: 'Веб-разработка, прототипы приложений и язык Python',
        en: 'Modern HTML, CSS, JavaScript, App Inventor, and Python scripting',
      },
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      step: '04',
      title: 'AI & Automotive Media',
      desc: {
        uz: 'Prompt Engineering, AI vositalari va avtomobil olami haqida ta\'limiy kontent',
        ru: 'Промпт-инжиниринг, AI-инструменты и автоблог в Instagram',
        en: 'Prompt engineering, AI workflows, and automotive educational content',
      },
      icon: <Bot className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            <span>Bio &amp; Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Top Story & Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              {t.greeting}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.paragraph2}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.paragraph3}
            </p>

            {/* Core Philosophy Box */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                {t.philosophyTitle}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                "{t.philosophyDesc}"
              </p>
            </div>
          </div>

          {/* Side Milestones / Stat Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {m.value}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {m.icon}
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Pathway Timeline Cards */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 text-center lg:text-left">
            O‘rganish yo‘li / Путь развития / Learning Trajectory
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {step.step}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-sm font-bold font-display text-slate-900 dark:text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
