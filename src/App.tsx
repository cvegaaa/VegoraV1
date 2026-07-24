import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Propuesta } from '@/components/Propuesta';
import { Servicios } from '@/components/Servicios';
import { Diferencial } from '@/components/Diferencial';
import { Diagnostico } from '@/components/Diagnostico';
import { Problemas } from '@/components/Problemas';
import { Confianza } from '@/components/Confianza';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Propuesta />
        <Servicios />
        <Diferencial />
        <Diagnostico />
        <Problemas />
        <Confianza />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
