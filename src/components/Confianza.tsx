import { stats } from '@/data/content';

export function Confianza() {
  return (
    <section className="relative border-t border-white/5 bg-[#0E0E0E] py-20">
      <div className="container-v">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal text-center" data-delay={(i % 4) + 1}>
              <div className="bg-gradient-to-b from-white to-slate-500 bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm text-slate-400 md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
