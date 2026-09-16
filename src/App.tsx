import React, { useState, useMemo, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  Layers, 
  FileCheck, 
  BookOpen, 
  HelpCircle,
  Share2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Filter,
  LayoutGrid,
  List
} from 'lucide-react';
import { INITIAL_LINKS } from './data/linksData';
import { PortalLink, CategoryType } from './types';
import { Header } from './components/Header';
import { UrgentNoticeBanner } from './components/UrgentNoticeBanner';
import { LinkCard } from './components/LinkCard';
import { PautasModal } from './components/PautasModal';
import { Toast } from './components/Toast';

export default function App() {
  const [links] = useState<PortalLink[]>(INITIAL_LINKS);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
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

  const filteredLinks = useMemo(() => {
    return links.filter(item => {
      return activeCategory === 'all' ? true : item.category === activeCategory;
    });
  }, [links, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-amber-500/20 selection:text-amber-900">
      {/* Compact Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        {/* Urgent Deadlines Notice */}
        <UrgentNoticeBanner onDirectAction={handleDirectAction} />

        {/* Categories and Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 mb-6">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              id="filter-cat-all"
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Todos los 7 enlaces
            </button>

            <button
              id="filter-cat-forms"
              onClick={() => setActiveCategory('forms')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'forms'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
              Formularios Diarios (3)
            </button>

            <button
              id="filter-cat-pautas"
              onClick={() => setActiveCategory('pautas')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'pautas'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-500" />
              Pautas por Nivel (3)
            </button>

            <button
              id="filter-cat-menu"
              onClick={() => setActiveCategory('menu')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'menu'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-orange-500" />
              Menú Mensual (1)
            </button>
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
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
              title="Compartir este portal"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Compartir portal</span>
            </button>

            <div className="hidden sm:flex items-center bg-white border border-slate-200/80 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Vista cuadrícula"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Vista lista compacta"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid / List */}
        {filteredLinks.length > 0 ? (
          <div 
            className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'flex flex-col gap-4'
            }
          >
            {filteredLinks.map((item) => (
              <LinkCard
                key={item.id}
                item={item}
                onCopy={handleCopy}
                onOpenPauta={(i) => setSelectedPauta(i)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">
              No se encontraron enlaces con ese criterio
            </h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Intenta borrar el término de búsqueda o seleccionar otra categoría para ver los enlaces.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}

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
                  const initialItem = links.find(l => l.id === 'pautas-inicial');
                  if (initialItem) setSelectedPauta(initialItem);
                }}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors"
              >
                Pautas Inicial
              </button>
              <button
                onClick={() => {
                  const primarioItem = links.find(l => l.id === 'pautas-primario');
                  if (primarioItem) setSelectedPauta(primarioItem);
                }}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors"
              >
                Pautas Primario
              </button>
              <button
                onClick={() => {
                  const secundarioItem = links.find(l => l.id === 'pautas-secundario');
                  if (secundarioItem) setSelectedPauta(secundarioItem);
                }}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg transition-colors"
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
                Disponible desde 3º grado de Primaria y en Nivel Medio ($53.000/mes). Bandejas descartables de aluminio 275 con tapa y rótulo indeleble (nombre, apellido y curso).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Modificaciones de Servicio
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Las modificaciones o inscripciones se gestionan 72 horas hábiles antes de fin de mes para impactar el primer día hábil siguiente. No se reciben excepciones.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8 mt-12 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold text-white text-sm">
              COLEGIO SAN AGUSTÍN • ORDEN DE SAN AGUSTÍN
            </p>
            <p className="text-slate-400">
              Instituto Privado (A-151) Incorporado a la Enseñanza Oficial
            </p>
            <p className="text-slate-400 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Agüero 2320, C1425EHZ, Buenos Aires | Tel: 4802-4724
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                Canales de Contacto Comedor
              </span>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-1">
                <a 
                  href="mailto:comedor@isanagustin.edu.ar" 
                  className="hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white flex items-center justify-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> comedor@isanagustin.edu.ar
                </a>
                <a 
                  href="mailto:almuerzosecundaria@isanagustin.edu.ar" 
                  className="hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white flex items-center justify-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> almuerzosecundaria@isanagustin.edu.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <PautasModal
        item={selectedPauta}
        allItems={links}
        onClose={() => setSelectedPauta(null)}
        onSelectAnotherPauta={(p) => setSelectedPauta(p)}
      />

      {/* Floating Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
