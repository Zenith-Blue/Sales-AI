"use client";

const imgBg = "https://www.figma.com/api/mcp/asset/b112f95d-c626-487b-98b5-0dea41b7103d";
const imgHeading = "https://www.figma.com/api/mcp/asset/a4004c74-ab90-4ba9-bd6b-cd5a6e0c3e61";
const imgCase1 = "https://www.figma.com/api/mcp/asset/a0a2a180-8203-4f5c-9fc7-c7597d6d5008";
const imgCase2 = "https://www.figma.com/api/mcp/asset/3822881e-465b-463e-965d-dd81a6d9df75";
const imgCase3 = "https://www.figma.com/api/mcp/asset/9e474395-6e6f-4512-a731-c287f8b9934f";

interface Case {
  num: string;
  title: string[];
  age: string;
  body: string;
  highlight: string;
  image: string;
}

const cases: Case[] = [
  {
    num: "01",
    title: ["リモートワークで", "時間の自由を手に入れた"],
    age: "28歳・元専業主婦",
    body: "子育ての合間に自分のペースで仕事ができるようになりました。以前は「私には無理」と思っていたのに、",
    highlight: "今はリモートで自由に働けています。",
    image: imgCase1,
  },
  {
    num: "01",
    title: ["自信と自己肯定感が", "上がった"],
    age: "31歳・元コンビニスタッフ",
    body: "はじめは本当に不安でした。でも、メンターの方が丁寧に教えてくれて、",
    highlight: "自分でも営業ができるんだという自信がつきました。",
    image: imgCase2,
  },
  {
    num: "01",
    title: ["未経験から", "在宅ワークを実現"],
    age: "34歳・元配管工",
    body: "配管の仕事しかしてこなかったので、営業なんて自分には無縁だと思ってました。",
    highlight: "でも実践する内容が楽しくて、今ではリモートで仕事を受けれています。",
    image: imgCase3,
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 1238,
        overflow: "hidden",
        backgroundColor: "#fff7e8",
      }}
    >
      <img
        src={imgBg}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", opacity: 0.3 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 804,
          margin: "0 auto",
          padding: "49px 0",
        }}
      >
        {/* Heading image */}
        <img
          src={imgHeading}
          alt="受講生のリアルな変化をご紹介"
          style={{ width: 724, display: "block", margin: "0 auto 32px" }}
        />

        {/* Case cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                border: "2.5px solid #f66f00",
                borderRadius: 19,
                padding: "23px 29px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                boxShadow: "5px 5px 9px rgba(133,133,133,0.6)",
                position: "relative",
              }}
            >
              {/* CASE number badge */}
              <div
                style={{
                  backgroundColor: "#f66f00",
                  padding: "12px 5px",
                  color: "#fff",
                  textAlign: "center",
                  flexShrink: 0,
                  width: 68,
                }}
              >
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>CASE</p>
                <p style={{ margin: 0, fontSize: 35 }}>{c.num}</p>
              </div>

              {/* Text content */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 12 }}>
                  {c.title.map((t, j) => (
                    <p
                      key={j}
                      style={{
                        margin: 0,
                        fontSize: 25,
                        fontWeight: 700,
                        color: "#f66f00",
                        textShadow: "2.5px 2.5px 5px rgba(0,0,0,0.25)",
                        letterSpacing: 2.5,
                      }}
                    >
                      {t}
                    </p>
                  ))}
                </div>
                <p style={{ margin: 0, fontSize: 23, fontWeight: 700, color: "#4e2300", borderBottom: "2px solid #f66f00", paddingBottom: 8, marginBottom: 8 }}>
                  {c.age}
                </p>
                <p style={{ margin: 0, fontSize: 18, color: "#4e2300", lineHeight: "1.6" }}>
                  {c.body}
                  <span style={{ color: "#ff530c", fontWeight: 700 }}>{c.highlight}</span>
                </p>
              </div>

              {/* Photo */}
              <div
                style={{
                  width: 343,
                  height: 247,
                  border: "1.3px solid #fff",
                  borderRadius: 19,
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0px 5px 5px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={c.image}
                  alt={c.age}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
