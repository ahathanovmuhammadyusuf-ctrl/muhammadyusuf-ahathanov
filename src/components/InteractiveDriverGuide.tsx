import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, RefreshCw, AlertTriangle, Eye, Disc, Gauge } from 'lucide-react';
import { driverTipsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const InteractiveDriverGuide: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].automotive;

  const checklistItems = [
    { id: 'c1', label: { uz: 'Shinalar bosimi va protektor holati me’yordami?', ru: 'Давление в шинах и протектор в норме?', en: 'Tire pressures and tread depth inspected?' } },
    { id: 'c2', label: { uz: 'Old va orqa chiroqlar (fara, gabarit, burilish) ishlayaptimi?', ru: 'Фары, стоп-сигналы и поворотники исправны?', en: 'Headlights, brake lights, and indicators verified?' } },
    { id: 'c3', label: { uz: 'Oyna tozalagich suyuqligi (omivatel) yetarlimi?', ru: 'Уровень омывающей жидкости достаточен?', en: 'Windshield washer fluid reservoir topped up?' } },
    { id: 'c4', label: { uz: 'Kuzatuv oynalari va o‘rindiq haydovchi bo‘yiga moslandimi?', ru: 'Зеркала и водительское сиденье отрегулированы?', en: 'Side/rear mirrors and seat position aligned?' } },
    { id: 'c5', label: { uz: 'Barcha yo‘lovchilar xavfsizlik kamarini taqqanmi?', ru: 'Все пассажиры пристегнуты ремнями безопасности?', en: 'All vehicle occupants buckled in securely?' } },
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
  });

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setChecked({});
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const isAllDone = completedCount === totalCount;

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl my-8">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-500 mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Project #03 Live Guide · {t.driverGuideTitle}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
          {t.driverGuideTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          {t.driverGuideSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Left: Interactive Checklist */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-500" />
              <span>{t.driverChecklistTitle}</span>
            </h4>
            <button
              onClick={resetChecklist}
              className="text-[11px] font-mono text-slate-500 hover:text-cyan-500 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Tozalash</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {checklistItems.map((item) => {
              const isChecked = !!checked[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  type="button"
                  className={`w-full text-left p-3 rounded-xl border text-xs flex items-start gap-3 transition-all ${
                    isChecked
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-slate-100'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="shrink-0 mt-0.5">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </span>
                  <span className={isChecked ? 'line-through opacity-75' : ''}>
                    {item.label[language]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/60">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-1.5">
              <span>Tayyorgarlik darajasi:</span>
              <span className="font-semibold text-emerald-500">{completedCount} / {totalCount}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isAllDone ? 'bg-emerald-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
            {isAllDone && (
              <p className="text-xs text-emerald-500 font-semibold mt-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Mashina yo‘lga chiqishga to‘liq tayyor! Oq yo‘l!</span>
              </p>
            )}
          </div>
        </div>

        {/* Right: Essential Tips Cards */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-sm font-bold font-display text-slate-900 dark:text-white mb-2">
            Muhim Texnik Maslahatlar
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {driverTipsData.map((tip) => {
              const getIcon = () => {
                switch (tip.icon) {
                  case 'Disc':
                    return <Disc className="w-4 h-4 text-cyan-500" />;
                  case 'Eye':
                    return <Eye className="w-4 h-4 text-amber-500" />;
                  case 'Gauge':
                    return <Gauge className="w-4 h-4 text-indigo-500" />;
                  default:
                    return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
                }
              };

              return (
                <div
                  key={tip.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon()}
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white font-display">
                        {tip.title[language]}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tip.tip[language]}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="capitalize">{tip.priority}</span>
                    <span className="text-cyan-500">Qoida</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
