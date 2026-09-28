import React from 'react';
import { Send, Instagram, ArrowUpRight, Sparkles, Terminal, Shield, Zap } from 'lucide-react';
import { HeroAvatar } from '../components/HeroAvatar';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient automotive/cyber gradients */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-sky-500/5 to-transparent blur-3xl rounded-full"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-3xl rounded-full"
      />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status / Category Kicker (Clean unboxed metadata) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-mono text-cyan-600 dark:text-cyan-400 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.badge}</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-700 dark:text-slate-300">Tashkent, UZ</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
                Ahathanov <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 bg-clip-text text-transparent">
                  Muhammadyusuf
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 font-display">
                {t.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {t.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              {/* Instagram Button */}
              <a
                href="https://instagram.com/ahathanov_muhammadyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span>{t.ctaInstagram}</span>
                <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Telegram Button */}
              <a
                href="https://t.me/ahathanov"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-2xl bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-300 border border-slate-700 dark:border-cyan-500/30 hover:bg-slate-800 dark:hover:bg-slate-700/80 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{t.ctaTelegram}</span>
                <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quiet Real Trust Proofs (No fake statistics) */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span>{t.experienceBadge}</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>{t.ageBadge}</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>{t.focusBadge}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Illustrated Avatar */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroAvatar />
          </div>
        </div>
      </div>
    </section>
  );
};
