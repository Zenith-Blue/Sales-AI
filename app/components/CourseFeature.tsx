"use client";

const imgBg = "https://www.figma.com/api/mcp/asset/ba0aa70e-f4fa-4c27-b661-6aeaed9999c9";
const imgCurriculumPhoto = "https://www.figma.com/api/mcp/asset/f9ad6796-dde8-4db1-a181-f8eb778053cb";

export default function CourseFeature() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 921,
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
          maxWidth: 623,
          margin: "0 auto",
          paddingTop: 106,
          paddingBottom: 60,
          textAlign: "center",
        }}
      >
        {/* Headline */}
        <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>
          <span style={{ fontSize: 50 }}>sales AI</span>
          <span style={{ fontSize: 35 }}>は安心の</span>
          <span style={{ fontSize: 49, color: "#ffff80" }}>案件保証</span>
          <span style={{ fontSize: 35 }}>で</span>
        </p>

        {/* White box highlight */}
        <div style={{ backgroundColor: "#fff", padding: "8px 16px", margin: "12px 0" }}>
          <p style={{ margin: 0, fontSize: 47, fontWeight: 700, color: "#fe692c" }}>
            最短 2ヶ月で案件獲得!
          </p>
        </div>

        <p style={{ margin: 0, fontWeight: 700 }}>
          <span style={{ fontSize: 36, color: "#ffff80" }}>収入に直結</span>
          <span style={{ fontSize: 29, color: "#ffff80" }}>しやすい</span>
          <span style={{ fontSize: 36, color: "#fff" }}>営業スクール</span>
          <span style={{ fontSize: 29, color: "#fff" }}>です</span>
        </p>

        {/* Info box */}
        <div
          style={{
            marginTop: 36,
            backgroundColor: "#fff7e8",
            border: "3px solid #fe692c",
            borderRadius: 15,
            padding: "28px 60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fe692c",
              display: "inline-block",
              padding: "6px 8px",
              borderRadius: 5,
              marginBottom: 16,
            }}
          >
            <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: 25 }}>
              営業スキル×マーケティング×AI活用
            </p>
          </div>

          <img
            src={imgCurriculumPhoto}
            alt="カリキュラム"
            style={{ width: 422, height: 280, objectFit: "cover", display: "block", margin: "0 auto 16px" }}
          />

          <p style={{ margin: 0, fontWeight: 700, color: "#4e2300", fontSize: 18, lineHeight: "1.6" }}>
            3つを同時に学べる、全18項目の充実カリキュラム。
            <br />
            200ページ超の教科書 ＋ 専任メンターが1対1でサポート。
            <br />
            最短2ヶ月で卒業し、案件着手へ進めます。
          </p>
        </div>
      </div>
    </section>
  );
}
