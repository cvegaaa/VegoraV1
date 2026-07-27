import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function CTA() {
  return (
    <section id="contacto" className="relative z-0 overflow-hidden py-24 md:py-32">
      {/* Fondo con imagen y degradado */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/13899243/pexels-photo-13899243.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/90 to-blue-950/80" />
      </div>

      <div className="container-v">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">
            <span className="h-px w-8 bg-teal-400" />
            Hablemos
            <span className="h-px w-8 bg-teal-400" />
          </span>
          <h2 className="reveal section-title mt-6" data-delay="1">
            Su competencia ya está transformando su operación. ¿Hasta cuándo va a esperar?
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-slate-300" data-delay="2">
            Agende una sesión de diagnóstico de 45 minutos sin costo. Recibirá un mapa
            personalizado con las tres prioridades tecnológicas que mayor retorno le
            generarían este año.
          </p>

          {/* ENLACES — Reemplaza los href con tus enlaces reales */}
          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-delay="3">
            <a href="mailto:cvegaa@vegora.co" className="btn-primary group">
              Agendar diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/573107158099" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Escríbanos por WhatsApp
            </a>
          </div>

          <div className="reveal mt-12 flex flex-col items-center gap-4 text-sm text-slate-400 sm:flex-row sm:justify-center sm:gap-8" data-delay="4">
            <a href="mailto:cvegaa@vegora.co" className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-4 w-4 text-teal-400" />
              cvegaa@vegora.co
            </a>
            <a href="tel:+573107158099" className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-teal-400" />
              +57 3107158099
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-400" />
              Montería, Colombia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
