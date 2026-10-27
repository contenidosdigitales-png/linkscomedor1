import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Share2,
  ExternalLink,
  LayoutGrid,
  List
} from 'lucide-react';
import { INITIAL_LINKS, PAUTAS_LINKS } from './data/linksData';
import { PortalLink } from './types';
import { Header } from './components/Header';
import { UrgentNoticeBanner } from './components/UrgentNoticeBanner';
import { LinkCard } from './components/LinkCard';
import { PautasModal } from './components/PautasModal';
import { Toast } from './components/Toast';

export default function App() {
  const [links] = useState<PortalLink[]>(INITIAL_LINKS);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Modals state
  const [selectedPauta, setSelectedPauta] = useState<PortalLink | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  const handleCopy = (text: string, title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copiado: ${title}`);
      }).catch(() => {
        showToast(`Copiado al portapapeles`);
      });
    } else {
      showToast(`Enlace: ${text}`);
    }
  };

  const handleDirectAction = (linkId: string) => {
    const target = links.find(l => l.id === linkId);
    if (target && target.url) {
      window.open(target.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-amber-500/20 selection:text-amber-900">
      {/* Compact Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        {/* Urgent Deadlines Notice */}
        <UrgentNoticeBanner onDirectAction={handleDirectAction} />

        {/* Action Toolbar: Menú Mensual button and Utilities */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 mb-6">
          <div className="flex items-center gap-3">
            <a
              id="menu-mensual-btn"
              href="https://aulas-gourmet-1euvywl.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs transition-all active:scale-[0.98] border border-amber-600/30"
            >
              <UtensilsCrossed className="w-4 h-4 text-slate-950" />
              <span>Menú Mensual</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-900/80" />
            </a>
            <span className="text-xs text-slate-500 hidden sm:inline font-medium">
              Propuesta nutricional y menú diario
            </span>
          </div>

          {/* Right utility toolbar: View mode toggle & Share */}
          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto shrink-0">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Portal de Comedor 2026 - Colegio San Agustín',
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  handleCopy(window.location.href, 'Portal de Comedor');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              title="Compartir este portal"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Compartir portal</span>
            </button>

            <div className="hidden sm:flex items-center bg-white border border-slate-200/80 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Vista cuadrícula"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Vista lista compacta"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid / List: The 3 Primary Operational Forms */}
        <div 
          className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-3 gap-6' 
              : 'flex flex-col gap-4'
          }
        >
          {links.map((item) => (
            <LinkCard
              key={item.id}
              item={item}
              onCopy={handleCopy}
              onOpenPauta={(i) => setSelectedPauta(i)}
            />
          ))}
        </div>

        {/* Quick Help & Institutional Guidelines Box */}
        <section className="mt-14 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-sans">
                Información Institucional y Normativa
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Servicio de Comedor • Ciclo Lectivo 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Aspectos clave para un funcionamiento coordinado y seguro para todos los alumnos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  const initialItem = PAUTAS_LINKS.find(l => l.id === 'pautas-inicial');
                  if (initialItem) setSelectedPauta(initialItem);
                }}
                className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Pautas Inicial
              </button>
              <button
                onClick={() => {
                  const primarioItem = PAUTAS_LINKS.find(l => l.id === 'pautas-primario');
                  if (primarioItem) setSelectedPauta(primarioItem);
                }}
                className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Pautas Primario
              </button>
              <button
                onClick={() => {
                  const secundarioItem = PAUTAS_LINKS.find(l => l.id === 'pautas-secundario');
                  if (secundarioItem) setSelectedPauta(secundarioItem);
                }}
                className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Pautas Secundario
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Ausencias y Cancelaciones
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toda ausencia al comedor debe informarse antes de las <strong>09:00 hs</strong> para no ser facturada. En Inicial, además debe notificarse en simultáneo por Handing a la docente.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Servicio de Viandas
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disponible desde 3º grado de Primaria y en Nivel Medio. Bandejas descartables de aluminio 275 con tapa y rótulo indeleble (nombre, apellido y curso).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Modificaciones de Servicio
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Las modificaciones o inscripciones se gestionan dentro de las fechas fijadas para impactar el primer día hábil siguiente.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Modals */}
      <PautasModal
        item={selectedPauta}
        allItems={PAUTAS_LINKS}
        onClose={() => setSelectedPauta(null)}
        onSelectAnotherPauta={(p) => setSelectedPauta(p)}
      />

      {/* Floating Feedback Toast */}
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}
