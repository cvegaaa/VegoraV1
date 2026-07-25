import { services } from '@/data/content';

export function Servicios() {
  return (
    <section id="servicios" className="relative border-t border-slate-200/60 bg-white py-24 md:py-32">
      <div className="container-v">
        <div className="max-w-3xl">
          <span className="eyebrow reveal text-teal-600" data-delay="1">
            <span className="h-px w-8 bg-teal-500" />
            Servicios
          </span>
          <h2 className="reveal section-title mt-6 text-slate-900" data-delay="1">
            Soluciones que transforman cada capa de su operación
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-slate-600" data-delay="2">
            Intervenimos los seis ejes críticos de la empresa moderna. Cada servicio está
            diseñado para integrarse con los demás y construir un ecosistema tecnológico
            coherente, no una colección de herramientas aisladas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-7 shadow-sm transition-all duration-500 hover:border-slate-300 hover:bg-slate-900 hover:-translate-y-1 reveal group"
              data-delay={(i % 3) + 1}
            >
              {/* Brillo superior */}
              <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-slate-200 text-teal-600 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-600">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-300">{item.description}</p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                Conocer más
                <span className="h-px w-6 bg-teal-600 transition-all duration-300 group-hover:w-10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
