"use client";

const imgBg = "https://www.figma.com/api/mcp/asset/a25f7164-5633-4c20-954f-e29ec1159e07";
const imgReason1 = "https://www.figma.com/api/mcp/asset/f770a5d7-23e9-4355-a689-dbdedd26b298";
const imgReason2 = "https://www.figma.com/api/mcp/asset/5356cb70-e88b-4701-8137-bf809785a32e";
const imgReason3 = "https://www.figma.com/api/mcp/asset/9fbe4e61-8f87-44fb-969f-ee168d26fb59";
const imgReason4 = "https://www.figma.com/api/mcp/asset/b302f170-d56a-4926-b751-eb80c0f08bb6";
const imgLifeChange1 = "https://www.figma.com/api/mcp/asset/995f0913-8a5f-4df4-b92a-47fc95d9885a";
const imgLifeChange2 = "https://www.figma.com/api/mcp/asset/686c8d9a-0a2a-4bfd-952f-2e7498d0d737";
const imgLifeChange3 = "https://www.figma.com/api/mcp/asset/8a44de6c-ea57-48e2-b935-0222a069a6d5";
const imgLifeChange4 = "https://www.figma.com/api/mcp/asset/2ac3248c-30de-4b3d-b67e-997628db0103";
const imgCurriculumBg = "https://www.figma.com/api/mcp/asset/3c0321aa-47be-4af8-a387-85be2ccfca38";
const imgComparison = "https://www.figma.com/api/mcp/asset/5bfc7286-bcb7-4589-b636-661acbb66aa0";
const imgSafetyIcon1 = "https://www.figma.com/api/mcp/asset/90027b03-c771-4d4d-ad03-3e9bfef6084b";
const imgSafetyIcon2 = "https://www.figma.com/api/mcp/asset/fbe94179-43a6-46c9-8e6b-b998c5ff14a6";
const imgSafetyIcon3 = "https://www.figma.com/api/mcp/asset/29948a1c-8854-44b0-8609-443c33f2bcb6";

const chapters = [
  { num: "01", color: "#ffbf1c", name: "営業マインドセット", desc: "稼ぐための考え方・土台作り。未経験でも最短で成果を出す思考を養います。" },
  { num: "02", color: "#fbb104", name: "商品理解・マーケティング基礎", desc: "「何を売るか」を深く理解し、集客の仕組みを学びます。" },
  { num: "03", color: "#ff9e41", name: "インサイドセールス（アプローチ）", desc: "見込み顧客へのアプローチ・初期接触の方法とトークスクリプトを習得。" },
  { num: "04", color: "#ff7d00", name: "商談・ヒアリングスキル", desc: "顧客の本音を引き出す質問技術と、相手の心理を動かすヒアリング術。" },
  { num: "05", color: "#ff5a2d", name: "フィールドセールス・高単価商材", desc: "高単価商材の扱い方と、フィールドセールスで成約率を上げるノウハウ。" },
  { num: "06", color: "#ff1500", name: "クロージング＆AI活用", desc: "確実に決める締めのトーク術と、AIを使って効率を爆上げする実践スキル。" },
  { num: "07", color: "#d00000", name: "卒業 → 案件着手へ", desc: "実践形式のロールプレイを経て卒業。卒業後すぐに案件紹介・着手に進みます。" },
];

const reasons = [
  { icon: imgReason1, title: "営業力は収入に直結するスキル", desc: "身につけた瞬間から収入に直結。正しく学べば、誰でも成果が出ます。" },
  { icon: imgReason2, title: "どんな仕事にも使える", desc: "転職・副業・起業、どこでも使える。一度身につければ、一生積み上がります。", titleHighlight: "どんな仕事にも" },
  { icon: imgReason3, title: "需要は増え続けている", desc: "AIが普及するほど、人が人を動かす力の価値は上がり続けます。", titleHighlight: "需要は増え" },
];

const lifeChanges = [
  { icon: imgLifeChange1, title: "どこでも働ける", desc: "カフェでも、自宅でも。\nリモートで仕事ができる生活へ。" },
  { icon: imgLifeChange2, title: "自信が生まれる", desc: "「自分でも稼げた」という体験が、毎日のマインドを変えます。" },
  { icon: imgLifeChange3, title: "会社への依存が消える", desc: "「辞めたくても辞められない」状況から解放され、選択肢が広がります。" },
  { icon: imgLifeChange4, title: "AIを味方にできる", desc: "AIに仕事を奪われる側でなく、AIを使いこなす側の人間になれます。" },
];

