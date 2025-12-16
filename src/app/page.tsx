// 🚀 LANDING PAGE DOPAMINICA COMPLETA - "Las 3 Fórmulas Prohibidas"
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 16, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev; // Se mantiene en 00:00 cuando llega a cero
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 🔥 CONTADOR MINIMALISTA PROFESIONAL */}
      <div className="bg-primary py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Lado Izquierdo - Contador */}
          <div className="flex items-center space-x-3">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/clock.png" alt="Reloj" className="w-6 h-6 opacity-90" />
            <div className="text-white text-sm font-medium tracking-wide uppercase" style={{color: '#ffffff'}}>
              Tiempo Restante
            </div>
            <div className="flex items-center space-x-1">
              {/* Minutos */}
              <div className="bg-white text-primary px-3 py-1 rounded font-mono text-xl font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-white font-bold">:</div>
              {/* Segundos */}
              <div className="bg-white text-primary px-3 py-1 rounded font-mono text-xl font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="text-white text-xs uppercase tracking-wider">
              Minutos
            </div>
          </div>

          {/* Lado Derecho - Método Néxor */}
          <div className="flex items-center space-x-3">
            <div className="text-white text-sm font-medium tracking-wide uppercase" style={{color: '#ffffff'}}>
              Método
            </div>
            {/* Logo N personalizado */}
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-primary font-black text-lg leading-none">N</span>
            </div>
            <div className="text-white text-sm font-medium tracking-wide uppercase" style={{color: '#ffffff'}}>
              NEXOR
            </div>
          </div>
        </div>
      </div>

      {/* 🎯 HERO SECTION CON PALETA PRINCIPAL */}
      <section className="relative py-24 px-4 bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-primary"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge principal */}
          <div className="mb-8">
            <span className="inline-block bg-primary text-secondary px-6 py-3 rounded-full text-lg font-bold shadow-lg animate-pulse-primary">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/graduation-cap.png" alt="Graduación" className="inline w-6 h-6 mr-2" />
              FORMACIÓN 100% EN LÍNEA
            </span>
          </div>

          {/* Claim impactante */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-secondary font-bold uppercase tracking-wider mb-2">
              LA ÚNICA RAZÓN POR LA QUE SIGUES SIENDO UN ESCLAVO DE TU NÓMINA Y NO ESCALAS A MILLONES
            </p>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-secondary">
            Desbloquea las 3 Fórmulas <span className="text-primary">Prohibidas</span> para Liberar tu Flujo de Caja y <span className="text-primary">Duplicar</span> tus Ganancias
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
            Este es el sistema de 3 módulos de implementación inmediata que te obliga a romper tu identidad limitante, detener la hemorragia de capital y asegurar un ingreso predecible sin trabajar un minuto extra.
          </p>

          {/* CTA principal */}
          <div className="mb-8">
            <a href="#pricing" className="btn-primary">
              QUIERO LIBERAR MI FLUJO DE CAJA
            </a>
          </div>

          {/* Video placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-primary border-dashed shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <img src="https://img.icons8.com/color/48/play.png" alt="Play" className="w-8 h-8 text-secondary" />
                  </div>
                <p className="text-secondary font-bold text-lg">VSL Video - Próximamente</p>
                <p className="text-gray-300">La transformación que cambiará tu vida financiera</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ PROBLEMS SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-secondary">
            El Caos que te Mantiene en la <span className="text-primary">Pobreza</span> del Alto Volumen
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Problema 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20 hover-primary">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/48/ffffff/money.png" alt="Dinero volando" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary">HEMORRAGIA SILENCIOSA</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Facturas alto, pero el dinero se esfuma en gastos que no ves. Tienes un problema de Cash Flow, no de ventas.
              </p>
            </div>

            {/* Problema 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20 hover-primary">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/48/ffffff/brain.png" alt="Cerebro" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary">LA CÁRCEL DEL EGO</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tu mentalidad te obliga a competir por ser el más barato. Tu identidad de valor no te permite cobrar precios Premium.
              </p>
            </div>

            {/* Problema 3 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20 hover-primary">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/48/ffffff/time.png" alt="Reloj" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary">LA ESCLAVITUD 24/7</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tu negocio depende 100% de que tú estés presente. Si paras, tu ingreso para.
              </p>
            </div>

            {/* Problema 4 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20 hover-primary">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/48/ffffff/combo-chart.png" alt="Gráfico de crecimiento" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary">INESTABILIDAD CRÓNICA</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vendes un mes, te vas a cero el siguiente. La falta de un sistema predictivo te impide escalar y te condena a la operación manual.
              </p>
            </div>
          </div>

          {/* Advertencia crítica */}
          <div className="bg-primary py-4 px-6 md:py-6 md:px-8 rounded-xl md:rounded-2xl text-center shadow-lg animate-pulse-primary">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-secondary mb-2 md:mb-3">
              ¡ADVERTENCIA CRÍTICA!
            </h3>
            <p className="text-secondary text-sm md:text-lg lg:text-xl font-bold leading-tight">
              Si no detienes esta hemorragia, tu negocio seguirá dejando de ganar entre <span className="text-secondary text-lg md:text-xl lg:text-2xl">$30,000</span> y <span className="text-secondary text-lg md:text-xl lg:text-2xl">$50,000 USD</span> al año.
            </p>
          </div>
        </div>
      </section>

      {/* 🎯 SOLUTION SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-secondary">
            ¿Cómo Romper de Raíz el <span className="text-primary">Estancamiento</span>?
          </h2>

          <div className="mb-12">
            <p className="text-2xl text-primary font-bold mb-4">Con el Método Néxor y la Intervención de las 3 Fórmulas Prohibidas</p>
            <p className="text-xl text-gray-300">El 90% de los empresarios tienen estancamiento por la falta de estrategia de flujo de caja.</p>
          </div>

          {/* Nuevo estatus */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20">
              <h3 className="text-xl font-bold mb-3 text-primary">Tu Nuevo Estatus</h3>
              <p className="text-gray-300">De Esclavo de tu Nómina a Dueño de un Negocio que te Paga el DOBLE</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20">
              <h3 className="text-xl font-bold mb-3 text-primary">Autoridad Inequívoca</h3>
              <p className="text-gray-300">Tendrás el poder de subir tus precios HOY, sin miedo a perder clientes</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20">
              <h3 className="text-xl font-bold mb-3 text-primary">Flujo de Caja Predictivo</h3>
              <p className="text-gray-300">Obligarás a tu negocio a pagarte un margen doble y a dejar de operar con caos</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary/20">
              <h3 className="text-xl font-bold mb-3 text-primary">Libertad de Operación</h3>
              <p className="text-gray-300">Instalarás un sistema 24/7 que te permitirá enfocarte en la Estrategia NEXOR y la escala</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 JUSTIFICATION SECTION */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">
            La Solución es Vital porque es la Única Vía hacia los <span className="text-yellow-400">Millones</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            El resultado de millones es inaccesible si no quiebras la identidad [Fórmula #1] y detienes la hemorragia [Fórmula #2]. Las Fórmulas son la intervención estratégica que convierte el esfuerzo en riqueza predecible.
          </p>
        </div>
      </section>

      {/* 📚 PROGRAM INTRO */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            PRESENTAMOS: <span className="text-red-400">"Las 3 Fórmulas Prohibidas para Liberar tu Flujo de Caja"</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto">
            Curso grabado de 3 módulos de implementación inmediata, con Workbooks y Plantillas listas para usar. Es la hoja de ruta NEXOR para dueños de negocio que quieren la liquidez y la libertad.
          </p>
          <p className="text-2xl text-yellow-400 font-bold">
            Estas son las 3 Palancas de Control que te Darán el Dominio Total
          </p>
        </div>
      </section>

      {/* 🏗️ MODULES SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          {/* Módulo 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-primary p-8 rounded-2xl text-secondary shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://img.icons8.com/color/48/brain.png"
                    alt="Icono de cerebro - Mentalidad y liderazgo"
                    className="w-12 h-12 mr-3"
                  />
                  <h3 className="text-2xl md:text-3xl font-black">MÓDULO 1: LA ANATOMÍA DEL EGO y la Marca Imparable (Fórmula #1)</h3>
                </div>
                <p className="text-lg mb-4 font-semibold">El módulo de Ruptura de Identidad</p>
                <ul className="space-y-2 text-secondary/90">
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />La mentalidad de autoridad para posicionarte como el único en el mercado.</li>
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />El guion exacto para subir tus precios HOY sin que tu cliente objete.</li>
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />El Workbook "Yo Soy Autoridad" para eliminar la voz interna que te limita.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-primary">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                  alt="Mentalidad de liderazgo y autoridad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-primary p-8 rounded-2xl text-secondary shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://img.icons8.com/color/48/money.png"
                    alt="Icono de dinero - Finanzas y cash flow"
                    className="w-12 h-12 mr-3"
                  />
                  <h3 className="text-2xl md:text-3xl font-black">MÓDULO 2: EL CASH FLOW SWITCH al 90% (Fórmula #2)</h3>
                </div>
                <p className="text-lg mb-4 font-semibold">Es el interruptor financiero… deteniendo toda fuga de capital.</p>
                <ul className="space-y-2 text-secondary/90">
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />La herramienta Cash Flow Switch (Plantilla) para auditar y controlar tu liquidez.</li>
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />La fórmula para asegurar que tu nómina te pague a TI primero y el doble.</li>
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Cómo identificar las 5 fugas de gasto que te están desangrando.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-primary">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center"
                  alt="Análisis financiero y cash flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary p-8 rounded-2xl text-secondary shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://img.icons8.com/color/48/funnel.png"
                    alt="Icono de embudo - Marketing y automatización"
                    className="w-12 h-12 mr-3"
                  />
                  <h3 className="text-2xl md:text-3xl font-black">MÓDULO 3: EL EMBUDO INVISIBLE y la Venta Predictiva (Fórmula #3)</h3>
                </div>
                <p className="text-lg mb-4 font-semibold">Instalación de tu sistema 24/7… embudo automatizado…</p>
                <ul className="space-y-2 text-secondary/90">
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />El mapa para un Embudo Invisible que te agende citas calificadas sin escribir a nadie.</li>
                  <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />El guion de conversión para transformar prospectos en clientes de alto valor.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-primary">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
                  alt="Automatización de marketing y embudos de conversión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎁 BONUSES SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-dark mb-4">
              <img src="https://img.icons8.com/color/48/gift.png" alt="Regalo" className="inline w-12 h-12 mr-4" />
              Bonos Exclusivos
            </h2>
            <p className="text-2xl text-primary font-bold">
              El Valor Absoluto es Irrisorio. No Te Puedes Perder Esto...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bono 1 */}
            <div className="bg-secondary rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg border border-primary animate-pulse-primary">
              <div className="text-center mb-6">
                <img src="https://img.icons8.com/color/48/diamond.png" alt="Diamante" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-primary">Plantilla Maestra "Cash Flow Switch" (Fórmula #2)</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />La herramienta que detiene la fuga de dinero HOY.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Diseñada para el CEO, no para el contador.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Garantiza la claridad total de tu margen de ganancia real.</li>
              </ul>
              <div className="bg-primary text-secondary p-3 rounded-lg font-bold text-center">
                VALORADO EN MÁS DE $97 USD GRATIS CON TU INSCRIPCIÓN
              </div>
            </div>

            {/* Bono 2 */}
            <div className="bg-secondary rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg border border-primary animate-pulse-primary">
              <div className="text-center mb-6">
                <img src="https://img.icons8.com/color/48/target.png" alt="Objetivo" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-primary">Checklist Anti-Competencia de Precios (Fórmula #1)</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />5 pasos para blindar tu valor y subir tus precios en 48 horas.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Guía de Neuro-Persuasión para justificar tu Autoridad.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Lista de chequeo de la Identidad que Cobra Caro (NEXOR).</li>
              </ul>
              <div className="bg-primary text-secondary p-3 rounded-lg font-bold text-center">
                VALORADO EN MÁS DE $47 USD GRATIS CON TU INSCRIPCIÓN
              </div>
            </div>

            {/* Bono 3 */}
            <div className="bg-secondary rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg border border-primary animate-pulse-primary">
              <div className="text-center mb-6">
                <img src="https://img.icons8.com/color/48/combo-chart.png" alt="Gráfico" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-primary">Guía Rápida: Los 3 Errores de Ads que Desangran tu Capital</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Identifica y elimina los gastos de publicidad que no dan retorno.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Criterios para una inversión predecible.</li>
                <li><img src="https://img.icons8.com/color/16/checkmark.png" alt="Check" className="inline w-4 h-4 mr-2" />Asegura la rentabilidad de tu sistema 24/7.</li>
              </ul>
              <div className="bg-primary text-secondary p-3 rounded-lg font-bold text-center">
                VALORADO EN MÁS DE $27 USD GRATIS CON TU INSCRIPCIÓN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 PRICING SECTION CON PALETA SIMPLIFICADA */}
      <section id="pricing" className="py-24 px-4 bg-dark relative">
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-gray-400 line-through text-2xl mb-4">VALOR REAL: USD $171 (Curso + Bonos)</p>
            <div className="bg-primary p-8 rounded-2xl animate-pulse-primary mb-8 shadow-lg">
              <p className="text-6xl md:text-8xl font-black text-secondary mb-4">
                PRECIO HOY: <span className="text-secondary">$47</span>
              </p>
              <p className="text-2xl text-secondary font-bold">UN PAGO ÚNICO DE: USD 47</p>
            </div>
          </div>

          <div className="mb-12">
            <a href="#checkout" className="btn-primary text-3xl px-16 py-8 animate-pulse-primary">
              <img src="https://img.icons8.com/color/32/rocket.png" alt="Cohete" className="inline w-8 h-8 mr-2" />
              INSCRIBIRME CON PAGO ÚNICO
            </a>
          </div>

          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-primary text-secondary px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse-primary">
              <img src="https://img.icons8.com/color/24/graduation-cap.png" alt="Graduación" className="inline w-6 h-6 mr-2" />
              FORMACIÓN 100% EN LÍNEA
            </span>
            <span className="bg-secondary text-dark px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse-primary">
              <img src="https://img.icons8.com/color/24/lightning-bolt.png" alt="Rayo" className="inline w-6 h-6 mr-2" />
              ACCESO INMEDIATO
            </span>
            <span className="bg-primary text-secondary px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse-primary">
              <img src="https://img.icons8.com/color/24/security-shield-green.png" alt="Escudo" className="inline w-6 h-6 mr-2" />
              GARANTÍA CERO RIESGO DE 7 DÍAS
            </span>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-secondary">
            ¿Tienes estas dudas? Las Rompemos Aquí
          </h2>

          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Esto es solo motivación o un curso de contabilidad aburrido?</h3>
              <p className="text-gray-700">Esta formación combina estrategia práctica con transformación mental. No es teoría abstracta, sino herramientas implementables que han generado resultados reales en empresarios que pasaron de estancamiento a flujo de caja predecible.</p>
            </div>

            <div className="bg-secondary p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Por qué es tan barato ($47 USD)?</h3>
              <p className="text-gray-700">Porque entendemos que el mayor obstáculo no es el dinero, sino la acción. Una vez implementes las fórmulas, el ROI será exponencial. Es una inversión mínima para una transformación máxima.</p>
            </div>

            <div className="bg-secondary p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary">
              <h3 className="text-xl font-bold mb-3 text-primary">¿El acceso a los videos y plantillas es de por vida?</h3>
              <p className="text-gray-700">Sí. Tienes acceso ilimitado a todos los módulos y bonos en la plataforma Hotmart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 CONTACT SECTION CON PALETA SIMPLIFICADA */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-secondary mb-8">¿Necesitas Ayuda?</h2>
          <div className="space-y-4">
            <a href="mailto:CORREO@CORREO.COM" className="block text-primary hover:text-secondary text-xl font-semibold transition-colors">
              <img src="https://img.icons8.com/color/24/email.png" alt="Email" className="inline w-6 h-6 mr-2" />
              CORREO@CORREO.COM [IR A CORREO]
            </a>
            <a href="https://instagram.com/user" className="block text-primary hover:text-secondary text-xl font-semibold transition-colors">
              <img src="https://img.icons8.com/color/24/instagram.png" alt="Instagram" className="inline w-6 h-6 mr-2" />
              @USER [IR A INSTAGRAM]
            </a>
          </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA CON PALETA SIMPLIFICADA */}
      <section className="py-24 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8">
            ¡SÍ, Quiero mi Libertad Financiera por $47 USD y Romper mi Estancamiento!
          </h2>

          <div className="mb-8">
            <a href="#pricing" className="inline-block bg-dark text-secondary font-bold text-3xl px-16 py-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src="https://img.icons8.com/color/32/fire-element.png" alt="Fuego" className="inline w-8 h-8 mr-2" />
              INSCRIBIRME AHORA
            </a>
          </div>

          <p className="text-secondary/80 text-lg">
            Transforma tu negocio HOY mismo con las 3 Fórmulas Prohibidas
          </p>
        </div>
      </section>

      {/* 📄 FOOTER CON PALETA SIMPLIFICADA */}
      <footer className="py-12 px-4 bg-dark border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2024 Método Néxor. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-6">
              <a href="/privacidad" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="/terminos" className="text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a>
              <a href="/contacto" className="text-gray-400 hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
  );
}