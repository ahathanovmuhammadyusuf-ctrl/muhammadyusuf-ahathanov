import React from 'react';

export const HeroAvatar: React.FC = () => {
  return (
    <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center select-none">
      {/* Outer ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-amber-500/20 blur-2xl animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* SVG Automotive Tachometer / Circuit Ring */}
      <svg
        className="absolute inset-0 w-full h-full transform -rotate-45"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer dash track */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-800"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />

        {/* Speedometer accent arc */}
        <path
          d="M 28 100 A 72 72 0 1 1 172 100"
          stroke="url(#speedGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="180 80"
        />

        {/* Circuit nodes */}
        <circle cx="100" cy="15" r="2.5" className="fill-cyan-400" />
        <circle cx="185" cy="100" r="2.5" className="fill-amber-400" />
        <circle cx="15" cy="100" r="2" className="fill-sky-400" />

        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Rotating secondary ring */}
      <div 
        aria-hidden="true"
        className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-cyan-400/30 dark:border-cyan-500/25 animate-spin"
        style={{ animationDuration: '28s' }}
      />

      {/* Core Avatar Card Container */}
      <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-[#0c1220] dark:to-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-md">
        
        {/* Subtle grid in background of avatar */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 rounded-3xl" />

        {/* Futuristic AM Monogram Emblem */}
        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-amber-500 p-[2px] shadow-lg shadow-cyan-500/20">
          <div className="w-full h-full rounded-2xl bg-white dark:bg-[#070b14] flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400 bg-clip-text text-transparent">
              AM
            </span>
          </div>
        </div>

        {/* Identity label */}
        <div className="relative z-10 mt-3 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-800 dark:text-slate-200 font-display">
            Ahathanov M.
          </p>
          <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 tracking-tight mt-0.5">
            13 y.o. • Builder
          </p>
        </div>

        {/* Small automotive speedometer needle icon badge */}
        <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 text-white dark:bg-slate-800 border border-slate-700 shadow-md text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>RPM 3.2k</span>
        </div>

        {/* Floating code symbol badge */}
        <div className="absolute -bottom-3 -left-3 z-20 px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-[10px] font-mono text-slate-700 dark:text-slate-300">
          &lt;/&gt; 3 Years
        </div>
      </div>

      {/* Floating orbital pill: Python & AI */}
      <div 
        aria-hidden="true"
        className="hidden sm:flex absolute -right-4 top-12 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-500" />
        <span>Frontend &amp; AI</span>
      </div>

      {/* Floating orbital pill: Auto Creator */}
      <div 
        aria-hidden="true"
        className="hidden sm:flex absolute -left-4 bottom-14 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span>Auto Content</span>
      </div>
    </div>
  );
};
