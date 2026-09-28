import React, { useState } from 'react';
import { ArrowLeftRight, Check, Gauge, Fuel, Cpu, Sparkles, Scale } from 'lucide-react';
import { carModelsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const InteractiveComparison: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].automotive;

  const [carAId, setCarAId] = useState<string>('chevrolet-onix');
  const [carBId, setCarBId] = useState<string>('byd-chazor');

  const carA = carModelsData.find((c) => c.id === carAId) || carModelsData[0];
  const carB = carModelsData.find((c) => c.id === carBId) || carModelsData[1];

  const presets = [
    { label: 'Onix vs Chazor', a: 'chevrolet-onix', b: 'byd-chazor' },
    { label: 'Tracker vs Tiggo 7 Pro', a: 'chevrolet-tracker', b: 'chery-tiggo-7-pro' },
    { label: 'Song Plus vs Malibu 2', a: 'byd-song-plus', b: 'chevrolet-malibu-2' },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-500 mb-1">
            <Scale className="w-4 h-4" />
            <span>Project #02 Live Demo · {t.interactiveCompareTitle}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
            {t.interactiveCompareTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {t.interactiveCompareSubtitle}
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-mono">Taqqoslashlar:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setCarAId(p.a);
                setCarBId(p.b);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                carAId === p.a && carBId === p.b
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* Car A Selector */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <label htmlFor="carASelect" className="block text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            {t.selectCarA}
          </label>
          <select
            id="carASelect"
            value={carAId}
            onChange={(e) => setCarAId(e.target.value)}
            className="w-full px-3 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {carModelsData.map((car) => (
              <option key={car.id} value={car.id}>
                {car.brand} {car.name} ({car.category[language]})
              </option>
            ))}
          </select>
        </div>

        {/* Car B Selector */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <label htmlFor="carBSelect" className="block text-xs font-mono text-amber-600 dark:text-amber-400 uppercase mb-2">
            {t.selectCarB}
          </label>
          <select
            id="carBSelect"
            value={carBId}
            onChange={(e) => setCarBId(e.target.value)}
            className="w-full px-3 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {carModelsData.map((car) => (
              <option key={car.id} value={car.id}>
                {car.brand} {car.name} ({car.category[language]})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-200 dark:divide-slate-800 bg-white/40 dark:bg-slate-900/40">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-100/80 dark:bg-slate-800/80 p-4 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <div className="col-span-4 flex items-center gap-1.5 font-bold">
              <ArrowLeftRight className="w-4 h-4 text-cyan-500" />
              <span>Texnik Ko‘rsatkich</span>
            </div>
            <div className="col-span-4 font-bold text-cyan-600 dark:text-cyan-400 truncate">
              {carA.name}
            </div>
            <div className="col-span-4 font-bold text-amber-600 dark:text-amber-400 truncate">
              {carB.name}
            </div>
          </div>

          {/* Row: Segment */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              {t.specCategory}
            </div>
            <div className="col-span-4 font-medium text-slate-900 dark:text-white text-xs sm:text-sm">
              {carA.category[language]}
            </div>
            <div className="col-span-4 font-medium text-slate-900 dark:text-white text-xs sm:text-sm">
              {carB.category[language]}
            </div>
          </div>

          {/* Row: Engine */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-cyan-500" />
              <span>{t.specEngine}</span>
            </div>
            <div className="col-span-4 font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
              {carA.engine}
            </div>
            <div className="col-span-4 font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
              {carB.engine}
            </div>
          </div>

          {/* Row: Power */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.specPower}</span>
            </div>
            <div className="col-span-4 font-mono font-bold text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm">
              {carA.power}
            </div>
            <div className="col-span-4 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs sm:text-sm">
              {carB.power}
            </div>
          </div>

          {/* Row: Fuel Consumption */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Fuel className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t.specFuel}</span>
            </div>
            <div className="col-span-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm">
              {carA.fuelConsumption}
            </div>
            <div className="col-span-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm">
              {carB.fuelConsumption}
            </div>
          </div>

          {/* Row: Transmission */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>{t.specTransmission}</span>
            </div>
            <div className="col-span-4 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              {carA.transmission}
            </div>
            <div className="col-span-4 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              {carB.transmission}
            </div>
          </div>

          {/* Row: Price category */}
          <div className="grid grid-cols-12 p-4 text-sm items-center">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              Narx toifasi
            </div>
            <div className="col-span-4 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              {carA.priceCategory[language]}
            </div>
            <div className="col-span-4 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              {carB.priceCategory[language]}
            </div>
          </div>

          {/* Row: Top Highlight */}
          <div className="grid grid-cols-12 p-4 text-sm items-start">
            <div className="col-span-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              Asosiy ustunliklar
            </div>
            <div className="col-span-4 space-y-1.5 pr-2">
              {carA.highlights[language].map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <div className="col-span-4 space-y-1.5 pr-2">
              {carB.highlights[language].map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
