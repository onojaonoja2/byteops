import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A2A3A",
          borderRadius: 40,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 84, color: "white", fontWeight: 800 }}>☁</div>
          <div style={{ display: "flex", gap: 6, marginTop: -18 }}>
            <div style={{ width: 34, height: 8, background: "white", borderRadius: 4 }} />
            <div style={{ width: 12, height: 12, background: "#007BFF", borderRadius: 3 }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
