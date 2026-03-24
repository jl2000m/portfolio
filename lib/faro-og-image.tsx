import { ImageResponse } from "next/og";

const FG = "#1A1A1A";
const MUTED = "#5C5C5C";
const ACCENT = "#0066FF";
const GOLD = "#B8923A";

const FONT_SEMI =
  "https://cdn.jsdelivr.net/npm/@fontsource/plus-jakarta-sans@5.2.5/files/plus-jakarta-sans-latin-600-normal.woff";
const FONT_EXTRA =
  "https://cdn.jsdelivr.net/npm/@fontsource/plus-jakarta-sans@5.2.5/files/plus-jakarta-sans-latin-800-normal.woff";

const pills = [
  "GA4 and GTM",
  "GoHighLevel",
  "Meta and Google",
  "Next.js",
] as const;

export async function createFaroOgImage() {
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
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 72% -8%, rgba(0, 102, 255, 0.07), transparent), radial-gradient(ellipse 45% 40% at 0% 58%, rgba(201, 169, 98, 0.09), transparent)",
          position: "relative",
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.045,
            display: "flex",
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-5%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(0,102,255,0.14) 0%, transparent 68%)",
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
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: MUTED,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            F·A·R·O· CONSULTANCY · PORTFOLIO CONTEXT
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: FG,
              lineHeight: 1.08,
              letterSpacing: "-0.032em",
              maxWidth: 1000,
              display: "flex",
            }}
          >
            José for F·A·R·O·
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: FG,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <span>Clarity before the</span>
            <span style={{ color: ACCENT, marginLeft: 14 }}>first pixel.</span>
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: MUTED,
              lineHeight: 1.45,
              maxWidth: 880,
              display: "flex",
            }}
          >
            Credentials, Meta and Google measurement, GoHighLevel experience,
            and adjacent proof from regulated work.
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
                  border: "1px solid rgba(26,26,26,0.12)",
                  background: "rgba(247,247,245,0.95)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: FG,
                  display: "flex",
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: 0,
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(26,26,26,0.38)",
                letterSpacing: "-0.02em",
                display: "flex",
              }}
            >
              jmcrea.vercel.app
            </span>
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: GOLD,
                marginLeft: 6,
                display: "flex",
              }}
            >
              /faro-consultancy
            </span>
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
