import React from 'react';
import { AlertCircle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface UrgentNoticeBannerProps {
  onDirectAction: (linkId: string) => void;
}

export const UrgentNoticeBanner: React.FC<UrgentNoticeBannerProps> = ({ onDirectAction }) => {
  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 sm:p-4 mb-6 shadow-2xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-amber-500 text-slate-950 rounded-lg font-bold shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            <strong className="text-slate-900 font-semibold">Horarios límite del día:</strong> Cancelaciones hasta las <strong>09:00 hs</strong> para evitar facturación. Tickets eventuales hasta las <strong>09:00 hs</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <button
            id="quick-cancelar-btn"
            onClick={() => onDirectAction('cancelar-almuerzo')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors active:scale-95"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            Cancelar hoy
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            id="quick-ticket-btn"
            onClick={() => onDirectAction('ticket-eventual')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors active:scale-95"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            Ticket Eventual
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

