"use client";

const imgBg = "https://www.figma.com/api/mcp/asset/00c7a2c9-02be-433e-9697-f63b75ed24f6";
const imgBooks = "https://www.figma.com/api/mcp/asset/88fc0619-e5a7-4932-af7a-64ba61d6d91b";

export default function GiftBanner() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 446,
        overflow: "hidden",
      }}
    >
      <img
        src={imgBg}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingTop: 28,
          paddingRight: 264,
        }}
      >
        {/* Pill label */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 42,
            padding: "10px 28px",
            marginBottom: 12,
          }}
        >
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#2a2827", letterSpacing: 0.5 }}>
            まずはあなたが今感じている<span style={{ color: "#ff530c" }}>不安を整理</span>してみましょう
          </p>
        </div>

        {/* Headline */}
        <p style={{ margin: 0, fontSize: 25, fontWeight: 700, color: "#feffc1", letterSpacing: 1.5 }}>
          LINEお友だち登録者限定
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>
            <span style={{ fontSize: 34 }}>今の</span>
            <span style={{ fontSize: 40 }}>自分の課題</span>
            <span style={{ fontSize: 34 }}>がわかる!</span>
          </p>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 48,
                background: "linear-gradient(to bottom, yellow, #ea8601)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              7
            </p>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 34,
                background: "linear-gradient(to bottom, yellow, #e77400)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              大特典
            </p>
          </div>
          <p style={{ margin: 0, fontSize: 34, fontWeight: 700, color: "#fff" }}>プレゼント</p>
        </div>

        {/* Books image */}
        <img
          src={imgBooks}
          alt="7大特典"
          style={{ height: 245, objectFit: "contain", marginTop: 8 }}
        />
      </div>
    </section>
  );
}
