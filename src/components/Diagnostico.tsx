import { useState } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';
import { quizQuestions, quizResults } from '@/data/content';

export function Diagnostico() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const total = quizQuestions.length;
  const current = quizQuestions[step];
  const progress = ((step + (finished ? 1 : 0)) / total) * 100;

  const score = answers.reduce((acc, s) => acc + s, 0);
  const result = quizResults.find((r) => score >= r.min && score <= r.max);

  const handleAnswer = (s: number) => {
    const next = [...answers, s];
    setAnswers(next);
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <section id="diagnostico" className="relative border-t border-white/5 bg-[#0E0E0E] py-24 md:py-32">
      <div className="container-v">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">
            <span className="h-px w-8 bg-teal-400" />
            Diagnóstico de Madurez Digital
            <span className="h-px w-8 bg-teal-400" />
          </span>
          <h2 className="reveal section-title mt-6" data-delay="1">
            Descubra en 2 minutos dónde está su empresa
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-slate-400" data-delay="2">
            Cinco preguntas. Un mapa claro de su nivel de madurez digital y las prioridades
            que debería atacar primero.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 max-w-2xl" data-delay="3">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171717] p-8 md:p-12">
            {/* Barra de progreso */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                <span>
                  {finished ? 'Completado' : `Pregunta ${step + 1} de ${total}`}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {!finished ? (
              <div key={step}>
                <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
                  {current.question}
                </h3>
                <div className="mt-8 flex flex-col gap-3">
                  {current.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.score)}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-slate-200 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                    >
                      <span className="text-sm font-medium md:text-base">{opt.text}</span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="text-sm uppercase tracking-widest text-teal-400">Resultado</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">{result?.level}</h3>
                <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">
                  {result?.description}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a href="#contacto" className="btn-primary group">
                    <Sparkles className="h-4 w-4" />
                    Quiero el diagnóstico completo
                  </a>
                  <button onClick={reset} className="btn-ghost group">
                    <RotateCcw className="h-4 w-4" />
                    Repetir
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
