"use client";

export default function Worries() {
  const worries = [
    { top: "スキルを身につけて稼ぎたいけど", bottom: "何から始めればいいかわからない" },
    { top: "以前もスクールに通ったのに", bottom: "生活は何も変わらなかった" },
    { top: "子育て・家事の合間に", bottom: "自分の時間で自由に稼ぎたい" },
    { top: "会社に縛られず", bottom: "リモートワークで働きたい" },
    { top: "向いてるかわからないけど", bottom: "営業に挑戦してみたい" },
  ];

  const highlightWords: Record<string, string> = {
    "何から始めればいいかわからない": "わからない",
    "生活は何も変わらなかった": "変わらなかった",
    "自分の時間で自由に稼ぎたい": "自由に稼ぎたい",
    "リモートワークで働きたい": "リモートワーク",
    "営業に挑戦してみたい": "営業に挑戦",
  };

  function renderHighlight(text: string, highlight: string) {
    const idx = text.indexOf(highlight);
    if (idx === -1) return <span style={{ color: "yellow" }}>{text}</span>;
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ color: "yellow" }}>{highlight}</span>
        {text.slice(idx + highlight.length)}
      </>
    );
  }

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #6c6c6c, #9a9ba0)",
        width: "100%",
        position: "relative",
        padding: "70px 0 100px",
      }}
    >
      {/* Top gradient bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 15,
          background: "linear-gradient(109deg, #fe413e 0%, #fe7427 44%, #ffbe08 87%)",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          fontSize: 56,
          fontWeight: 700,
          color: "#fff",
          textShadow: "0px 6px 12px rgba(0,0,0,0.5)",
          margin: "0 0 48px",
        }}
      >
        \こんな<span style={{ fontSize: 64 }}>お悩み</span>、ありませんか？/
      </h2>

      <div
        style={{
          maxWidth: 1047,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Center item (full width) */}
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#1e1f25",
              borderRadius: 6,
              padding: "20px 40px",
              textAlign: "center",
              maxWidth: 464,
            }}
          >
            <p style={{ margin: 0, color: "#fff", fontSize: 20, fontWeight: 700 }}>
              {worries[0].top}
            </p>
            <p style={{ margin: "4px 0 0", fontWeight: 700, fontSize: 24 }}>
              {renderHighlight(worries[0].bottom, highlightWords[worries[0].bottom])}
            </p>
          </div>
        </div>

        {/* 4 items in 2x2 grid */}
        {worries.slice(1).map((w, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#1e1f25",
              borderRadius: 6,
              padding: "20px 40px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, color: "#fff", fontSize: 20, fontWeight: 700 }}>
              {w.top}
            </p>
            <p style={{ margin: "4px 0 0", fontWeight: 700, fontSize: 24 }}>
              {renderHighlight(w.bottom, highlightWords[w.bottom])}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
