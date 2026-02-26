export function FAQSection() {
  const faqs = [
    {
      q: "¿Necesito conocimientos previos?",
      a: "<p>Para nada. Está diseñado para que empieces desde cero absoluto.</p><p><strong>Para principiantes. Paso a paso.</strong> Simple y claro.</p>"
    },
    {
      q: "¿Qué incluye exactamente?",
      a: "<ul><li><strong>✅ Sistema Sabiduría Natural:</strong> eBook principal + 10 recursos digitales</li><li><strong>🎁 Regalo 1:</strong> Comunidad Privada de WhatsApp</li><li><strong>🎁 Regalo 2:</strong> Tu Marca natural desde Casa (eBook)</li><li><strong>🎁 Regalo 3:</strong> Actualizaciones gratuitas</li></ul><p>Todo queda para ti para siempre.</p>"
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
      q: "¿Quiénes somos?",
      a: "<p>Somos <strong>Daniela y Sol</strong>.</p><p>Llevamos <strong>+10 años</strong> creando cosmética natural consciente desde casa.</p><p>Hoy decidimos enseñarlo con una guía clara y simple a mujeres conscientes como tú.</p>"
    },
    {
      q: "¿Dónde resuelvo mis dudas?",
      a: "<p>Dentro de nuestra <strong>Comunidad Privada de WhatsApp</strong>, donde el equipo y otras alumnas te acompañamos en tiempo real.</p><p>También puedes escribirnos por mail o por redes sociales:<br>Instagram: <strong>@sabidurianatural_ok</strong><br>Facebook: <strong>Sabiduría Natural: Maquillaje Natural y Consciente</strong></p>"
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
