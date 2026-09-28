import React, { useState } from 'react';
import { Gauge, Fuel, Cpu, Sparkles, ArrowRight, Car, Compass } from 'lucide-react';
import { carModelsData } from '../data/portfolioData';
import { CarModelItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { CarDetailModal } from '../components/CarDetailModal';

export const AutomotiveWorld: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].automotive;

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCar, setSelectedCar] = useState<CarModelItem | null>(null);

  const brands = [
    { id: 'all', label: 'Barcha modellar' },
    { id: 'Chevrolet', label: 'Chevrolet' },
    { id: 'BYD', label: 'BYD' },
    { id: 'Chery', label: 'Chery' },
  ];

  const filteredCars = selectedBrand === 'all'
    ? carModelsData
    : carModelsData.filter((c) => c.brand.toLowerCase() === selectedBrand.toLowerCase());

  return (
    <section id="automotive" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-500 mb-2">
            <Car className="w-4 h-4" />
            <span>Automotive World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Brand Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrand(b.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all duration-150 ${
                selectedBrand === b.id
                  ? 'bg-slate-900 dark:bg-amber-500/20 text-white dark:text-amber-300 border border-transparent dark:border-amber-500/40 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Cars Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Brand & Category header */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="font-bold text-amber-500 uppercase tracking-wider">
                    {car.brand}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {car.category[language]}
                  </span>
                </div>

                {/* Model Title */}
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {car.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {car.description[language]}
                </p>

                {/* Specs snapshot */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Cpu className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span className="truncate">{car.engine}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Gauge className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{car.power}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Fuel className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{car.fuelConsumption}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                    <span className="truncate">{car.transmission}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {car.priceCategory[language]}
                </span>
                <button
                  onClick={() => setSelectedCar(car)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  <span>{t.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Detail Modal */}
      <CarDetailModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </section>
  );
};
