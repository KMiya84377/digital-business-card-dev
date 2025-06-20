# デジタル名刺 | Digital Business Card

デジタル名刺の自己紹介ページプロジェクトです。

## 概要
このプロジェクトは、ReactとTypeScriptを使用したモダンで美しいデジタル名刺を作成するためのWebアプリケーションです。

## 機能
- プロフィール表示機能
- 外部リンク機能（X、Qiita）
- レスポンシブ対応UI

## 技術スタック
- React 18
- TypeScript 5
- Vite（ビルドツール）
- CSS Modules
- Flexbox/Grid Layout

## 開発環境のセットアップ
```bash
# リポジトリのクローン
git clone https://github.com/KMiya84377/digital-business-card-dev.git
cd digital-business-card-dev

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## プロジェクト構成
```
/
├── public/           # 静的ファイル
│   └── assets/       # 画像などのアセット
├── src/              # ソースコード
│   ├── components/   # Reactコンポーネント
│   ├── types/        # TypeScript型定義
│   ├── App.tsx       # メインアプリケーション
│   └── main.tsx      # エントリーポイント
├── index.html        # HTMLテンプレート
└── package.json      # プロジェクト設定
```

## ブランチ戦略
- `main`: 本番用のブランチ
- `dev`: 開発用のブランチ

## 開発者
KMiya84377