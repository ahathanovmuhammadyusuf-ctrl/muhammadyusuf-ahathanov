import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; title: string }[] = [
    { code: 'uz', label: 'UZ', title: "O'zbek tili (Lotin)" },
    { code: 'ru', label: 'RU', title: 'Русский язык (Кириллица)' },
    { code: 'en', label: 'EN', title: 'English' },
  ];

  return (
    <div 
      className="inline-flex items-center p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
      role="group"
      aria-label="Language selector"
    >
      {languages.map(({ code, label, title }) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            type="button"
            title={title}
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all duration-150 ${
              isActive
                ? 'bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 shadow-sm border border-transparent dark:border-cyan-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
