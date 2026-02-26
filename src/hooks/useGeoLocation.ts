"use client";

import { useState, useEffect } from "react";

interface GeoData {
  city: string;
  country: string;
}

export function useGeoLocation() {
  const [geo, setGeo] = useState<GeoData>({ city: "", country: "tu país" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGeo() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setGeo({ 
          city: data.city || "", 
          country: data.country_name || "tu país" 
        });
      } catch (err) {
        console.error("Geo fetch failed", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGeo();
  }, []);

  return { geo, loading };
}
