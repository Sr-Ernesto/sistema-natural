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
  const [userLocale, setUserLocale] = useState("es-CO");

  useEffect(() => {
    // Detectar locale del navegador
    if (typeof window !== "undefined") {
      setUserLocale(window.navigator.language || "es-CO");
    }

    async function detectCurrency() {
      try {
        // Intento 1: ipwho.is (Más robusta)
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        
        if (data.success) {
          const country = data.country_code;
          if (CURRENCY_MAP[country]) {
            setCurrency(CURRENCY_MAP[country]);
            return;
          }
        }
        
        // Intento 2 (Fallback): ip-api.com
        const res2 = await fetch("http://ip-api.com/json/");
        const data2 = await res2.json();
        if (data2.status === "success" && CURRENCY_MAP[data2.countryCode]) {
          setCurrency(CURRENCY_MAP[data2.countryCode]);
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
    try {
      return new Intl.NumberFormat(userLocale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(usdValue * currency.rate);
    } catch (e) {
      // Fallback simple si Intl falla
      return `${currency.symbol}${Math.round(usdValue * currency.rate)}`;
    }
  }, [currency, userLocale]);

  return { 
    price: format(baseUsd), 
    oldPrice: format(baseUsd * 3.33), // 70% OFF approx
    format,
    code: currency.code, 
    loading 
  };
}
