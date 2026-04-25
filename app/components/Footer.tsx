"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#242424",
        height: 105,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 1.3, height: 13, backgroundColor: "#fff" }} />
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontSize: 13, fontFamily: "sans-serif" }}
          >
            プライバシーポリシー
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 1.3, height: 13, backgroundColor: "#fff" }} />
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontSize: 13, fontFamily: "sans-serif" }}
          >
            特定商取引法
          </a>
        </div>
        <div style={{ width: 1.3, height: 13, backgroundColor: "#fff" }} />
      </div>
      <p
        style={{
          margin: 0,
          color: "rgba(255,255,255,0.4)",
          fontSize: 12,
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        ©sales AI . All rignt reserved.
      </p>
    </footer>
  );
}
