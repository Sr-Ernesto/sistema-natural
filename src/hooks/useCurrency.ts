"use client";

import { useState, useEffect, useCallback } from "react";

interface CurrencyData {
  symbol: string;
  code: string;
  rate: number;
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
    if (typeof window !== "undefined") {
      setUserLocale(window.navigator.language || "es-CO");
    }

    async function detectCurrency() {
      try {
        // 1. Intentar leer de LocalStorage (Más confiable en Mobile que Cookies sobre IP)
        const cachedCode = localStorage.getItem("user_currency_code");
        const cachedRate = localStorage.getItem("user_currency_rate");

        if (cachedCode && cachedRate) {
          const found = Object.values(CURRENCY_MAP).find(c => c.code === cachedCode) || DEFAULT_USD;
          setCurrency({ ...found, rate: parseFloat(cachedRate) });
          setLoading(false);
          return;
        }

        // 2. Si no hay cache, detectar por IP (Probamos 3 fuentes para Mobile)
        let detected = DEFAULT_USD;
        
        try {
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();
          if (data.success && CURRENCY_MAP[data.country_code]) {
            detected = CURRENCY_MAP[data.country_code];
          }
        } catch (e) {
          const res2 = await fetch("https://ipapi.co/json/");
          const data2 = await res2.json();
          if (data2.country_code && CURRENCY_MAP[data2.country_code]) {
            detected = CURRENCY_MAP[data2.country_code];
          }
        }

        setCurrency(detected);
        
        // 3. GUARDAR EN LOCALSTORAGE para Mobile
        localStorage.setItem("user_currency_code", detected.code);
        localStorage.setItem("user_currency_rate", detected.rate.toString());

      } catch (err) {
        console.warn("Currency auto-detection failed", err);
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
      return `${currency.symbol}${Math.round(usdValue * currency.rate)}`;
    }
  }, [currency, userLocale]);

  return { 
    price: format(baseUsd), 
    oldPrice: format(baseUsd * 3.33), 
    format,
    code: currency.code, 
    loading 
  };
}
