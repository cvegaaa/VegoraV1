import { differentials } from '@/data/content';

export function Diferencial() {
  return (
    <section id="diferencial" className="relative z-0 overflow-hidden py-24 md:py-32">
      {/* Imagen lateral con parallax sutil */}
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/33637962/pexels-photo-33637962/free-photo-of-modern-home-office-workspace-with-developer-coding.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
      </div>

      <div className="container-v relative z-10">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">
            <span className="h-px w-8 bg-teal-400" />
            Diferencial competitivo
          </span>
          <h2 className="reveal section-title mt-6" data-delay="1">
            Por qué las empresas que trabajan con nosotros no vuelven atrás
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="reveal group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
              data-delay={(i % 2) + 1}
            >
              <div className="flex-shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
