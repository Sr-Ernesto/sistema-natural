"use client";

import { useState, useEffect, useCallback } from "react";

interface CurrencyData {
  symbol: string;
  code: string;
  rate: number; // Rate relative to 1 USD
}

const DEFAULT_USD: CurrencyData = { symbol: "$", code: "USD", rate: 1 };

const CURRENCY_MAP: Record<string, CurrencyData> = {
  CO: { symbol: "$", code: "COP", rate: 4500 },
  MX: { symbol: "$", code: "MXN", rate: 18.0 },
  BR: { symbol: "R$", code: "BRL", rate: 5.5 },
  ES: { symbol: "€", code: "EUR", rate: 0.95 },
  AR: { symbol: "$", code: "ARS", rate: 1000 },
  CL: { symbol: "$", code: "CLP", rate: 980 },
  PE: { symbol: "S/", code: "PEN", rate: 3.8 },
  US: { symbol: "$", code: "USD", rate: 1 },
};

export function useCurrency(baseUsd: number = 9) {
  const [currency, setCurrency] = useState<CurrencyData>(DEFAULT_USD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function detectCurrency() {
      try {
        // Usamos una API de geolocalización robusta
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("API Limit");
        const data = await res.json();
        const country = data.country_code;
        
        if (CURRENCY_MAP[country]) {
          setCurrency(CURRENCY_MAP[country]);
        } else if (data.currency) {
          // Intento por código de moneda si el país no está mapeado
          const found = Object.values(CURRENCY_MAP).find(c => c.code === data.currency);
          if (found) setCurrency(found);
        }
      } catch (err) {
        console.warn("Currency auto-detection failed, using default USD", err);
      } finally {
        setLoading(false);
      }
    }
    detectCurrency();
  }, []);

  const format = useCallback((usdValue: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(usdValue * currency.rate);
  }, [currency]);

  return { 
    price: format(baseUsd), 
    oldPrice: format(baseUsd * 3.33), // 70% OFF approx
    format,
    code: currency.code, 
    loading 
  };
}
