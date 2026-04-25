"use client";

const imgPhoto = "https://www.figma.com/api/mcp/asset/9b817ed9-7374-48ef-b57d-b859fcddc7d8";
const imgCta = "https://www.figma.com/api/mcp/asset/624e27b1-0a68-4202-b5c3-2524078a32a9";

export default function Reassurance() {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #ff9a27, #fe3e3f)",
        padding: "48px 189px",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px 155px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 19,
            maxWidth: 592,
          }}
        >
          {/* Headline */}
          <p style={{ margin: 0, fontSize: 31, fontWeight: 700, color: "#fe692c", textShadow: "3.8px 3.8px 3.8px #c8c8c8", textAlign: "center" }}>
            自分もできるかな…と思ったあなた
          </p>
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                right: "10%",
                height: 34,
                backgroundColor: "#edff65",
              }}
            />
            <p
              style={{
                position: "relative",
                margin: 0,
                fontSize: 44,
                fontWeight: 700,
                color: "#ff530c",
                textShadow: "3.8px 3.8px 3.8px #c8c8c8",
              }}
            >
              ご安心ください!
            </p>
          </div>

          {/* Photo */}
          <div
            style={{
              border: "3.2px solid #fe413e",
              boxShadow: "0px 6px 6px rgba(0,0,0,0.25)",
              overflow: "hidden",
              width: 444,
              height: 296,
            }}
          >
            <img src={imgPhoto} alt="受講生" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Sub-headline */}
          <p style={{ margin: 0, fontSize: 31, fontWeight: 700, color: "#fe692c", textShadow: "3.8px 3.8px 3.8px #c8c8c8", textAlign: "center" }}>
            生徒のほとんどが<span style={{ fontSize: 38, color: "#ff530c" }}>営業未経験</span>です!
          </p>

          {/* CTA */}
          <a href="#line" style={{ display: "block", position: "relative", width: 449 }}>
            <img src={imgCta} alt="無料で豪華特典を受け取る" style={{ width: 449 }} />
            <p
              style={{
                position: "absolute",
                bottom: 12,
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: 15,
                fontWeight: 700,
                color: "#11ad34",
                margin: 0,
                textShadow: "0px 5px 5px rgba(0,0,0,0.25)",
              }}
            >
              先着5名限定 <span style={{ color: "#017f1d" }}>メンターとの60分間 無料面談</span>プレゼント
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
