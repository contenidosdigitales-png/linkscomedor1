import React from 'react';
import { Heart, Flame, School, UtensilsCrossed } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200/80 shadow-xs sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: School brand + Portal title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-sm flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center relative overflow-hidden">
              <Flame className="w-4 h-4 text-amber-400 absolute -top-0.5" />
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 absolute bottom-1" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700">
                Colegio San Agustín
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-[11px] text-slate-500 font-medium">Ciclo Lectivo 2026</span>
            </div>
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              Portal de Comedor y Almuerzo
            </h1>
          </div>
        </div>

        {/* Right: Badges & provider info */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
            <span>Aulas Gourmet SRL</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-800 font-semibold text-[11px]">
            <School className="w-3.5 h-3.5 text-amber-600" />
            7 Enlaces Oficiales
          </div>
        </div>
      </div>
    </header>
  );
};

