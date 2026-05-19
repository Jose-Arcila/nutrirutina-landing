'use client';

import Image from 'next/image';
import {
  Check,
  ArrowRight,
  Heart,
  ShoppingBag,
  MessageCircle,
  Shield,
  Clock,
  Users,
  Target,
  User,
  Wallet,
  Utensils,
  MapPin,
  Activity
} from 'lucide-react';

export default function Home() {
  const whatsappUrl = "https://wa.me/573181741440?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20los%20planes%20nutricionales%20personalizados.%20Me%20interesa%20recibir%20un%20plan%20adaptado%20a%20mi%20rutina%20y%20objetivos.";
  const waPlanInicial = "https://wa.me/573181741440?text=" + encodeURIComponent("Hola, me interesa el *Plan Inicial*. Quiero más información.");
  const waPlanNutrirutina = "https://wa.me/573181741440?text=" + encodeURIComponent("Hola, me interesa el *Plan Nutrirutina*. Quiero más información.");
  const waPlanAcompanamiento = "https://wa.me/573181741440?text=" + encodeURIComponent("Hola, me interesa el *Plan Acompañamiento*. Quiero más información.");

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18173164847/bWStCPnxy68cEK_60dlD',
          'value': 1.0,
          'currency': 'COP'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-zinc-100 dark:border-zinc-800 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/nutrirutina-simple-1.png"
              alt="Nutrirutina Logo"
              width={195}
              height={52}
              className="h-[52px] w-auto"
            />
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="hidden sm:flex items-center gap-2 bg-primary text-white dark:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm shadow-primary/20"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* Section 1 — Hero */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-items-center md:grid-cols-2 gap-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-[0.03] dark:opacity-[0.01]"></div>
          <div className="flex flex-col gap-6 relative z-10">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Planes Nutricionales Personalizados</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
              Planes nutricionales personalizados para personas reales
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Mejora tu alimentación con un plan claro, práctico y adaptado a tu rutina, tus gustos, tu presupuesto y tus objetivos. Diseñado por una Nutricionista-Dietista con amplia experiencia en salud, bienestar y acompañamiento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-primary text-white dark:text-zinc-900 px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar mi plan por WhatsApp
              </a>
              <a
                href="#planes"
                className="flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 px-6 py-3.5 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                Ver planes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 dark:shadow-none">
            <Image
              src="/healthy_meal.png"
              alt="Plato de comida saludable y balanceado"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </section>

        {/* Section 2 — The problem */}
        <section className="bg-primary-light dark:bg-primary-light/5 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
              Muchas dietas fallan porque no están hechas para la vida real
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Una dieta puede verse perfecta en papel, pero si no encaja con tus horarios, tu presupuesto, tus antojos, tu familia o los alimentos que tienes disponibles, es difícil sostenerla.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium max-w-2xl mx-auto">
              Por eso, este servicio no se enfoca solo en decirte qué comer, sino en ayudarte a organizar cómo hacerlo posible.
            </p>
          </div>
        </section>

        {/* Section 3 — The solution */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Nuestra Metodología</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Un plan nutricional con estrategia de ejecución</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-light dark:bg-primary-light/10 rounded-xl flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">1. Personalizado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Adaptado a tus objetivos, hábitos, horarios, preferencias y restricciones.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-light dark:bg-primary-light/10 rounded-xl flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">2. Realista</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Con alimentos comunes, opciones prácticas y sustituciones posibles.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-light dark:bg-primary-light/10 rounded-xl flex items-center justify-center text-primary">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">3. Organizado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Incluye estructura semanal, guía de compras y recomendaciones para planificar tus comidas.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-light dark:bg-primary-light/10 rounded-xl flex items-center justify-center text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">4. Acompañado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Según el plan elegido, puedes recibir seguimiento, ajustes y orientación durante el proceso.
              </p>
            </div>
          </div>
        </section>

        {/* NEW Section — Philosophy Placeholder */}
        <section className="bg-primary-light dark:bg-primary-light/5 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-[0.03] dark:opacity-[0.01]"></div>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/morefood.png"
                alt="Ingredientes frescos y comida saludable"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Filosofía Real</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Comida que disfrutas, resultados que notas</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                No creemos en comer alimentos desabridos ni en prohibir grupos enteros de comida. Un buen plan incluye lo que te gusta y te enseña cómo integrarlo de forma balanceada.
              </p>
              <ul className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-300 mt-2">
                {["Sin alimentos prohibidos", "Recetas fáciles y rápidas", "Opciones económicas"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 — Plans / packages */}
        <section id="planes" className="bg-zinc-50 dark:bg-zinc-950 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col gap-4">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Inversión en tu Salud</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Planes diseñados para tu ritmo</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Plan 1 */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Plan Inicial</h3>
                  <p className="text-zinc-500 text-sm mt-1">Para quienes quieren empezar con una guía clara y personalizada.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">$150.000</span>
                  <span className="text-zinc-500 text-sm">COP</span>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Evaluación inicial de hábitos y objetivos</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Recomendaciones nutricionales personalizadas</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Guía general de alimentación</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Sugerencias prácticas para mejorar hábitos</span>
                  </li>
                </ul>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 italic mt-auto">
                  Ideal si: quieres orientación profesional sin seguimiento.
                </div>
                <a
                  href={waPlanInicial}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all mt-4"
                >
                  Quiero el Plan Inicial
                </a>
              </div>

              {/* Plan 2 - Featured */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border-2 border-primary relative flex flex-col gap-6 shadow-xl shadow-primary/5">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white dark:text-zinc-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recomendado
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Plan Nutrirutina</h3>
                  <p className="text-zinc-500 text-sm mt-1">Nuestro plan más recomendado.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">$300.000</span>
                  <span className="text-zinc-500 text-sm">COP</span>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Evaluación inicial, plan de alimentación personalizado</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Opciones para desayuno, almuerzo, cena y meriendas</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Guía de compras y sustituciones</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Organización semanal</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>1 ajuste posterior</span>
                  </li>
                </ul>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 italic mt-auto">
                  Ideal si: quieres un plan completo que puedas aplicar en tu vida diaria.
                </div>
                <a
                  href={waPlanNutrirutina}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-primary text-white dark:text-zinc-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all mt-4"
                >
                  Quiero mi Plan Nutrirutina
                </a>
              </div>

              {/* Plan 3 */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Plan Acompañamiento</h3>
                  <p className="text-zinc-500 text-sm mt-1">Para quienes necesitan apoyo para sostener el proceso.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">$500.000</span>
                  <span className="text-zinc-500 text-sm">COP</span>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Todo lo del Plan Nutrirutina</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Seguimiento por WhatsApp durante 2 semanas</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Check-ins y ajustes según avances y dificultades</span>
                  </li>
                </ul>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 italic mt-auto">
                  Ideal si: te cuesta mantener la constancia o necesitas resolver dudas en el camino.
                </div>
                <a
                  href={waPlanAcompanamiento}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all mt-4"
                >
                  Quiero acompañamiento
                </a>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
              <p><span className="font-semibold text-accent">Condiciones de pago:</span> Se abona el 30% por adelantado para iniciar la elaboración y el 70% restante al momento de recibir tu plan.</p>
            </div>
          </div>
        </section>

        {/* NEW Section — Testimonials Placeholder */}
        {false && (
        <section className="py-16 relative overflow-hidden bg-white dark:bg-zinc-950">
          <div className="absolute inset-0 bg-pattern-dots opacity-[0.02] dark:opacity-[0.01]"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 flex flex-col gap-4">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Casos de Éxito</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Personas reales, resultados reales</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-6 relative">
                  <div className="flex text-accent gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 italic flex-1 text-sm leading-relaxed">
                    &quot;Placeholder: Testimonio de un paciente sobre cómo el plan le ayudó a mejorar su relación con la comida sin dejar de disfrutar su rutina.&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs shrink-0 border border-primary/20">Foto</div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">Paciente {i}</span>
                      <span className="text-xs text-zinc-500">Objetivo logrado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Section 5 — Who this is for */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">¿Es para ti?</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
                Este plan es para ti si…
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Buscamos personas comprometidas con su bienestar, pero que entienden que el cambio debe ser progresivo y adaptado a sus circunstancias.
              </p>
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
                {[
                  "Quieres mejorar tu alimentación, pero no sabes por dónde empezar.",
                  "Has probado dietas difíciles de mantener.",
                  "Necesitas un plan que se adapte a tu horario y presupuesto.",
                  "Quieres organizar mejor tus comidas semanales.",
                  "Buscas orientación profesional, clara y práctica.",
                  "Necesitas seguimiento para mantenerte constante."
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-lg justify-self-center rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/eating.png"
              alt="Persona disfrutando de una comida saludable"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 6 — Who creates the plans */}
        <section className="bg-zinc-50 dark:bg-zinc-950 py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/viviana.png"
                alt="Viviana Ortiz - Nutricionista"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Tu Profesional</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Diseñado por una profesional en nutrición</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soy Viviana Ortiz, Nutricionista-Dietista con amplia experiencia en salud, bienestar, promoción y mantenimiento de la salud, servicios de alimentación, seguimiento de usuarios y acompañamiento personalizado.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mi enfoque es ayudarte a construir un plan que no solo sea técnicamente adecuado, sino posible de aplicar en tu vida diaria.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  "Nutricionista-Dietista",
                  "Experiencia en salud pública",
                  "Seguimiento personalizado",
                  "Atención humana y práctica"
                ].map((item, index) => (
                  <div key={index} className="flex gap-2 items-center text-sm text-zinc-700 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://viviana-ortiz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 font-medium text-sm flex items-center gap-1 mt-6 transition-all"
              >
                Visita mi sitio web
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 7 — How it works */}
        <section className="max-w-6xl mx-auto px-6 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-[0.02] dark:opacity-[0.01]"></div>
          <div className="relative z-10">
            <div className="text-center mb-16 flex flex-col gap-4">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">El Proceso</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">¿Cómo funciona?</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "Paso 1",
                  title: "Solicitas tu plan",
                  desc: "Nos escribes por WhatsApp y eliges el tipo de plan."
                },
                {
                  step: "Paso 2",
                  title: "Respondes el formulario",
                  desc: "Recopilamos información sobre tus hábitos, objetivos, horarios y preferencias."
                },
                {
                  step: "Paso 3",
                  title: "Recibes tu plan",
                  desc: "Te entregamos una guía clara con recomendaciones y estrategia de ejecución."
                },
                {
                  step: "Paso 4",
                  title: "Ajustamos",
                  desc: "Según el plan elegido, se realiza seguimiento o ajuste posterior."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-4 relative">
                  <span className="text-accent font-bold text-lg">{item.step}</span>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 right-0 translate-x-1/2 text-zinc-300 dark:text-zinc-700">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 — Intake preview */}
        <section className="bg-primary-light dark:bg-primary-light/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col gap-4">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Precisión y Cuidado</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Para hacer tu plan, tendremos en cuenta:</h2>
            </div>

            <div className="grid grid-cols-12 gap-4 auto-rows-min">
              {/* Card 1: Estilo de Vida */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/lifestyle.png"
                    alt="Estilo de vida saludable"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-accent font-bold text-xs uppercase">Estilo de Vida</span>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">Analizamos tus horarios de trabajo, estudio y nivel de actividad física.</p>
                </div>
              </div>

              {/* Card 2: Preferencias */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/fresh-food.png"
                    alt="Alimentos frescos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-accent font-bold text-xs uppercase">Preferencias</span>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">Tus gustos, alimentos que evitas, alergias e intolerancias.</p>
                </div>
              </div>

              {/* Card 3: Objetivo principal */}
              <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-row gap-3 items-center">
                <Target className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Objetivo principal</span>
              </div>

              {/* Card 4: Edad, peso... */}
              <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-row gap-3 items-center">
                <User className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Edad, peso, talla y contexto</span>
              </div>

              {/* Card 5: Presupuesto */}
              <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-row gap-3 items-center">
                <Wallet className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Presupuesto aproximado</span>
              </div>

              {/* Card 6: Quién cocina */}
              <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-row gap-3 items-center">
                <Utensils className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Quién cocina y organización</span>
              </div>

              {/* Card 7: Ciudad/País */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-row gap-3 items-center">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Ciudad o país donde vives</span>
              </div>

              {/* Card 8: Condiciones médicas */}
              <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-amber-50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800/50 shadow-sm flex flex-row gap-3 items-center">
                <Activity className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-semibold">Condiciones médicas relevantes</span>
              </div>
            </div>

            <div className="mt-12 text-center text-xs text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto">
              Nota: En caso de condiciones médicas diagnosticadas, el plan nutricional debe complementarse con el seguimiento de tu médico tratante.
            </div>
          </div>
        </section>

        {/* Section 9 — FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Dudas Frecuentes</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Preguntas frecuentes</h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "¿Esto es una dieta estricta?",
                a: "No. El enfoque es crear un plan realista y sostenible, adaptado a tu rutina."
              },
              {
                q: "¿Puedo pedir cambios si no me gustan algunos alimentos?",
                a: "Sí. El plan contempla preferencias y sustituciones."
              },
              {
                q: "¿Sirve si tengo poco tiempo para cocinar?",
                a: "Sí. Precisamente se tienen en cuenta tus horarios, disponibilidad y nivel de organización."
              },
              {
                q: "¿El plan sirve para bajar de peso?",
                a: "Puede orientarse a pérdida de peso, mejora de hábitos, organización alimentaria o bienestar general, según tu objetivo y contexto."
              },
              {
                q: "¿Atienden por WhatsApp?",
                a: "Sí. El proceso inicial y la comunicación se manejan de forma sencilla por WhatsApp."
              }
            ].map((item, index) => (
              <details key={index} className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-zinc-900 dark:text-zinc-50">
                  {item.q}
                  <span className="text-zinc-400 group-open:rotate-180 transition-all">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 10 — Final CTA */}
        <section className="bg-zinc-900 dark:bg-primary-light/5 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-6 items-center">
            <h2 className="text-4xl font-bold tracking-tight">Empieza con un plan hecho para tu vida real</h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              Cuéntanos tu objetivo y recibe orientación para elegir el plan más adecuado para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-primary text-white dark:text-zinc-900 px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                <MessageCircle className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
              <a
                href="#planes"
                className="flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-all"
              >
                Ver planes nuevamente
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2">
                <Image
                  src="/nutrirutina-simple-1.png"
                  alt="Nutrirutina Logo"
                  width={168}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                Este servicio ofrece orientación nutricional personalizada y no reemplaza la valoración médica. En caso de enfermedades diagnosticadas, se recomienda acompañamiento conjunto con el médico tratante.
              </p>
            </div>

            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Enlaces</span>
                <a href="#planes" className="text-sm text-zinc-500 hover:text-primary transition-all">Planes</a>
                <a href="#faq" className="text-sm text-zinc-500 hover:text-primary transition-all">Preguntas</a>
                <a href="https://viviana-ortiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-primary transition-all">Sitio Web</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Redes</span>
                <a href="#" className="text-sm text-zinc-500 hover:text-primary transition-all flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs text-zinc-400">© 2026 Nutrición en tu Rutina. Todos los derechos reservados.</span>
            <span className="text-xs text-zinc-400">Diseñado con amor por la salud.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
