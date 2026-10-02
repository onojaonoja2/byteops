import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1A2A3A",
          padding: 80,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800, color: "white" }}>ByteOps Digital Systems</div>
        <div style={{ marginTop: 12, fontSize: 30, color: "#FFAB00" }}>Tech Training & Digital Solutions — Abuja, Nigeria</div>
        <div style={{ marginTop: 12, fontSize: 22, color: "#9FB3C8" }}>byteops.digital • +234 701 909 1481</div>
      </div>
    ),
    { ...size }
  );
}
