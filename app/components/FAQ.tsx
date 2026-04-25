"use client";

const imgCta = "https://www.figma.com/api/mcp/asset/87bb1fc8-11d2-4ee2-8e8f-704dda31caaa";

const faqs = [
  {
    q: "未経験でも大丈夫ですか？",
    a: "はい、まったく問題ありません。チャプター0のマインドセットから始まり、専任メンターが1対1でサポートするので、営業未経験・社会人経験が少ない方でもしっかり学べる環境です。",
  },
  {
    q: "どのくらいの期間がかかりますか？",
    a: "最短2ヶ月で卒業が可能です。カリキュラムはチャプター0～5の全18項目で構成されており、オンラインMTGは8～9回程度。卒業後は案件着手に進みます。",
  },
  {
    q: "副業・在宅でもできますか？",
    a: "はい、できます。リモート案件もございますので、副業としてスタートしたい方・在宅で働きたい方にも対応しています。",
  },
  {
    q: "卒業後、本当に仕事はもらえますか？",
    a: "案件保証があります。卒業後、テストとロールプレイ（2～3回）をクリアした後、案件紹介まで責任を持ってサポートします。「学んで終わり」ではなく、稼げるところまで一緒に走ります。",
  },
  {
    q: "LINE登録の特典は本当に無料ですか？",
    a: "はい、完全無料です。LINE登録するだけで7つの特典＋無料個別相談がプレゼントされます。費用は一切かかりません。",
  },
  {
    q: "個別相談では何を話せばいいですか？？",
    a: "現在のお仕事状況や悩み、どんな働き方を実現したいかなど、気軽にお話しください。スクールの詳細説明や、あなたに合ったプランのご提案もさせていただきます。",
  },
];

export default function FAQ() {
  return (
    <section
      style={{
        backgroundColor: "#ffebe1",
        padding: "60px 0 80px",
        width: "100%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: 56,
          fontWeight: 700,
          color: "#fe692c",
          textShadow: "2.2px 2.2px 2.2px #c8c8c8",
          margin: "0 0 40px",
        }}
      >
        よくある質問
      </h2>

      <div style={{ maxWidth: 629, margin: "0 auto" }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #f57f00",
              borderRadius: 5,
              overflow: "hidden",
              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              marginBottom: 14,
            }}
          >
            {/* Question */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "16px 16px 0",
                borderBottom: "1px solid #f57f00",
                paddingBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#fe692c",
                  marginRight: 12,
                  flexShrink: 0,
                  fontFamily: "DIN 2014, serif",
                  lineHeight: 1,
                  marginTop: 2,
                }}
              >
                Q.
              </span>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 500, color: "#000", letterSpacing: 1.1, lineHeight: "1.6" }}>
                {faq.q}
              </p>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  color: "#f57f00",
                  flexShrink: 0,
                  marginTop: 4,
                }}
              >
                ▲
              </span>
            </div>

            {/* Answer */}
            <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 16px 16px" }}>
              <span
                style={{
                  fontSize: 25,
                  fontWeight: 700,
                  color: "#ffac11",
                  marginRight: 12,
                  flexShrink: 0,
                  fontFamily: "DIN 2014, serif",
                  lineHeight: 1,
                  marginTop: 2,
                }}
              >
                A.
              </span>
              <p style={{ margin: 0, fontSize: 13, color: "#3e3e3e", letterSpacing: 0.9, lineHeight: "1.8" }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="#line" style={{ display: "inline-block", position: "relative" }}>
            <img src={imgCta} alt="無料で豪華特典を受け取る" style={{ width: 431 }} />
            <p
              style={{
                position: "absolute",
                bottom: 12,
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: 14,
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
