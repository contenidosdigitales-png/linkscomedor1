import React from 'react';
import { 
  X, 
  Printer, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Mail, 
  School, 
  Building2, 
  Utensils, 
  Flame, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { PortalLink } from '../types';

interface PautasModalProps {
  item: PortalLink | null;
  allItems: PortalLink[];
  onClose: () => void;
  onSelectAnotherPauta: (item: PortalLink) => void;
}

export const PautasModal: React.FC<PautasModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectAnotherPauta
}) => {
  if (!item || !item.pautaData) return null;

  const data = item.pautaData;
  const pautasItems = allItems.filter(i => i.isPauta);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="pautas-modal-content"
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 my-8 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top bar with level tabs & close button */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-4 shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <School className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Documento Oficial 2026</span>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                {data.subtitle} • {data.level}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1.5"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>
            <button
              id="close-pautas-modal"
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Level Switcher Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex items-center gap-2 overflow-x-auto shrink-0">
          <span className="text-xs font-semibold text-slate-500 mr-2 shrink-0">Cambiar nivel:</span>
          {pautasItems.map((p) => {
            const isActive = p.id === item.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectAnotherPauta(p)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-300'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {p.pautaData?.level}
              </button>
            );
          })}
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-sm leading-relaxed">
          {/* Institutional School Letterhead Header */}
          <div className="text-center pb-6 border-b border-slate-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-wide">
              COLEGIO SAN AGUSTÍN
            </h3>
            <p className="text-xs text-slate-500 italic mt-0.5">
              “Volver al corazón para caminar juntos hacia Dios”
            </p>
            <div className="mt-3 inline-block bg-slate-900 text-amber-300 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
              PAUTAS DE ALMUERZO 2026 {data.level.toUpperCase()}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Servicio a cargo de la empresa <strong>“AULAS GOURMET SRL”</strong>
            </p>
          </div>

          {/* Key Aranceles / Pricing Cards */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-600" />
              Valores del Servicio (Ciclo Lectivo 2026)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4">
                <span className="text-xs font-semibold text-amber-800">Menú Regular Diario</span>
                <p className="text-base font-bold text-slate-900 mt-1">
                  {data.prices.menuRegular}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Facturación a mes vencido junto con la cuota
                </span>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4">
                <span className="text-xs font-semibold text-emerald-800">Ticket Eventual / Vale</span>
                <p className="text-base font-bold text-slate-900 mt-1">
                  {data.prices.ticketEventual}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Solicitud previa por formulario
                </span>
              </div>

              {data.prices.vianda && (
                <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4">
                  <span className="text-xs font-semibold text-sky-800">Servicio de Vianda</span>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    {data.prices.vianda}
                  </p>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Incluye calentamiento, vajilla y agua PSA
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Horarios Límite y Plazos */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              Horarios Límite y Notificaciones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 shrink-0">• Cancelación de Ausencias:</strong>
                <span>{data.deadlines.cancelacion}</span>
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 shrink-0">• Ticket Eventual:</strong>
                <span>{data.deadlines.ticketEventual}</span>
              </li>
              {data.deadlines.modificaciones && (
                <li className="flex items-start gap-2">
                  <strong className="text-slate-900 shrink-0">• Modificación o Alta:</strong>
                  <span>{data.deadlines.modificaciones}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Normas y Aspectos Clave */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Condiciones Generales del Servicio
            </h4>
            <div className="space-y-2.5">
              {data.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-white border border-slate-100 p-3 rounded-xl shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metodología o Viandas si aplica */}
          {data.metodologia && data.metodologia.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Metodología y Procedimientos Específicos
              </h4>
              <div className="space-y-2 bg-amber-50/30 border border-amber-200/50 rounded-2xl p-4">
                {data.metodologia.map((itemStr, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {itemStr}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Organización del Comedor */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-indigo-600" />
              Organización del Comedor y Espacios
            </h4>
            <div className="space-y-2 bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4">
              {data.organizacion.map((org, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{org}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto Oficial */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> Consultas y Comunicación Oficial
              </span>
              <p className="text-sm font-semibold text-slate-200 mt-1">
                {data.contacto}
              </p>
            </div>
            {item.url && item.url.trim() !== '' && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                <span>Abrir en enlace externo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* School Footer */}
          <div className="text-center text-[11px] text-slate-400 pt-4 border-t border-slate-200">
            Orden de San Agustín | Colegio San Agustín | Instituto Privado (A-151) Incorporado a la Enseñanza Oficial<br />
            Agüero 2320 – Te: 4802-4724 | (C1425EHZ) Buenos Aires | www.colegiosanagustin.com.ar
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
