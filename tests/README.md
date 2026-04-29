# Responsive Layout Tests

複数のブレークポイントで以下を自動検証します:

- **横スクロール検出** (`scrollWidth > innerWidth` であれば失敗)
- **はみ出し要素検出** (viewport 右端より外に出る要素を全列挙)
- **画像読み込みエラー検出** (broken image)
- **全幅スクリーンショット保存** (各ビューポートのフルページ画像)

## 検証対象ビューポート

| プロジェクト名 | 幅 | 用途 |
|---|---|---|
| mobile-320 | 320px | 旧 iPhone SE / 最小 SP |
| mobile-375 | 375px | iPhone SE (3rd) |
| mobile-390 | 390px | iPhone 14 |
| mobile-414 | 414px | iPhone 14 Plus |
| tablet-768 | 768px | iPad Mini |
| tablet-1024 | 1024px | iPad Pro 11 |
| desktop-1280 | 1280px | 一般的なノートPC |
| desktop-1440 | 1440px | MacBook Pro |
| desktop-1920 | 1920px | フル HD |

## 使い方

### 初回セットアップ

```bash
npm install
npx playwright install chromium
```

### 実行

```bash
# デプロイ済み URL (https://zenith-blue.github.io/Sales-AI/) をテスト
npm run test:responsive

# 別 URL を指定 (ローカルプレビュー等)
TARGET_URL=http://localhost:8080 npm run test:responsive

# UI モード (対話的に実行・デバッグ)
npm run test:responsive:ui

# レポート閲覧
npm run test:responsive:report
```

## 出力

- **コンソール**: 各ビューポートでの pass/fail 一覧
- **playwright-report/**: HTML レポート (スクショ・はみ出し要素 JSON 添付)
- **test-results/**: 失敗時のトレースとスクショ

## 失敗の読み方

`overflowing-elements.json` に以下の形式で出力されます:

```json
[
  { "tag": "div", "class": "fv__bg", "left": 0, "right": 1920, "width": 1920 }
]
```

`right > viewport幅` の要素が崩れ箇所。CSS で `max-width: 100%` か `overflow: hidden` を該当親要素に当てて修正します。
