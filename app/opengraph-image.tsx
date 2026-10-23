import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          color: "#e2e8f0",
          padding: "56px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.24), transparent 34%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.18), transparent 38%), radial-gradient(circle at 78% 20%, rgba(52,211,153,0.16), transparent 30%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "999px",
              background: "#34d399",
              boxShadow: "0 0 22px rgba(52,211,153,0.8)",
            }}
          />
          <div style={{ letterSpacing: 4, fontSize: 28, color: "#60a5fa", fontWeight: 700 }}>NEXTROIA</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1, maxWidth: 980 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>
            Solucoes Avancadas em Tecnologia e Infraestrutura
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1", lineHeight: 1.3 }}>
            Suporte tecnico, redes, automacao de processos e desenvolvimento para elevar estabilidade e eficiencia.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
          <div style={{ fontSize: 24, color: "#38bdf8" }}>nextroia@outlook.com</div>
          <div
            style={{
              borderRadius: 999,
              border: "1px solid rgba(96,165,250,0.45)",
              padding: "12px 24px",
              fontSize: 20,
              color: "#7dd3fc",
            }}
          >
            Infraestrutura | Automacao | APIs
          </div>
        </div>
      </div>
    ),
    size
  );
}