const safetyPoints = [
  { icon: imgSafetyIcon1, color: "#fe982c", title: "安心の案件保証", desc: "卒業後の案件紹介まで責任を持ってサポート。「学んでも仕事がない」という不安をゼロにします。" },
  { icon: imgSafetyIcon2, color: "#fe692c", title: "リモート案件あり", desc: "リモート案件もご用意。通勤なし、場所を選ばず自分のペースで働けます。" },
  { icon: imgSafetyIcon3, color: "#e60012", title: "専任メンターが1対1でサポート", desc: "専任メンターが読み合わせからフィードバックまで1対1でサポート。未経験でも迷わず進めます。" },
];

export default function WhySalesSkill() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={imgBg}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ===== Part 1: Why sales now? ===== */}
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "41px 0 60px",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1286,
              margin: "0 auto",
              padding: "0 286px",
            }}
          >
            <img
              src={imgCurriculumBg}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", opacity: 0.3 }}
            />
            {/* Main title */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ margin: 0, textAlign: "center", fontWeight: 700 }}>
                <span style={{ fontSize: 53, color: "#fff", textShadow: "0px 9px 9px rgba(0,0,0,0.25)" }}>なぜ今こそ</span>
                <span style={{ fontSize: 49, color: "yellow", textShadow: "0px 9px 9px rgba(0,0,0,0.25)" }}>「営業力」</span>
                <span style={{ fontSize: 53, color: "#fff", textShadow: "0px 9px 9px rgba(0,0,0,0.25)" }}>なのか?</span>
              </p>

              <div style={{ maxWidth: 609, margin: "60px auto 0" }}>
                {/* AI can't replace human connection */}
                <div
                  style={{
                    backgroundColor: "#2a2827",
                    border: "3.6px solid #fe413e",
                    borderRadius: 18,
                    padding: "31px 73px",
                    boxShadow: "0px 7px 7px rgba(0,0,0,0.25)",
                    marginBottom: 18,
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 700, color: "#fff", fontSize: 29, lineHeight: 1.6 }}>
                    AIが得意なのは作業です
                    <br />
                    <span style={{ color: "yellow" }}>人が人を動かす力</span>は
                    <br />
                    AIに真似できません
                  </p>
                  <p style={{ margin: "16px 0 0", color: "#fff", fontSize: 18, lineHeight: "1.6" }}>
                    決まった作業はAIが肩代わりする時代。でも「あなたから買いたい」と思わせる力だけは、人間にしか持てません。
                  </p>
                </div>

                {/* Plus */}
                <div style={{ textAlign: "center", marginBottom: 18 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "2.7px solid #535353",
                      backgroundColor: "#fff",
                    }}
                  >
                    <span style={{ fontSize: 32, color: "#535353", fontWeight: 700, lineHeight: 1 }}>+</span>
                  </div>
                </div>

                {/* Headline highlight boxes */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ backgroundColor: "#fff", boxShadow: "0px 8px 4px rgba(0,0,0,0.25)", padding: "11px 33px", display: "inline-block", marginBottom: 8 }}>
                    <span style={{ fontSize: 49, fontWeight: 700, color: "#e60012" }}>営業力</span>
                    <span style={{ fontSize: 37, fontWeight: 700, color: "#3d3d3d" }}>は</span>
                    <span style={{ fontSize: 49, fontWeight: 700, color: "#3d3d3d" }}>AI時代</span>
                    <span style={{ fontSize: 37, fontWeight: 700, color: "#3d3d3d" }}>に</span>
                    <span style={{ fontSize: 49, fontWeight: 700, color: "#3d3d3d" }}>唯一</span>
                  </div>
                  <div style={{ backgroundColor: "#fff", boxShadow: "0px 8px 4px rgba(0,0,0,0.25)", padding: "10px 35px", display: "inline-block", marginLeft: 49 }}>
                    <span style={{ fontSize: 49, fontWeight: 700, color: "#e60012" }}>奪われないスキル</span>
                    <span style={{ fontSize: 37, fontWeight: 700, color: "#3d3d3d" }}>です</span>
                  </div>
                </div>

                <p style={{ color: "#fff", fontSize: 28, fontWeight: 700, textAlign: "center", lineHeight: 1.7, textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
                  自分の仕事がAIに取られる、
                  <br />
                  ピンとこないかもしれません。
                  <br />
                  でも、こう考えてみてください。
                </p>

                {/* 3 reasons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
                  {reasons.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "#fff7e8",
                        border: "3.6px solid #fe692c",
                        borderRadius: 18,
                        padding: "8px 18px",
                        display: "flex",
                        gap: 17,
                        alignItems: "center",
                        minHeight: 148,
                      }}
                    >
                      <img src={r.icon} alt="" style={{ width: 118, height: 118, flexShrink: 0 }} />
                      <div>
                        <p style={{ margin: "0 0 4px", fontSize: 29, fontWeight: 700, color: "#2a2827" }}>
                          {r.titleHighlight ? (
                            <>
                              <span style={{ color: "#e60012" }}>{r.titleHighlight}</span>
                              {r.title.replace(r.titleHighlight, "")}
                            </>
                          ) : (
                            <>
                              {r.title.includes("収入に直結") ? (
                                <>営業力は<span style={{ color: "#e60012" }}>収入に直結</span>するスキル</>
                              ) : r.title}
                            </>
                          )}
                        </p>
                        <p style={{ margin: 0, fontSize: 21, color: "#000", lineHeight: 1.5 }}>{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Part 2: If you had sales skills ===== */}
        <div style={{ backgroundColor: "#fffbf5", padding: "60px 0" }}>
          <div style={{ maxWidth: 692, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 8px", fontSize: 52, fontWeight: 700, color: "#570000" }}>もしあなたに</p>
            <p style={{ margin: "0 0 8px", fontSize: 73, fontWeight: 700, color: "#fe692c", textShadow: "5px 5px 5px #c8c8c8" }}>営業力があれば</p>
            <p style={{ margin: "0 0 32px", fontSize: 52, fontWeight: 700, color: "#570000" }}>生活はこんなに変わる</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 19 }}>
              {lifeChanges.map((lc, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#fff",
                    border: "3.4px solid #fe692c",
                    borderRadius: 17,
                    padding: "22px 26px 22px 12px",
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    boxShadow: "0px 7px 3px rgba(0,0,0,0.25)",
                    textAlign: "left",
                  }}
                >
                  <img src={lc.icon} alt="" style={{ width: 113, height: 113, flexShrink: 0 }} />
                  <div>
                    <div style={{ position: "relative", marginBottom: 4 }}>
                      <div style={{ position: "absolute", bottom: 0, left: 0, width: 210, height: 14, backgroundColor: "#edff65" }} />
                      <p
                        style={{
                          position: "relative",
                          margin: 0,
                          fontSize: 27,
                          fontWeight: 700,
                          color: "#fe692c",
                          textShadow: "1.7px 1.7px 1.7px rgba(0,0,0,0.25)",
                        }}
                      >
                        {lc.title}
                      </p>
                    </div>
                    <p style={{ margin: 0, fontSize: 21, color: "#000", lineHeight: 1.5, whiteSpace: "pre-line" }}>{lc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 45,
                backgroundColor: "#ff6400",
                borderRadius: 17,
                padding: "28px 16px",
              }}
            >
              <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>
                正しく学べば、どんな人でも必ず成果は出ます。
                <br />
                あとは環境と正しい知識だけです。
              </p>
            </div>
          </div>
        </div>

        {/* ===== Part 3: Curriculum ===== */}
        <div style={{ backgroundColor: "#ffe9ca", padding: "58px 0" }}>
          <div style={{ maxWidth: 970, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div
                style={{
                  backgroundColor: "#fe692c",
                  display: "inline-block",
                  padding: "8px 64px",
                  borderRadius: 5,
                  marginBottom: 12,
                }}
              >
                <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: 32 }}>カリキュラム</p>
              </div>
              <p style={{ margin: 0, fontSize: 47, fontWeight: 700, color: "#2a2827" }}>
                売るための全てを<span style={{ color: "#fe692c" }}>ゼロから習得</span>できる
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: 17, marginBottom: 40 }}>
              {[
                { value: "18", unit: "項目", label: "カリキュラム" },
                { value: "200", unit: "ページ", label: "専門教科書" },
                { value: "最短2", unit: "ヶ月", label: "で卒業可能" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 21,
                    padding: "33px",
                    boxShadow: "0 0 18px rgba(255,211,139,0.7)",
                    textAlign: "center",
                    minWidth: 128,
                  }}
                >
                  <p style={{ margin: 0, fontSize: 55, fontWeight: 700, color: "#fe692c" }}>{s.value}</p>
                  <p style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#fe692c" }}>{s.unit}</p>
                  <p style={{ margin: "16px 0 0", fontSize: 18, color: "#636363" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Chapters */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 73 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {chapters.slice(0, 4).map((ch) => (
                  <div key={ch.num} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: ch.color,
                        borderRadius: 100,
                        width: 80,
                        padding: "12px 7px",
                        textAlign: "center",
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>CHAPTER</p>
                      <p style={{ margin: 0, fontSize: 32 }}>{ch.num}</p>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 3px rgba(0,0,0,0.25)",
                        padding: "12px 28px 13px",
                        borderRadius: 3,
                      }}
                    >
                      <div style={{ position: "relative", marginBottom: 4 }}>
                        <div style={{ position: "absolute", bottom: 0, left: 0, height: 12, width: "80%", backgroundColor: "rgba(255,255,0,0.4)" }} />
                        <p style={{ position: "relative", margin: 0, fontSize: 19, fontWeight: 700, color: "#2a2827" }}>{ch.name}</p>
                      </div>
                      <p style={{ margin: 0, fontSize: 11, color: "#000", lineHeight: 1.6 }}>{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 19 }}>
                {chapters.slice(4).map((ch) => (
                  <div key={ch.num} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: ch.color,
                        borderRadius: 100,
                        width: 80,
                        padding: "12px 7px",
                        textAlign: "center",
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>CHAPTER</p>
                      <p style={{ margin: 0, fontSize: 32 }}>{ch.num}</p>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 3px rgba(0,0,0,0.25)",
                        padding: "12px 28px 13px",
                        borderRadius: 3,
                      }}
                    >
                      <div style={{ position: "relative", marginBottom: 4 }}>
                        <div style={{ position: "absolute", bottom: 0, left: 0, height: 12, width: "80%", backgroundColor: "rgba(255,255,0,0.4)" }} />
                        <p style={{ position: "relative", margin: 0, fontSize: 19, fontWeight: 700, color: "#2a2827" }}>{ch.name}</p>
                      </div>
                      <p style={{ margin: 0, fontSize: 11, color: "#000", lineHeight: 1.6 }}>{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Part 4: For those afraid of failure ===== */}
        <div
          style={{
            background: "linear-gradient(to bottom, #1a1a1a, #2a1a0a)",
            padding: "0 0 60px",
          }}
        >
          {/* Heading banner */}
          <div
            style={{
              background: "linear-gradient(to right, #fe692c, #e60012)",
              textAlign: "center",
              padding: "40px 0",
              marginBottom: 60,
            }}
          >
            <p style={{ margin: 0, fontSize: 50, fontWeight: 700, color: "#fff", textShadow: "0px 5px 5px rgba(0,0,0,0.25)" }}>
              失敗したくないあなたへ
            </p>
          </div>

          {/* Comparison image */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <img src={imgComparison} alt="他のサービスとの比較" style={{ maxWidth: 855, width: "100%" }} />
          </div>

          {/* 3 safety points */}
          <div style={{ maxWidth: 957, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 32px", fontSize: 56, fontWeight: 700, color: "#fe692c", textShadow: "3.8px 3.8px 3.8px #c8c8c8" }}>
              3 つの安心ポイント
            </p>
            <div style={{ display: "flex", gap: 21, justifyContent: "center" }}>
              {safetyPoints.map((sp, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: sp.color,
                    border: "1.9px solid #fe413e",
                    borderRadius: 9,
                    padding: "23px 20px",
                    width: 305,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 14 }}>
                    <img src={sp.icon} alt="" style={{ width: 53, height: 53 }} />
                    <p style={{ margin: 0, fontSize: 25, fontWeight: 700, color: "#fff" }}>{sp.title}</p>
                  </div>
                  <div style={{ borderTop: "2px solid rgba(255,255,255,0.5)", paddingTop: 10 }}>
                    <p style={{ margin: 0, fontSize: 16, color: "#fff", lineHeight: 1.6 }}>{sp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
