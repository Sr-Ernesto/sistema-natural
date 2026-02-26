"use client";

import { useState, useEffect } from "react";

interface GeoData {
  city: string;
  country: string;
}

export function useGeoLocation() {
  const [geo, setGeo] = useState<GeoData>({ city: "", country: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGeo() {
      try {
        // Intentamos primero con ipapi.co
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        if (data.city) {
          setGeo({ 
            city: data.city, 
            country: data.country_name 
          });
        } else {
          // Fallback a ip-api.com si el primero no trae ciudad
          const res2 = await fetch("http://ip-api.com/json/");
          const data2 = await res2.json();
          setGeo({
            city: data2.city || "tu ciudad",
            country: data2.country || "tu país"
          });
        }
      } catch (err) {
        console.error("Geo fetch failed", err);
        setGeo({ city: "tu ciudad", country: "tu país" });
      } finally {
        setLoading(false);
      }
    }
    fetchGeo();
  }, []);

  return { geo, loading };
}
