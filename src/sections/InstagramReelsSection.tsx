import React from 'react';
import { Instagram, ArrowUpRight, Video, Flame, Sparkles, MessageCircle, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const InstagramReelsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].instagram;

  const themes = [
    {
      title: { uz: 'Onix va Chazor solishtiruvi', ru: 'Сравнение Onix и Chazor', en: 'Onix vs Chazor Head-to-Head' },
      tag: { uz: 'Taqqoslash', ru: 'Сравнение', en: 'Comparison' },
      hook: { uz: '1.2 Turbo motor yoki Super Gibrid?', ru: '1.2 Турбо или супергибрид?', en: '1.2L Turbo or Super Hybrid?' },
      icon: <Flame className="w-4 h-4 text-rose-500" />,
    },
    {
      title: { uz: 'Yangi haydovchining 3 ta xatosi', ru: '3 ошибки новичка за рулем', en: '3 Critical Rookie Driver Mistakes' },
      tag: { uz: 'Qo‘llanma', ru: 'Советы', en: 'Tips' },
      hook: { uz: 'Kuzatuv oynalarini sozlash siri', ru: 'Секрет настройки слепых зон', en: 'How to eliminate side blind spots' },
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    },
    {
      title: { uz: 'Nega tezlik oshsa sarf ko‘payadi?', ru: 'Физика аэродинамики авто', en: 'Aerodynamics & Highway Drag' },
      tag: { uz: 'Avto Fakt', ru: 'Инженерия', en: 'Engineering' },
      hook: { uz: 'Havo qarshiligining kvadratik qonuni', ru: 'Закон квадрата скорости', en: 'The quadratic drag principle' },
      icon: <Video className="w-4 h-4 text-cyan-500" />,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#101426] to-slate-900 border border-slate-800 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-bl from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: CTA & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Creators Community</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
                {t.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {t.subtitle}
              </p>

              {/* Unboxed features list */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-300">
                <span>{t.pill1}</span>
                <span>·</span>
                <span>{t.pill2}</span>
                <span>·</span>
                <span>{t.pill3}</span>
                <span>·</span>
                <span>{t.pill4}</span>
              </div>

              {/* Main Instagram CTA */}
              <div className="pt-2">
                <a
                  href="https://instagram.com/ahathanov_muhammadyusuf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  <span>{t.button}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column: Mini Simulated Reels Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                {t.recentThemesTitle}
              </div>

              {themes.map((theme, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-pink-400 flex items-center gap-1.5">
                      {theme.icon}
                      <span>{theme.tag[language]}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Reels Format</span>
                  </div>
                  <h4 className="text-sm font-bold font-display text-white">
                    {theme.title[language]}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    "{theme.hook[language]}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
