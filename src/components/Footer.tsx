import { Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-16">
      <div className="container-v">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* LOGO — Reemplaza el src por la URL de tu logo */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img
              src="https://cdn.phototourl.com/free/2026-07-24-a077899e-8a61-463b-b7cc-08ee470cbcba.png"
              alt="VEGORA"
              className="h-9 w-auto"
            />
            <p className="max-w-xs text-center text-sm text-slate-500 md:text-left">
              Transformación tecnológica para empresas que aspiran a liderar su sector.
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="#propuesta" className="transition-colors hover:text-white">Propuesta</a>
            <a href="#servicios" className="transition-colors hover:text-white">Servicios</a>
            <a href="#diferencial" className="transition-colors hover:text-white">Diferencial</a>
            <a href="#diagnostico" className="transition-colors hover:text-white">Diagnóstico</a>
            <a href="#contacto" className="transition-colors hover:text-white">Contacto</a>
          </nav>

          {/* Redes — Reemplaza los href con tus enlaces reales */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} VEGORA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
