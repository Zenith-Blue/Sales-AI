"use client";

const imgDesign1 = "https://www.figma.com/api/mcp/asset/1403e723-17c9-4388-baef-15d2cf0873e8";
const imgBook1 = "https://www.figma.com/api/mcp/asset/9dcd0db5-cd05-4b1a-aa53-ecee66ccd8e8";
const imgBook2 = "https://www.figma.com/api/mcp/asset/163ed4d6-e124-4aa8-b15b-ba8ae3bdd773";
const imgBook3 = "https://www.figma.com/api/mcp/asset/bce994f6-91b9-4bdd-a280-18a9f6e2884d";
const imgBook4 = "https://www.figma.com/api/mcp/asset/468dcfc4-1e7a-4228-ae2b-1548ffc684a9";
const imgBook5 = "https://www.figma.com/api/mcp/asset/fff86b92-fec0-46bc-8c28-3e8b47a41a98";
const imgBook6 = "https://www.figma.com/api/mcp/asset/bd6ce381-c6dd-4cf7-b298-3a0a625e9687";
const imgBook7 = "https://www.figma.com/api/mcp/asset/e36bc909-d044-477c-afd2-1f5a4199ffaf";
const imgSpecialBadge = "https://www.figma.com/api/mcp/asset/d9d4aed2-a7d4-4a58-9e6d-09c48191de28";
const imgCta = "https://www.figma.com/api/mcp/asset/ad77811c-899c-47a0-8dde-6399144310fb";

const gifts = [
  { num: "01", sub: "AIに仕事を奪われそうで怖い人へ\nこの時代に必要とされる人間の強みがわかる", main: "AIに奪われない仕事の正体", image: imgBook1, large: true },
  { num: "02", sub: "今日からすぐ使える自己紹介がAIで1分で完成する", main: "AIで作る自己紹介シート", image: imgBook2 },
  { num: "03", sub: "話すのが苦手でも、自然と相手が動く会話のパターンが身につく", main: "無敵の営業心理学", image: imgBook3 },
  { num: "04", sub: "頑張っているのに収入が変わらない人へ AIを日常に取り入れると成果が変わる", main: "収入が変わるAI活用習慣", image: imgBook4 },
  { num: "05", sub: "未経験だから営業は無理だと思っている人へ 成果を出す人が持っている思考の違いがわかる", main: "結果が出る人の思考法", image: imgBook5 },
  { num: "06", sub: "営業って何をすればいいの？という人へ 全部まとめた教科書で、迷わず動けるように", main: "ゼロから始める営業の教科書", image: imgBook6 },
  { num: "07", sub: "聞くだけで相手が話し出す プロの質問パターンがそのまま使える", main: "質問テンプレートまとめ", image: imgBook7 },
];

function SmallGiftCard({ gift }: { gift: typeof gifts[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        boxShadow: "4px 4px 2px rgba(0,0,0,0.25)",
        position: "relative",
        padding: "12px 12px 12px 55px",
        minHeight: 91,
        overflow: "visible",
      }}
    >
      <div style={{ position: "absolute", top: -8, left: -7, width: 43, height: 43 }}>
        <img src={imgDesign1} alt="" style={{ width: "100%", height: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            textAlign: "center",
            color: "#4e1a05",
          }}
        >
          <p style={{ margin: 0, fontSize: 6, fontWeight: 700 }}>特典</p>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700 }}>{gift.num}</p>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#2e0808" }}>{gift.sub}</p>
      <div style={{ position: "relative", marginTop: 4 }}>
        <div style={{ position: "absolute", bottom: -2, left: 0, right: 40, height: 9, backgroundColor: "yellow" }} />
        <p style={{ position: "relative", margin: 0, fontSize: 20, fontWeight: 700, color: "#fe692c", textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
          {gift.main}
        </p>
      </div>
      <img src={gift.image} alt={gift.main} style={{ position: "absolute", right: -10, top: -8, height: 101, objectFit: "contain" }} />
    </div>
  );
}

export default function SecondCTA() {
  const large = gifts[0];

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #ff9a27, #fe3e3f)",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 765,
          margin: "0 auto",
          backgroundColor: "rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: 8,
        }}
      >
        {/* Large card */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            boxShadow: "8px 8px 4px rgba(0,0,0,0.25)",
            position: "relative",
            padding: "20px 20px 20px 100px",
            minHeight: 186,
            overflow: "visible",
            marginBottom: 20,
          }}
        >
          <div style={{ position: "absolute", top: -16, left: -3, width: 87, height: 87 }}>
            <img src={imgDesign1} alt="" style={{ width: "100%", height: "100%" }} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                textAlign: "center",
                color: "#4e1a05",
              }}
            >
              <p style={{ margin: 0, fontSize: 11, fontWeight: 700 }}>特典</p>
              <p style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>01</p>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 25, fontWeight: 700, color: "#2e0808", whiteSpace: "pre-line" }}>
            {large.sub}
          </p>
          <div style={{ position: "relative", marginTop: 8 }}>
            <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 19, backgroundColor: "yellow" }} />
            <p style={{ position: "relative", margin: 0, fontSize: 42, fontWeight: 700, color: "#fe692c", textShadow: "0px 8px 8px rgba(0,0,0,0.25)" }}>
              {large.main}
            </p>
          </div>
          <img src={large.image} alt={large.main} style={{ position: "absolute", right: -20, top: -34, height: 216, objectFit: "contain" }} />
        </div>

        {/* Grid of small cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {gifts.slice(1).map((g) => (
            <SmallGiftCard key={g.num} gift={g} />
          ))}
        </div>

        {/* Plus */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 45,
              height: 45,
              borderRadius: "50%",
              border: "3px solid #fe692c",
              backgroundColor: "#fff",
              boxShadow: "5px 5px 3px rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ fontSize: 32, color: "#fe692c", fontWeight: 700, lineHeight: 1 }}>+</span>
          </div>
        </div>

        {/* Special bonus */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "2.7px solid #fe413e",
            borderRadius: 5,
            padding: "20px 77px",
            position: "relative",
            textAlign: "center",
            boxShadow: "5px 5px 3px rgba(0,0,0,0.25)",
            marginBottom: 32,
          }}
        >
          <img
            src={imgSpecialBadge}
            alt="特別特典"
            style={{ position: "absolute", top: -27, left: 65, height: 74 }}
          />
          <div
            style={{
              backgroundColor: "#fe692c",
              borderRadius: 20,
              padding: "8px 50px",
              display: "inline-block",
              marginBottom: 8,
            }}
          >
            <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: 22 }}>先着5名様限定!</p>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 14, backgroundColor: "yellow" }} />
            <p style={{ position: "relative", margin: 0, fontSize: 31, fontWeight: 700, color: "#fe692c", textShadow: "0px 6px 6px rgba(0,0,0,0.25)" }}>
              メンターとの60分間 無料面談
            </p>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 700, color: "#2e0808" }}>
            できるか不安…どうしたらいいかわからない。
            <br />
            あなたの漠然とした悩みを、メンターと一緒に整理しましょう。
          </p>
        </div>

        {/* CTA */}
        <div id="line" style={{ textAlign: "center" }}>
          <a href="https://lin.ee/example" style={{ display: "inline-block", position: "relative" }}>
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
              先着5名限定 <span style={{ color: "#017f1d" }}>メンターとの60分間 無料面談</span>プレゼント
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
