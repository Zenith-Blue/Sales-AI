"use client";

const imgBg = "https://www.figma.com/api/mcp/asset/257532a0-5195-491e-a3ca-faa8ef7eba4b";
const imgDesign1 = "https://www.figma.com/api/mcp/asset/ec8a73d3-b281-4ccd-a029-52e123ddae7c";
const imgBook1 = "https://www.figma.com/api/mcp/asset/ca13d6de-8655-48b6-b3ef-fde964e6c0db";
const imgBook2 = "https://www.figma.com/api/mcp/asset/3e174869-2ce1-4f85-83a3-5f609e58b6f5";
const imgBook3 = "https://www.figma.com/api/mcp/asset/68b5636a-515a-4f9d-bd56-e7dd8073863e";
const imgBook4 = "https://www.figma.com/api/mcp/asset/a986b28f-2dfe-4964-8486-86dc64cf070d";
const imgBook5 = "https://www.figma.com/api/mcp/asset/9beaf537-9a63-4a9b-a360-c269441c39d6";
const imgBook6 = "https://www.figma.com/api/mcp/asset/0a8de0df-8147-46b4-9934-aaebe5dc0983";
const imgBook7 = "https://www.figma.com/api/mcp/asset/6729b699-6ded-42e1-8c1d-6e7aca5fc58b";
const imgSpecialBadge = "https://www.figma.com/api/mcp/asset/90027b03-c771-4d4d-ad03-3e9bfef6084b";
const imgCta = "https://www.figma.com/api/mcp/asset/3ddaa81b-7e90-4f41-a504-12de48c4968f";

interface GiftItem {
  num: string;
  sub: string;
  main: string;
  title: string;
  image: string;
}

const gifts: GiftItem[] = [
  {
    num: "01",
    sub: "AIに仕事を奪われそうで怖い人へ\nこの時代に必要とされる人間の強みがわかる",
    main: "AIに奪われない仕事の正体",
    title: "AIに奪われない仕事の正体",
    image: imgBook1,
  },
  {
    num: "02",
    sub: "今日からすぐ使える自己紹介が\nAIで1分で完成する",
    main: "AIで作る自己紹介シート",
    title: "AIで作る自己紹介シート",
    image: imgBook2,
  },
  {
    num: "03",
    sub: "話すのが苦手でも、自然と相手が動く\n会話のパターンが身につく",
    main: "無敵の営業心理学",
    title: "無敵の営業心理学",
    image: imgBook3,
  },
  {
    num: "04",
    sub: "頑張っているのに収入が変わらない人へ\nAIを日常に取り入れると成果が変わる",
    main: "収入が変わるAI活用習慣",
    title: "収入が変わるAI活用習慣",
    image: imgBook4,
  },
  {
    num: "05",
    sub: "未経験だから営業は無理だと思っている人へ\n成果を出す人が持っている思考の違いがわかる",
    main: "結果が出る人の思考法",
    title: "結果が出る人の思考法",
    image: imgBook5,
  },
  {
    num: "06",
    sub: "営業って何をすればいいの？という人へ\n全部まとめた教科書で、迷わず動けるように",
    main: "ゼロから始める営業の教科書",
    title: "ゼロから始める営業の教科書",
    image: imgBook6,
  },
  {
    num: "07",
    sub: "聞くだけで相手が話し出す\nプロの質問パターンがそのまま使える",
    main: "質問テンプレートまとめ",
    title: "質問テンプレートまとめ",
    image: imgBook7,
  },
];

function GiftCard({ item, large = false }: { item: GiftItem; large?: boolean }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        boxShadow: "8px 8px 4px rgba(0,0,0,0.25)",
        position: "relative",
        padding: large ? "20px 20px 20px 100px" : "12px 12px 12px 55px",
        minHeight: large ? 186 : 91,
        overflow: "visible",
      }}
    >
      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: large ? -16 : -8,
          left: large ? -3 : -7,
          width: large ? 87 : 43,
          height: large ? 87 : 43,
        }}
      >
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
          <p style={{ margin: 0, fontSize: large ? 11 : 6, fontWeight: 700 }}>特典</p>
          <p style={{ margin: 0, fontSize: large ? 22 : 11, fontWeight: 700 }}>{item.num}</p>
        </div>
      </div>

      {/* Text content */}
      <div style={{ position: "relative" }}>
        <p
          style={{
            margin: 0,
            fontSize: large ? 20 : 12,
            fontWeight: 700,
            color: "#2e0808",
            whiteSpace: "pre-line",
          }}
        >
          {item.sub}
        </p>
        <div style={{ position: "relative", marginTop: 4 }}>
          <div
            style={{
              position: "absolute",
              bottom: -2,
              left: 0,
              right: 0,
              height: large ? 19 : 9,
              backgroundColor: "yellow",
            }}
          />
          <p
            style={{
              position: "relative",
              margin: 0,
              fontSize: large ? 40 : 20,
              fontWeight: 700,
              color: "#fe692c",
              textShadow: large ? "0px 8px 8px rgba(0,0,0,0.25)" : "0px 4px 4px rgba(0,0,0,0.25)",
            }}
          >
            {item.main}
          </p>
        </div>
      </div>

      {/* Book image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          position: "absolute",
          right: large ? -20 : -10,
          top: large ? -34 : -8,
          height: large ? 216 : 101,
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default function GiftList() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 1109,
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
          maxWidth: 760,
          margin: "0 auto",
          paddingTop: 68,
          paddingBottom: 60,
        }}
      >
        {/* Gift 01 - large */}
        <GiftCard item={gifts[0]} large />

        {/* Gifts 02-07 - grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 20,
          }}
        >
          {gifts.slice(1).map((gift) => (
            <GiftCard key={gift.num} item={gift} />
          ))}
        </div>

        {/* Plus sign */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
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
            marginTop: 20,
            backgroundColor: "#fff",
            border: "2.7px solid #fe413e",
            borderRadius: 5,
            boxShadow: "5px 5px 3px rgba(0,0,0,0.25)",
            padding: "20px 30px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={imgSpecialBadge}
            alt="特別特典"
            style={{ position: "absolute", top: -27, left: 65, height: 85 }}
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
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 14,
                backgroundColor: "yellow",
              }}
            />
            <p
              style={{
                position: "relative",
                margin: 0,
                fontSize: 32,
                fontWeight: 700,
                color: "#fe692c",
                textShadow: "0px 6px 6px rgba(0,0,0,0.25)",
              }}
            >
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
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="#line" style={{ display: "inline-block", position: "relative" }}>
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
