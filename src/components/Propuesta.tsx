import { values } from '@/data/content';

export function Propuesta() {
  return (
    <section id="propuesta" className="relative py-24 md:py-32">
      <div className="container-v">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">
            <span className="h-px w-8 bg-teal-400" />
            Propuesta de valor
          </span>
          <h2 className="reveal section-title mt-6" data-delay="1">
            No vendemos tecnología. Vendemos la empresa que usted quiere dirigir.
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-slate-400" data-delay="2">
            En VEGORA entendemos que la transformación digital no es instalar software: es
            rediseñar la forma en que su empresa crea valor. Por eso acompañamos cada proyecto
            desde el diagnóstico hasta la transferencia de conocimiento, garantizando que la
            tecnología se convierta en una ventaja competitiva sostenible.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <div
              key={item.title}
              className="card reveal group"
              data-delay={(i % 4) + 1}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 transition-colors duration-300 group-hover:bg-blue-600/25">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
