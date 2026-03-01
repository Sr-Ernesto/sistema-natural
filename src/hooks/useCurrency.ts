"use client";

import { useState, useEffect, useCallback } from "react";

interface CurrencyData {
  symbol: string;
  code: string;
  rate: number;
}

const DEFAULT_USD: CurrencyData = { symbol: "$", code: "USD", rate: 1 };

const CURRENCY_MAP: Record<string, CurrencyData> = {
  US: { symbol: "$", code: "USD", rate: 1 },
};

// Fallback por zona horaria (Cero APIs, 100% local)
const TIMEZONE_MAP: Record<string, string> = {};

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
        setCurrency(DEFAULT_USD);
        setLoading(false);
        return;
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
