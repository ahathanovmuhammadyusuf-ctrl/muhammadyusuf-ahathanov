import React from 'react';
import { Send, Instagram, Github, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

// Configurable GitHub URL (placeholder as specified in prompt)
const GITHUB_PROFILE_URL = "https://github.com";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#070b14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-amber-500 flex items-center justify-center font-display font-bold text-white text-xs">
              AM
            </span>
            <div>
              <p className="text-sm font-bold font-display text-slate-900 dark:text-white">
                Ahathanov Muhammadyusuf
              </p>
              <p className="text-xs text-slate-500 font-mono">
                {t.focus}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <a
              href="https://instagram.com/ahathanov_muhammadyusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-pink-500 hover:border-pink-500/40 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/ahathanov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
              aria-label="Scroll to top"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Subfooter */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 text-center">
          <p>© 2026 Ahathanov Muhammadyusuf. {t.rights}</p>
          <p className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400">
            {t.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};
