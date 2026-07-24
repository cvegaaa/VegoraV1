import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Imagen de fondo con efecto Ken Burns */}
      <div className="absolute inset-0 -z-10">
        <div
          className="kenburns absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/33263702/pexels-photo-33263702/free-photo-of-modern-office-building-facade-in-bogota.jpeg')",
          }}
        />
        {/* Capa de degradado oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/40" />
      </div>

      <div className="container-v relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">
            <span className="h-px w-8 bg-teal-400" />
            Transformación Tecnológica B2B
          </span>

          <h1 className="reveal mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl" data-delay="1">
            La tecnología que su empresa necesita para dejar de sobrevivir y empezar a{' '}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              liderar
            </span>
          </h1>

          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl" data-delay="2">
            Diseñamos e implementamos estrategias de transformación digital para empresas que
            entienden que la tecnología no es un gasto, sino la palanca más rentable de su
            operación.
          </p>

          <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" data-delay="3">
            <a href="#contacto" className="btn-primary group">
              Agende su diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#propuesta" className="btn-ghost group">
              <Play className="h-4 w-4 fill-white" />
              Conozca nuestra propuesta
            </a>
          </div>

          {/* Indicadores de confianza */}
          <div className="reveal mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8" data-delay="4">
            {[
              ['+15', 'Empresas transformadas'],
              ['92%', 'Automatización lograda'],
              ['4.5x', 'Retorno de inversión'],
            ].map(([value, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-white">{value}</span>
                <span className="text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
