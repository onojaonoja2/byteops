import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#1A2A3A",
          padding: 80,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 20,
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
                fontWeight: 800,
                color: "#1A2A3A",
              }}
            >
              B
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "white" }}>ByteOps</div>
              <div style={{ fontSize: 18, letterSpacing: 6, color: "#9FB3C8" }}>DIGITAL SYSTEMS</div>
            </div>
          </div>
          <div style={{ marginTop: 32, fontSize: 52, fontWeight: 800, color: "white", lineHeight: 1.1 }}>
            Simplifying Tech, Amplifying Impact.
          </div>
          <div style={{ marginTop: 16, fontSize: 26, color: "#FFAB00" }}>
            Training • AI Automation • Web & Apps • Abuja, Nigeria
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 130,
            background: "linear-gradient(135deg,#007BFF,#D600D6,#FFAB00)",
            opacity: 0.9,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
