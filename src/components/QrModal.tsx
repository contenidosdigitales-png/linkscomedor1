import React from 'react';
import { X, Copy, ExternalLink, QrCode } from 'lucide-react';
import { PortalLink } from '../types';

interface QrModalProps {
  item: PortalLink | null;
  onClose: () => void;
  onCopy: (text: string, title: string) => void;
}

export const QrModal: React.FC<QrModalProps> = ({ item, onClose, onCopy }) => {
  if (!item || !item.url) return null;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    item.url
  )}&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="qr-modal-content"
        className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl border border-slate-200 p-6 flex flex-col items-center text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
          <QrCode className="w-5 h-5" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Escanear para acceder en tu celular
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-1">
          {item.title}
        </h3>

        {/* QR Code Container */}
        <div className="mt-4 p-3 bg-white rounded-2xl border border-slate-200 shadow-inner flex items-center justify-center">
          <img
            src={qrImageUrl}
            alt={`Código QR para ${item.title}`}
            className="w-52 h-52 object-contain rounded-lg"
            loading="lazy"
          />
        </div>

        <p className="text-xs text-slate-500 mt-3 max-w-xs break-all line-clamp-2 px-2">
          {item.url}
        </p>

        <div className="mt-5 flex items-center gap-2 w-full">
          <button
            onClick={() => onCopy(item.url, item.title)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            Copiar enlace
          </button>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Abrir
          </a>
        </div>
      </div>
    </div>
  );
};
