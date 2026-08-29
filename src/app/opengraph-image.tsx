import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3EFE8",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0B1C33",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 600, color: "#0B1C33" }}>
              Sairam
            </span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#5A6878",
              }}
            >
              Technologies
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              color: "#0B1C33",
              maxWidth: 900,
            }}
          >
            Software for the people you protect.
          </div>
          <div style={{ marginTop: 24, fontSize: 24, color: "#5A6878" }}>
            Family-Rx Health Box · School Bus Notifier
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
