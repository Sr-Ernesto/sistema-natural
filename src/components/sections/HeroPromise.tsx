import Image from "next/image";

export function HeroPromise() {
  return (
    <section className="py-10 px-3 md:px-6">
      <div className="max-w-[980px] mx-auto text-center">
        <p className="font-sans text-xs md:text-sm tracking-[0.14em] uppercase font-semibold text-[#303030]/90 mb-2 md:mb-2.5">
          Tu Receta de Belleza en Casa:
        </p>
        <h2 className="font-serif text-[clamp(26px,7.2vw,34px)] md:text-[50px] leading-[1.08] md:leading-[1.06] tracking-[-0.25px] md:tracking-[-0.35px] text-[#303030] font-bold text-balance max-w-[900px] mx-auto">
          <span className="block"><strong>¿Cansada de tirar dinero en</strong></span>
          <span className="block"><strong>maquillaje y cremas carísimas?</strong></span>
          <span className="block text-[#8aad62]">Te cuento un secreto:</span>
          <span className="block"><strong>Tú puedes hacerlo mejor.</strong></span>
        </h2>
        <p className="font-sans text-[17px] md:text-[20px] leading-[1.42] text-[#303030] mt-4 md:mt-[18px] max-w-[560px] md:max-w-[760px] mx-auto px-3 md:px-0 text-balance">
          <strong>Honestamente, encontré la forma</strong><br />
          <strong>de dejar de ser esclava de las marcas</strong><br />
          <strong>y mi piel nunca ha estado mejor.</strong>
          <span className="block mt-2.5">
            Olvídate de precios absurdos. Te enseño a <strong>recuperar tu libertad</strong> creando tus propias cositas con el orgullo de decir: <strong>"Esto lo hice yo"</strong>.
          </span>
        </p>

        {/* Bloque Comparativo de Alta Conversión */}
        <div className="mt-8 mb-4 max-w-[500px] mx-auto bg-[#8aad62]/10 border-2 border-[#8aad62]/30 rounded-2xl p-6 text-left shadow-sm">
          <p className="font-sans text-sm font-bold text-[#8aad62] uppercase tracking-wider mb-4 text-center">
            ¿Hacemos la cuenta juntas?
          </p>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-[#8aad62]/20 pb-2">
              <span className="font-sans text-sm text-[#4a4a4a]">Tu crema de marca:</span>
              <span className="font-sans font-bold text-[#d83a3a]">$35.00 USD</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#8aad62]/20 pb-2">
              <span className="font-sans text-sm text-[#4a4a4a]">Tu propia crema:</span>
              <span className="font-sans font-bold text-[#8aad62]">$0.80 USD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm font-bold text-[#303030]">Tu orgullo y libertad:</span>
              <span className="font-serif italic text-[#8aad62]">¡No tiene precio!</span>
            </div>
          </div>
          <p className="mt-4 font-sans text-xs italic text-[#666] text-center">
            ¿Vas a seguir regalando tu dinero solo por un envase de lujo?
          </p>
        </div>
      </div>
    </section>
  );
}
