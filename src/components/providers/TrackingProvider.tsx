"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const PIXEL_ID = "1474151797665505";

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (localStorage.getItem('osbrai_admin') === 'true') {
      console.log('OpenClaw: Admin detected, Facebook Tracking disabled.');
      return;
    }
    const eventId = Date.now().toString();
    
    // Server API PageView fallback
    fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventName: "PageView", eventId }),
    }).catch(() => {});
    
  }, [pathname]);

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          if (localStorage.getItem('osbrai_admin') !== 'true') {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          }
        `}
      </Script>
      {children}
    </>
  );
}
