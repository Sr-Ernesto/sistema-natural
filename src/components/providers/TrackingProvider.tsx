"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GTM_ID = "GTM-5H2C27F8";
const PIXEL_ID = "1474151797665505";

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sendCAPIEvent = async (eventName: string, eventId: string) => {
    try {
      await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName,
          eventId,
        }),
      });
    } catch (err) {
      console.error("CAPI error", err);
    }
  };

  useEffect(() => {
    const eventId = Date.now().toString();
    
    // PostHog
    if (typeof window !== "undefined" && !(window as any).posthog) {
      (function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing set_user_props get_property get_session_id get_distinct_id get_groups set_group get_group_prop reset debug get_surveys get_active_feature_flags get_feature_flag get_feature_flag_payload reload_feature_flags group on onFeatureFlags get_variable get_variable_payload".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)})(document,window.posthog||[]);
      (window as any).posthog.init('phc_oswJlcArMnOps8QptW7ZN4q2IZXEG26RE2IXgiB5qyb', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always', 
        capture_pageview: false // We capture it below manually
      });
    }

    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.capture('$pageview');
    }

    // Browser Pixel PageView
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).fbq) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq("track", "PageView", {}, { eventID: eventId });
    }

    // Server API PageView
    sendCAPIEvent("PageView", eventId);
  }, [pathname]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');`}
      </Script>
      {children}
    </>
  );
}
