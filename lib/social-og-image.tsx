import { ImageResponse } from "next/og";

const ACCENT = "#0066FF";
const FONT_SEMI =
  "https://cdn.jsdelivr.net/npm/@fontsource/plus-jakarta-sans@5.2.5/files/plus-jakarta-sans-latin-600-normal.woff";
const FONT_EXTRA =
  "https://cdn.jsdelivr.net/npm/@fontsource/plus-jakarta-sans@5.2.5/files/plus-jakarta-sans-latin-800-normal.woff";

const pills = [
  "Landing pages",
  "Ecommerce",
  "Automations",
  "AI pipelines",
] as const;

export async function createSocialOgImage() {
  const [font600, font800] = await Promise.all([
    fetch(FONT_SEMI).then((r) => r.arrayBuffer()),
    fetch(FONT_EXTRA).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(145deg, #0a0c14 0%, #0f1a2c 42%, #0a1628 100%)",
          position: "relative",
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.09,
            display: "flex",
            backgroundImage:
              "linear-gradient(#4488ff 1px, transparent 1px), linear-gradient(90deg, #4488ff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "-6%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(0,102,255,0.38) 0%, transparent 68%)",
            filter: "blur(2px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-12%",
            left: "-4%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            José Martínez
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <span>Digital systems that</span>
            <span style={{ color: ACCENT, marginLeft: 12 }}>grow revenue</span>
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.45,
              maxWidth: 860,
              display: "flex",
            }}
          >
            Landing pages, ecommerce platforms, automations, and AI pipelines.
            Built end to end.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {pills.map((label) => (
              <div
                key={label}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.78)",
                  display: "flex",
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "rgba(255,255,255,0.42)",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            jmcrea.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: font600,
          style: "normal",
          weight: 600,
        },
        {
          name: "Plus Jakarta Sans",
          data: font800,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
