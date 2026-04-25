"use client";

const imgFv = "https://www.figma.com/api/mcp/asset/53ecb790-a9af-4ffe-b59a-8c214c9afc78";
const imgBadges = "https://www.figma.com/api/mcp/asset/536bbec8-c496-41d1-bd0d-076325bfe2f1";
const imgPerson = "https://www.figma.com/api/mcp/asset/2ddbd40e-eb93-4d7f-a417-e4bf7ae70d0d";
const imgCta = "https://www.figma.com/api/mcp/asset/3ddaa81b-7e90-4f41-a504-12de48c4968f";
const imgCheckIcon = "https://www.figma.com/api/mcp/asset/a2e1c5e5-a261-4737-be61-b69cb4e5ecc2";

export default function FV() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "775px",
        overflow: "hidden",
        backgroundColor: "#e8e8e8",
      }}
    >
      {/* Background image */}
      <img
        src={imgFv}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Right side - person with book/card */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: -42,
          width: "715px",
          height: "923px",
        }}
      >
        <img
          src={imgPerson}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Overlay text on person side */}
        <div
          style={{
            position: "absolute",
            right: 84,
            bottom: 106,
            textAlign: "center",
            textShadow: "0px 0px 9.5px #d02d22, 0px 7.6px 7.6px #d5534a",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          <p style={{ fontSize: 38, margin: 0, background: "linear-gradient(to right, #e7ff34, #fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            卒業後の案件保証で
          </p>
          <p style={{ fontSize: 42, margin: 0, background: "linear-gradient(to right, #e7ff34, #fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            確実に収入直結させる
          </p>
        </div>
      </div>

      {/* Left content */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 433,
          top: 29,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* Worry list with gradient background */}
        <div
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,1) 20%, rgba(255,255,255,0))",
            paddingLeft: 60,
            paddingRight: 166,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          {[
            "営業なんて一度もやったことない…",
            "スクールで学んでも、案件が取れるか不安",
            "稼げるようになりたい、失敗したくない",
          ].map((text, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <img src={imgCheckIcon} alt="" style={{ width: 50, height: 50, flexShrink: 0 }} />
              <p
                style={{
                  margin: 0,
                  fontSize: 23,
                  fontWeight: 700,
                  color: "#111",
                  textShadow: "0px 2px 3px white, 0px 2px 2px #fff8f8",
                  letterSpacing: 1,
                  textDecoration: "line-through",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <div
            style={{
              backgroundColor: "#151515",
              padding: "10px 25px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 50,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              未経験から
              <span
                style={{
                  background: "linear-gradient(to right, #fe3e3f, #ffd000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                自由に稼げる営業力
              </span>
              を
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#151515",
              padding: "10px 26px",
              alignSelf: "flex-start",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 50,
                color: "#fff",
                letterSpacing: 2,
              }}
            >
              身につける唯一のスクール
            </p>
          </div>
        </div>

        {/* Badge image */}
        <div style={{ paddingLeft: 30, paddingTop: 10 }}>
          <img
            src={imgBadges}
            alt="最短2ヶ月で卒業可能・18項目充実カリキュラム・200P超専用教科書"
            style={{ height: 172, objectFit: "contain" }}
          />
        </div>

        {/* CTA Button */}
        <div style={{ paddingLeft: 124, paddingTop: 8 }}>
          <a href="#line" style={{ display: "block", position: "relative", width: 508 }}>
            <img src={imgCta} alt="無料で豪華特典を受け取る" style={{ width: 508 }} />
            <p
              style={{
                position: "absolute",
                bottom: 12,
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: 16,
                fontWeight: 700,
                color: "#11ad34",
                margin: 0,
                textShadow: "0px 6px 6px rgba(0,0,0,0.25)",
              }}
            >
              先着5名限定{" "}
              <span style={{ color: "#017f1d" }}>メンターとの60分間 無料面談</span>
              プレゼント
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
