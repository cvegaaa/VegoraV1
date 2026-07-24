import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Propuesta', href: '#propuesta' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-v flex h-20 items-center justify-between">
        {/* LOGO — Reemplaza el src por la URL de tu logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="https://cdn.phototourl.com/free/2026-07-24-a077899e-8a61-463b-b7cc-08ee470cbcba.png"
            alt="VEGORA"
            className="h-9 w-auto"
          />
        </a>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="hidden lg:inline-flex">
          <span className="btn-primary">Agendar diagnóstico</span>
        </a>

        {/* Botón hamburguesa */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-v flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Agendar diagnóstico
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
