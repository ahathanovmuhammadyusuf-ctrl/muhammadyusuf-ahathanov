import React, { useState } from 'react';
import { Send, Instagram, Copy, Check, MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [copiedTg, setCopiedTg] = useState(false);
  const [copiedInsta, setCopiedInsta] = useState(false);

  const copyToClipboard = (text: string, type: 'tg' | 'insta') => {
    navigator.clipboard.writeText(text);
    if (type === 'tg') {
      setCopiedTg(true);
      setTimeout(() => setCopiedTg(false), 2000);
    } else {
      setCopiedInsta(true);
      setTimeout(() => setCopiedInsta(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Telegram Channel Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                  <Send className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Tezkor javob</span>
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Telegram
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                To‘g‘ridan-to‘g‘ri shaxsiy profil orqali xabar yozish
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <span className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
                  @ahathanov
                </span>
                <button
                  onClick={() => copyToClipboard('@ahathanov', 'tg')}
                  type="button"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-500 transition-colors"
                  aria-label="Copy Telegram username"
                >
                  {copiedTg ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <a
              href="https://t.me/ahathanov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 dark:border dark:border-cyan-500/30 hover:bg-slate-800 dark:hover:bg-cyan-500/30 font-semibold text-sm transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{t.telegramButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram Channel Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-pink-500">
                  Avtomobil blogi
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Instagram
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Avtomobil videolari, taqqoslashlar va foydali ma'lumotlar
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <span className="text-sm font-mono font-semibold text-slate-900 dark:text-white truncate pr-2">
                  @ahathanov_muhammadyusuf
                </span>
                <button
                  onClick={() => copyToClipboard('@ahathanov_muhammadyusuf', 'insta')}
                  type="button"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-pink-500 transition-colors"
                  aria-label="Copy Instagram username"
                >
                  {copiedInsta ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <a
              href="https://instagram.com/ahathanov_muhammadyusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-amber-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.instagramButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Location & Status Info Note */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.locationNote}</span>
          </div>
          <span>·</span>
          <span>{t.statusBadge}</span>
        </div>
      </div>
    </section>
  );
};
