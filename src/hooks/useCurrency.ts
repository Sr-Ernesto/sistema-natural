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

// Fallback por zona horaria (Cero APIs, 100% local)
const TIMEZONE_MAP: Record<string, string> = {
  "America/Bogota": "CO",
  "America/Mexico_City": "MX",
  "America/Monterrey": "MX",
  "America/Tijuana": "MX",
  "America/Santiago": "CL",
  "America/Argentina/Buenos_Aires": "AR",
  "America/Lima": "PE",
  "Europe/Madrid": "ES",
  "America/Sao_Paulo": "BR",
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
        const urlParams = new URLSearchParams(window.location.search);
        
        // 0. Override manual para pruebas (ej: ?country=MX)
        const manualCountry = urlParams.get("country")?.toUpperCase();
        if (manualCountry && CURRENCY_MAP[manualCountry]) {
          setCurrency(CURRENCY_MAP[manualCountry]);
          setLoading(false);
          return;
        }

        // 1. Intentar leer de LocalStorage (Persistencia)
        const cachedCode = localStorage.getItem("user_currency_code");
        const cachedRate = localStorage.getItem("user_currency_rate");

        if (cachedCode && cachedRate && cachedCode !== "USD") {
          const found = Object.values(CURRENCY_MAP).find(c => c.code === cachedCode);
          if (found) {
            setCurrency({ ...found, rate: parseFloat(cachedRate) });
            setLoading(false);
            return;
          }
        }

        // 2. Detección por Zona Horaria (Inmediata y local)
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (TIMEZONE_MAP[tz]) {
          const country = TIMEZONE_MAP[tz];
          const detected = CURRENCY_MAP[country];
          setCurrency(detected);
          localStorage.setItem("user_currency_code", detected.code);
          localStorage.setItem("user_currency_rate", detected.rate.toString());
          setLoading(false);
          // No retornamos aquí, intentamos refinar con IP si es posible
        }

        // 3. Refinar con IP (Asíncrono)
        try {
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();
          if (data.success && CURRENCY_MAP[data.country_code]) {
            const detected = CURRENCY_MAP[data.country_code];
            setCurrency(detected);
            localStorage.setItem("user_currency_code", detected.code);
            localStorage.setItem("user_currency_rate", detected.rate.toString());
          }
        } catch (e) {
          console.warn("IP Detection failed, keeping timezone or default");
        }

      } catch (err) {
        console.warn("Currency system failed", err);
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
