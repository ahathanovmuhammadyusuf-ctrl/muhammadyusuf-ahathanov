import React, { useEffect } from 'react';
import { X, Fuel, Gauge, Cpu, Check, Users, Sparkles } from 'lucide-react';
import { CarModelItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface CarDetailModalProps {
  car: CarModelItem | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language].automotive;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (car) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="car-modal-title"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            {car.brand} · {car.category[language]}
          </div>
          <h2 id="car-modal-title" className="text-2xl sm:text-3xl font-display font-bold">
            {car.name}
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-lg leading-relaxed">
            {car.description[language]}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(80vh-14rem)] overflow-y-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t.specEngine}</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {car.engine}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1">
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.specPower}</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {car.power}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1">
                <Fuel className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.specFuel}</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {car.fuelConsumption}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>{t.specTransmission}</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {car.transmission}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">
              Asosiy ustunliklari / Особенности
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {car.highlights[language].map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-800 dark:text-slate-200"
                >
                  <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/40">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-800 dark:text-cyan-300 mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>Kimlar uchun tavsiya etiladi:</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {car.targetAudience[language]}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-cyan-500/20 text-white dark:text-cyan-300 dark:border dark:border-cyan-500/30 hover:bg-slate-800 dark:hover:bg-cyan-500/30 transition-all"
          >
            Yopish / Закрыть / Close
          </button>
        </div>
      </div>
    </div>
  );
};
