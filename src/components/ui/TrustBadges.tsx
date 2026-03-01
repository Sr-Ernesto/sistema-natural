"use client";

import Image from "next/image";

export function TrustBadges() {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="flex flex-wrap justify-center gap-6 opacity-80">
        <div className="flex flex-col items-center">
            <span className="text-[24px] mb-1">🔐</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase">SSL Encrypted</span>
        </div>
        <div className="flex flex-col items-center border-x border-gray-200 px-6">
            <span className="text-[24px] mb-1">⭐</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase">Garantía Hotmart</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-[24px] mb-1">🚀</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase">Entrega Inmediata</span>
        </div>
      </div>
      
      <div className="flex gap-4 items-center justify-center grayscale opacity-60">
         <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} height={25} />
         <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={35} height={25} />
         <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={60} height={25} />
      </div>
    </div>
  );
}
