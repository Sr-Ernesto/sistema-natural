export function BenefitsChecks() {
  const benefits = [
    { text: "Adiós a la confusión: Nunca más te quedarás mirando una etiqueta sin entender nada. Ahora sabrás qué es marketing y qué es real." },
    { text: "Orgullo en cada frasco: Vas a crear labiales y cremas de tan alta calidad que tus amigas te preguntarán dónde las compraste." },
    { text: "Piel que respira: Ya no vas a 'tapar' tus imperfecciones con químicos; vas a usar ingredientes vivos que nutren de verdad." },
    { text: "Seguridad Total: Maquillaje 100% libre de tóxicos. Te doy el paso a paso para que te salga bien a la primera." },
    { text: "Tu propio camino: Si quieres, esto es el inicio de tu propio negocio rentable y alineado con lo que amas." },
  ];

  return (
    <section className="py-6.5 md:py-10 px-4 md:px-6 text-[#111]">
      <div className="max-w-[960px] mx-auto text-center">
        <h2 className="font-serif text-[clamp(28px,6.4vw,42px)] leading-[1.1] mb-3.5 text-black text-balance">
          Lo que vas a sentir<br /><span className="text-[#8aad62]">cuando empieces:</span>
        </h2>
        <ul className="list-none p-3.5 md:p-4.5 mx-auto max-w-[760px] bg-white border-2 border-[#8aad62] rounded-[18px] shadow-[0_8px_22px_rgba(0,0,0,0.10)] text-left">
          {benefits.map((benefit, i) => (
            <li key={i} className={`grid grid-cols-[22px_1fr] gap-2.5 items-start p-2.5 md:p-3 md:px-2 ${i > 0 ? 'border-t border-black/10' : ''}`}>
              <span className="w-[22px] h-[22px] rounded-full grid place-items-center font-black text-sm text-[#1b1b1b] bg-[#8aad62]/20 border border-[#8aad62]/55 translate-y-[1px] select-none">
                ✓
              </span>
              <span className="font-sans font-medium text-[#6b6b6b] text-[clamp(15px,4vw,16.5px)] leading-[1.35]">
                <strong className="text-[#1a1a1a]">{benefit.text.split(': ')[0]}:</strong> {benefit.text.split(': ')[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
