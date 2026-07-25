import { problems } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export function Problemas() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-v">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Columna izquierda — problemas */}
          <div>
            <span className="eyebrow reveal text-teal-600" data-delay="1">
              <span className="h-px w-8 bg-teal-500" />
              ¿Le suena esto?
            </span>
            <h2 className="reveal section-title mt-6 text-slate-900 !text-slate-900" data-delay="1">
              Las señales que indican que su empresa ya necesita dar el salto
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-slate-600" data-delay="2">
              Si dos o más de estas situaciones le resultan familiares, es momento de actuar.
              La transformación no espera, y la competencia tampoco.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {problems.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-sm transition-all duration-500 hover:border-slate-300 hover:bg-slate-900 hover:-translate-y-1"
                  data-delay={(i % 2) + 1}
                >
                  <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-teal-600 bg-teal-500/10 rounded-2xl p-3 transition-colors duration-300 group-hover:bg-cyan-500/10">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — cliente ideal */}
          <div className="reveal lg:sticky lg:top-28" data-delay="2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171717] to-[#0E0E0E] p-8 md:p-10">
              <span className="eyebrow">
                <span className="h-px w-8 bg-teal-400" />
                Nuestro cliente ideal
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                Empresas que entienden que el estancamiento es el riesgo más caro
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Trabajamos con organizaciones que cumplen estas características:
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {[
                  'Empresas B2B con más de 20 empleados en sectores como manufactura, logística, retail, salud y servicios financieros.',
                  'Equipos directivos que ya decidieron que la tecnología es estratégica, no operativa.',
                  'Organizaciones con procesos críticos que dependen de datos y coordinación entre áreas.',
                  'Líderes que valoran la transferencia de conocimiento y rechazan la dependencia perpetua de consultores.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
