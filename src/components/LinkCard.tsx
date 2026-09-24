import React from 'react';
import { 
  Ticket, 
  ClipboardCheck, 
  CalendarX, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  School,
  ExternalLink,
  Copy,
  FileText,
  Clock,
  Tag
} from 'lucide-react';
import { PortalLink } from '../types';

interface LinkCardProps {
  item: PortalLink;
  onCopy: (text: string, title: string) => void;
  onOpenPauta: (item: PortalLink) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  item,
  onCopy,
  onOpenPauta
}) => {
  const getIcon = () => {
    switch (item.iconName) {
      case 'Ticket':
        return <Ticket className="w-6 h-6 text-amber-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-emerald-600" />;
      case 'CalendarX':
        return <CalendarX className="w-6 h-6 text-rose-600" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-orange-600" />;
      case 'School':
        return <School className="w-6 h-6 text-indigo-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-violet-600" />;
      default:
        return <FileText className="w-6 h-6 text-slate-600" />;
    }
  };

  const getAccentBg = () => {
    switch (item.iconName) {
      case 'Ticket':
        return 'bg-amber-50 border-amber-200/70 text-amber-900';
      case 'ClipboardCheck':
        return 'bg-emerald-50 border-emerald-200/70 text-emerald-900';
      case 'CalendarX':
        return 'bg-rose-50 border-rose-200/70 text-rose-900';
      case 'Utensils':
        return 'bg-orange-50 border-orange-200/70 text-orange-900';
      case 'School':
        return 'bg-indigo-50 border-indigo-200/70 text-indigo-900';
      case 'BookOpen':
        return 'bg-sky-50 border-sky-200/70 text-sky-900';
      case 'GraduationCap':
        return 'bg-violet-50 border-violet-200/70 text-violet-900';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-900';
    }
  };

  const hasDirectUrl = !!item.url && item.url.trim() !== '';

  return (
    <div 
      id={`link-card-${item.id}`}
      className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
    >
      {/* Top bar styling */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          {/* Icon badge */}
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${getAccentBg()}`}>
            {getIcon()}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {item.priceTag && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <Tag className="w-3 h-3 text-amber-600" />
                {item.priceTag}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="mt-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title block"
          >
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover/title:text-amber-700 transition-colors flex items-center justify-between gap-2">
              <span>{item.title}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover/title:text-amber-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </a>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Highlight notification if any */}
        {item.highlight && (
          <div className="mt-3.5 flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
            <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{item.highlight}</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 bg-white">
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
          {/* Main action button */}
          {item.isPauta ? (
            <div className="flex items-center gap-2">
              <a
                id={`open-link-${item.id}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98]"
              >
                <span>Abrir en Google Drive</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </a>
              <button
                id={`read-pauta-${item.id}`}
                onClick={() => onOpenPauta(item)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors shrink-0"
                title="Ver resumen y aranceles"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Resumen</span>
              </button>
            </div>
          ) : (
            <a
              id={`open-link-${item.id}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Abrir {item.category === 'menu' ? 'Menú Mensual' : 'Formulario'}</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          )}

          {/* Quick utility controls */}
          <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
            <button
              onClick={() => {
                const textToCopy = hasDirectUrl ? item.url : `Pautas de Almuerzo 2026 - ${item.title}`;
                onCopy(textToCopy, item.title);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors text-slate-500"
              title="Copiar enlace directo"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar enlace</span>
            </button>
            <span className="text-[11px] text-slate-400 font-medium">
              Oficial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
