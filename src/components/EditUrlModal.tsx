import React, { useState, useEffect } from 'react';
import { X, Link as LinkIcon, Check, RotateCcw } from 'lucide-react';
import { PortalLink } from '../types';

interface EditUrlModalProps {
  item: PortalLink | null;
  onClose: () => void;
  onSave: (id: string, newUrl: string) => void;
  onReset: (id: string) => void;
}

export const EditUrlModal: React.FC<EditUrlModalProps> = ({
  item,
  onClose,
  onSave,
  onReset
}) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (item) {
      setUrl(item.url || '');
    }
  }, [item]);

  if (!item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(item.id, url.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="edit-url-modal-content"
        className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <LinkIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Configuración de enlace</span>
            <h3 className="text-base font-bold text-slate-900">
              {item.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
          Puedes ingresar o actualizar el enlace directo a este documento (por ejemplo, link de Google Drive, OneDrive o archivo PDF alojado en la web).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="custom-url-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Dirección URL
            </label>
            <input
              id="custom-url-input"
              type="url"
              placeholder="https://drive.google.com/file/... o https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Dejar vacío para usar únicamente el visualizador interactivo integrado.
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => {
                onReset(item.id);
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
