export function FAQSection() {
  const faqs = [
    {
      q: "¿De verdad es tan fácil como dices?",
      a: "<p>¡Honestamente, sí! Está diseñado para que cualquier persona, sin importar su edad o experiencia, pueda hacerlo en su propia cocina.</p><p><strong>Es paso a paso.</strong> Tan simple como seguir una receta de cocina.</p>"
    },
    {
      q: "¿Qué voy a recibir exactamente?",
      a: "<ul><li><strong>✅ Mi Guía Personal:</strong> El manual principal con mis secretos mejor guardados.</li><li><strong>🎁 Extra 1:</strong> El truco para ahorrar el 80% en tus mimos diarios.</li><li><strong>🎁 Extra 2:</strong> Cómo dejar de depender de las marcas caras.</li></ul><p>Y todo el material es tuyo para siempre.</p>"
    },
    {
      q: "¿Es físico o digital?",
      a: "<p><strong>Es 100% digital.</strong> Queremos que lo tengas ya mismo, sin esperas ni envíos costosos.</p><p>Al ser un libro “vivo”, cualquier actualización te llegará gratis.</p>"
    },
    {
      q: "¿Cuándo lo recibo?",
      a: "<p>Apenas compras, te llega el mail con todo.</p><p><strong>Acceso inmediato.</strong></p><p>(Si no lo ves, revisa <strong>Spam</strong> o escríbenos y te ayudamos)</p>"
    },
    {
      q: "¿Dónde resuelvo mis dudas?",
      a: "<p>Puedes escribirnos directamente a nuestro correo de soporte oficial:</p><p>📧 <strong>micosmeticanatural2026@gmail.com</strong></p><p>Te responderemos lo antes posible para que nunca te sientas sola en este proceso.</p>"
    }
  ];

  return (
    <section className="py-5.5 md:py-6 px-4.5 md:px-5.5">
      <div className="max-w-[640px] mx-auto font-sans">
        <h2 className="font-serif text-[2rem] md:text-[2.1rem] leading-[1.15] mb-3.5 md:mb-4 text-[#303030]">
          Preguntas Frecuentes
        </h2>
        <div className="border-t border-[#eee4d4]">
          {faqs.map((faq, i) => (
            <details key={i} className="border-bottom border-[#eee4d4] group">
              <summary className="list-none cursor-pointer flex items-center gap-1.5 py-2.5">
                <span className="text-[15px] shrink-0">🌿</span>
                <span className="flex-1 text-[15px] md:text-[15.5px] font-semibold text-[#222] leading-[1.35]">
                  {faq.q}
                </span>
                <span className="text-[15px] leading-none text-[#7b9b80] transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div 
                className="pt-0 px-1 pb-2.5 pl-6.5 text-sm md:text-[14.5px] leading-[1.55] text-[#444] [&_p]:mb-[7px] [&_p:last-child]:mb-[3px] [&_ul]:my-[3px] [&_ul]:mx-0 [&_ul]:ml-4.5 [&_li]:mb-1"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
