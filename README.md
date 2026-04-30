# Sales-AI

セールスAI研修プログラムのランディングページ（静的サイト）。

## デプロイ先

- 本番: **https://businessgate.co.jp/salesai/**
  - SSL 発行完了までは `http://businessgate.co.jp/salesai/`
- ホスティング: さくらのレンタルサーバ (`www2533.sakura.ne.jp`)
- サーバーパス: `/home/businessgate/www/salesai/`

> 同サーバーの `/home/businessgate/www/` 直下には別サイト（ビジネスゲート社の HP）が稼働中。
> デプロイは `/salesai/` 配下のみに限定し、既存サイトには触れない設計。

## 自動デプロイ

**`main` ブランチへのマージで自動デプロイされます。**

- ワークフロー: [`.github/workflows/deploy-sakura.yml`](.github/workflows/deploy-sakura.yml)
- トリガー: `push` to `main` または手動実行 (`workflow_dispatch`)
- 方式: GitHub Actions から `rsync` over SSH
- 所要時間: 約 10〜25 秒

### 手動実行

```bash
gh workflow run deploy-sakura.yml --repo Zenith-Blue/Sales-AI
```

## ローカル開発

```bash
# 依存インストール（テストのみ）
npm install

# レスポンシブテスト実行
npm run test:responsive
```

このサイトはビルド不要の静的 HTML/CSS/JS。`index.html` を直接ブラウザで開けば確認可。

## ディレクトリ構成

```
Sales-AI/
├── index.html              # トップページ
├── company.html            # 会社概要
├── privacypolicy.html      # プライバシーポリシー
├── tokushouhou.html        # 特定商取引法
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── assets/                 # 画像・SVG
├── *.webp                  # トップページ用画像
├── tests/                  # Playwright レスポンシブテスト
├── scripts/                # ユーティリティスクリプト
├── docs/                   # ドキュメント・スクリーンショット
└── .github/workflows/      # GitHub Actions
```

## デプロイで除外されるファイル

`rsync --exclude` で以下はサーバーへ転送されません:

- `.git/`, `.github/`, `.gitignore`
- `node_modules/`
- `tests/`, `test-results/`, `playwright-report/`, `playwright.config.js`
- `docs/`, `scripts/`
- `package.json`, `package-lock.json`
- `.DS_Store`, `*.log`

## 必要な GitHub Secrets

リポジトリ Settings > Secrets and variables > Actions に以下が登録済み:

| Secret 名 | 内容 |
|---|---|
| `SAKURA_SSH_KEY` | デプロイ用 ed25519 秘密鍵 |
| `SAKURA_HOST` | `www2533.sakura.ne.jp` |
| `SAKURA_USER` | `businessgate` |
| `SAKURA_KNOWN_HOSTS` | サーバーのホストキー (`ssh-keyscan` 出力) |

デプロイ用の公開鍵はサーバーの `~/.ssh/authorized_keys` に登録済み。

## Pending タスク

- [#29](https://github.com/Zenith-Blue/Sales-AI/issues/29) — SSL 発行完了後に HTTP→HTTPS リダイレクトを設定
