import React, { useState } from 'react';
import { Lightbulb, Sparkles, ChevronRight, Zap, ArrowRight } from 'lucide-react';
import { carFactsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const CarFactsExplorer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].automotive;
  const [activeFactId, setActiveFactId] = useState<string>(carFactsData[0].id);

  const activeFact = carFactsData.find((f) => f.id === activeFactId) || carFactsData[0];

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl my-8">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-500 mb-1">
          <Lightbulb className="w-4 h-4" />
          <span>Project #04 Live Explorer · {t.factsTitle}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
          {t.factsTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          {t.factsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Fact Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {carFactsData.map((fact) => {
            const isActive = fact.id === activeFactId;
            return (
              <button
                key={fact.id}
                onClick={() => setActiveFactId(fact.id)}
                type="button"
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-500/10 border-amber-500/40 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500">
                    {fact.category[language]}
                  </span>
                  <div className="text-xs font-semibold font-display mt-0.5 line-clamp-1">
                    {fact.title[language]}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-amber-500 translate-x-1' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Fact Spotlight Card */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/5 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-[#0c1220] dark:to-slate-900 border border-amber-500/20 dark:border-amber-500/20 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>{activeFact.category[language]}</span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white leading-snug">
              {activeFact.title[language]}
            </h4>

            <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              {activeFact.fact[language]}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-500/20 dark:border-slate-800">
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Muhandislik tahlili / Инженерный контекст:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeFact.techContext[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
