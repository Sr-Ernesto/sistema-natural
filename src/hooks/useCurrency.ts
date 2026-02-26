"use client";

import { useState, useEffect } from "react";

interface CurrencyData {
  symbol: string;
  code: string;
  rate: number; // Rate relative to 1 USD
}

const DEFAULT_USD: CurrencyData = { symbol: "$", code: "USD", rate: 1 };

const CURRENCY_MAP: Record<string, CurrencyData> = {
  CO: { symbol: "$", code: "COP", rate: 4000 },
  MX: { symbol: "$", code: "MXN", rate: 17.5 },
  BR: { symbol: "R$", code: "BRL", rate: 5.2 },
  ES: { symbol: "€", code: "EUR", rate: 0.92 },
  AR: { symbol: "$", code: "ARS", rate: 850 },
  CL: { symbol: "$", code: "CLP", rate: 950 },
  PE: { symbol: "S/", code: "PEN", rate: 3.7 },
};

export function useCurrency(baseUsd: number = 11.11) {
  const [currency, setCurrency] = useState<CurrencyData>(DEFAULT_USD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function detectCurrency() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const country = data.country_code;
        
        if (CURRENCY_MAP[country]) {
          setCurrency(CURRENCY_MAP[country]);
        } else {
          // Check if the API provides currency code directly
          if (data.currency === "EUR") setCurrency(CURRENCY_MAP["ES"]);
          // Default to USD for others
        }
      } catch (err) {
        console.error("Currency detection failed", err);
      } finally {
        setLoading(false);
      }
    }
    detectCurrency();
  }, []);

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: currency.code === "USD" ? 2 : 0,
    maximumFractionDigits: currency.code === "USD" ? 2 : 0,
  }).format(baseUsd * currency.rate);

  const formattedOldPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: currency.code === "USD" ? 2 : 0,
    maximumFractionDigits: currency.code === "USD" ? 2 : 0,
  }).format(baseUsd * 3.33 * currency.rate); // Approx 70% off

  return { 
    price: formattedPrice, 
    oldPrice: formattedOldPrice, 
    code: currency.code, 
    loading 
  };
}
