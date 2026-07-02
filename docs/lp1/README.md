# 稼ぎ方タイプ診断 LP

## デプロイ手順(Netlify)

1. https://app.netlify.com/drop を開く
2. この「kasegikata-shindan」フォルダを丸ごとドラッグ&ドロップ
3. 発行されたURLで動作確認(トップ → 診断 → 完了画面 → LINEボタン)

※フォルダごとアップすること。index.html単体ではCSS・画像が反映されません。

## 公開前に必ず設定すること

### LINEリンクの差し替え(2か所 → 実質1か所)

index.html内の `https://lin.ee/XXXXXXX` を実際のLINE友だち追加URLに置き換える。

- HTML側のhref(初期表示用)
- JS内の `const LINE_URL = "https://lin.ee/XXXXXXX";`(診断完了時にこちらで上書きされるので、最低限ここを直せば動く)

タイプ別にLINEの誘導先を分けたい場合は、JS内の `LINE_URLS` に記入:

```js
const LINE_URLS = {
  charisma:  "https://lin.ee/xxxx",  // TYPE01 カリスマ発信型
  community: "https://lin.ee/xxxx",  // TYPE02 共感コミュニティ型
  trend:     "https://lin.ee/xxxx",  // TYPE03 トレンドクリエイター型
  asset:     "https://lin.ee/xxxx",  // TYPE04 コツコツ資産型
  speed:     "https://lin.ee/xxxx",  // TYPE05 スピード営業型
  companion: "https://lin.ee/xxxx",  // TYPE06 信頼の伴走型
  ai:        "https://lin.ee/xxxx",  // TYPE07 AI活用ハッカー型
  data:      "https://lin.ee/xxxx",  // TYPE08 データ戦略型
};
```

未記入のタイプは共通の LINE_URL が使われます。

### 画像の差し替え(本番用)

現在の画像には「※プレースホルダ画像」表記が入っています。
本番用画像が用意できたら images/type01.png〜type08.png を同名で上書きし、
tools/make_solo.py を実行すると、ヒーロー用の1人切り出し画像(images/solo/)も
同じ加工で再生成されます。

```
cd kasegikata-shindan
python3 tools/make_solo.py
```

## ファイル構成

```
kasegikata-shindan/
├ index.html          LP本体(トップ/診断/完了画面)
├ style.css           LPスタイル(:rootのカラートークンで配色管理)
├ images/             タイプカード画像(2人組・フル)
│ └ solo/             ヒーロー用 1人切り出し版(自動生成)
├ legal/              会社概要・特商法・プライバシーポリシー
│ └ legal.css
└ tools/make_solo.py  solo画像の再生成スクリプト
```

## カスタマイズ早見表

| 変えたいもの | 場所 |
|---|---|
| 配色 | style.css の :root(--yellow, --t1〜--t8 など) |
| 質問文・判定の重み | index.html の QUESTIONS 配列 |
| タイプ名・タグ・結果文 | index.html の TYPES オブジェクト |
| 完了画面の文言 | index.html の RESULT セクション |
| Meta Pixel等の計測タグ | index.html の </head> 直前に挿入 |
