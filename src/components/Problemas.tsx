import { problems } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export function Problemas() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-v">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Columna izquierda — problemas */}
          <div>
            <span className="eyebrow reveal">
              <span className="h-px w-8 bg-teal-400" />
              ¿Le suena esto?
            </span>
            <h2 className="reveal section-title mt-6" data-delay="1">
              Las señales que indican que su empresa ya necesita dar el salto
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-slate-400" data-delay="2">
              Si dos o más de estas situaciones le resultan familiares, es momento de actuar.
              La transformación no espera, y la competencia tampoco.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {problems.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-red-500/30"
                  data-delay={(i % 2) + 1}
                >
                  <div className="flex-shrink-0 text-red-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.description}</p>
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
