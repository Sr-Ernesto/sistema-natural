import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { eventName, eventId, userData, customData } = await req.json();
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json({ error: "Missing config" }, { status: 500 });
    }

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: eventId,
          user_data: {
            client_ip_address: req.headers.get("x-forwarded-for") || "127.0.0.1",
            client_user_agent: req.headers.get("user-agent"),
            ...userData,
          },
          custom_data: customData,
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Meta CAPI Error:", error);
    return NextResponse.json({ error: "Failed to send event" }, { status: 500 });
  }
}
