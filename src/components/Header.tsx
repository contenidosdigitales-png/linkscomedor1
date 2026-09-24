import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200/80 shadow-xs sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: School brand + Logo */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <img 
            src="/isotipocsa17-cd.png" 
            alt="Colegio San Agustín" 
            className="w-12 h-12 object-contain shrink-0 rounded-full"
            referrerPolicy="no-referrer"
          />
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

        {/* Right: provider info */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium">
          <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
          <span>Aulas Gourmet SRL</span>
        </div>
      </div>
    </header>
  );
};

