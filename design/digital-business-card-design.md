# デジタル名刺 自己紹介ページ 詳細設計書

## 目次
1. [画面設計](#画面設計)
2. [機能設計](#機能設計)
3. [技術設計](#技術設計)
4. [データ設計](#データ設計)
5. [Amplify設定](#amplify設定)

## 画面設計

### PC版レイアウト仕様
- **全体構成**: ヘッダー、メイン、フッターの3セクション構成
- **ヘッダー**: 
  - 高さ: 80px
  - コンテンツ: ロゴ（左寄せ）
  - 背景色: #ffffff
  - 影効果: box-shadow: 0 2px 4px rgba(0,0,0,0.1)
- **メイン**:
  - 最大幅: 1200px
  - 中央配置: margin: 0 auto
  - パディング: 40px 20px
  - コンテンツ配置: Flexbox (横並び)
    - 左側: プロフィール画像 (40%)
    - 右側: プロフィール情報とソーシャルリンク (60%)
- **フッター**:
  - 高さ: 60px
  - コンテンツ: コピーライト情報（中央寄せ）
  - 背景色: #f5f5f5

### モバイル版レイアウト仕様
- **全体構成**: ヘッダー、メイン、フッターの縦積みレイアウト
- **ヘッダー**: 
  - 高さ: 60px
  - コンテンツ: ロゴ（中央寄せ）
- **メイン**:
  - パディング: 20px
  - コンテンツ配置: 縦積み (Flexbox direction: column)
    - プロフィール画像 (上部)
    - プロフィール情報 (中央)
    - ソーシャルリンク (下部)
- **フッター**:
  - 高さ: 50px

### ブレークポイント定義
- **モバイル**: 〜767px
- **タブレット**: 768px〜1023px
- **デスクトップ**: 1024px〜

## 機能設計

### プロフィール表示機能
- **画像表示**:
  - 円形クリッピング: border-radius: 50%
  - サイズ: 
    - PC: 250px x 250px
    - モバイル: 150px x 150px
  - 影効果: box-shadow: 0 4px 8px rgba(0,0,0,0.2)
  - アニメーション: ホバー時に軽微な拡大効果 (transform: scale(1.05))

- **テキスト表示**:
  - ユーザー名: 
    - フォントサイズ: 2rem (PC) / 1.5rem (モバイル)
    - フォントウェイト: 700
  - 職業/肩書き:
    - フォントサイズ: 1.2rem (PC) / 1rem (モバイル)
    - フォントウェイト: 400
    - 色: #666666
  - 自己紹介文:
    - フォントサイズ: 1rem
    - 行間: 1.6
    - 最大幅: 600px

### 外部リンク遷移機能
- **リンクアイコン**:
  - サイズ: 32px x 32px (PC) / 24px x 24px (モバイル)
  - 間隔: 16px
  - ホバーエフェクト: 色変更とスケール変更
  - クリック動作: target="_blank" で新しいタブで開く
  - アクセシビリティ: aria-label 属性を使用

- **対応サービス**:
  - X (旧Twitter): SVGアイコン使用
  - Qiita: SVGアイコン使用

### レスポンシブ対応仕様
- **Flexbox使用箇所**:
  - ヘッダーナビゲーション
  - プロフィールセクション
  - ソーシャルリンクコンテナ
  
- **Grid使用箇所**:
  - 全体レイアウト (PC版)
  
- **メディアクエリ**:
  ```css
  /* モバイル */
  @media (max-width: 767px) {
    /* モバイル用スタイル */
  }
  
  /* タブレット */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* タブレット用スタイル */
  }
  
  /* デスクトップ */
  @media (min-width: 1024px) {
    /* デスクトップ用スタイル */
  }
  ```

## 技術設計

### Reactコンポーネント構成

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Profile/
│   │   ├── Profile.tsx
│   │   └── Profile.module.css
│   ├── SocialLinks/
│   │   ├── SocialLinks.tsx
│   │   └── SocialLinks.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── App.tsx
└── index.tsx
```

#### コンポーネント詳細

- **Header**: ページ上部のヘッダー部分を表示
  - Props: なし
  
- **Profile**: プロフィール情報を表示
  - Props: 
    - `userProfile: UserProfile`
  
- **SocialLinks**: ソーシャルメディアリンクを表示
  - Props: 
    - `links: SocialLink[]`
  
- **Footer**: ページ下部のフッター部分を表示
  - Props: 
    - `copyrightText: string`

### TypeScript型定義

```typescript
// src/types/index.ts

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  ariaLabel: string;
}
```

### CSS設計方針

- **CSS Modules**を使用して、コンポーネントごとにスコープされたスタイルを適用
- グローバルスタイルは `src/styles/global.css` で定義
- 変数（カラー、フォントサイズなど）は `src/styles/variables.css` で定義
- メディアクエリは各コンポーネントの CSS Module 内で定義

```css
/* src/styles/variables.css */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333333;
  --light-gray: #f5f5f5;
  --dark-gray: #666666;
  
  --font-family: 'Noto Sans JP', sans-serif;
  
  --header-height: 80px;
  --footer-height: 60px;
  
  --container-max-width: 1200px;
  --container-padding: 20px;
}

/* モバイル用変数 */
@media (max-width: 767px) {
  :root {
    --header-height: 60px;
    --footer-height: 50px;
    --container-padding: 16px;
  }
}
```

### ディレクトリ構成

```
src/
├── components/       # Reactコンポーネント
├── types/            # TypeScript型定義
├── styles/           # グローバルスタイルとCSS変数
├── assets/           # SVGアイコンなどの静的アセット
├── hooks/            # カスタムReactフック
├── utils/            # ユーティリティ関数
├── App.tsx           # メインアプリケーションコンポーネント
└── index.tsx         # エントリーポイント
```

## データ設計

### プロフィールデータ構造

```typescript
// src/data/profile.ts

import { UserProfile, SocialLink } from '../types';

export const userProfile: UserProfile = {
  name: "山田 太郎",
  title: "フロントエンドエンジニア",
  bio: "React、TypeScriptを使ったWebアプリケーション開発を専門としています。ユーザー体験を向上させるUI/UXデザインに情熱を持っています。",
  avatarUrl: "/assets/images/profile.jpg"
};

export const socialLinks: SocialLink[] = [
  {
    id: "twitter",
    name: "X",
    url: "https://twitter.com/username",
    iconName: "twitter",
    ariaLabel: "X（旧Twitter）プロフィール"
  },
  {
    id: "qiita",
    name: "Qiita",
    url: "https://qiita.com/username",
    iconName: "qiita",
    ariaLabel: "Qiitaプロフィール"
  }
];
```

### 画像ファイル管理

```
public/
└── assets/
    ├── images/
    │   └── profile.jpg    # プロフィール画像
    └── icons/
        ├── twitter.svg    # Xアイコン
        └── qiita.svg      # Qiitaアイコン
```

## Amplify設定

### ビルド設定

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 環境変数設定

Amplifyコンソールで以下の環境変数を設定:

| 変数名 | 説明 | 例 |
|--------|------|-----|
| REACT_APP_SITE_TITLE | サイトのタイトル | デジタル名刺 - 山田太郎 |
| REACT_APP_META_DESCRIPTION | メタディスクリプション | 山田太郎のデジタル名刺です。フロントエンドエンジニアとしての経歴やスキルを紹介しています。 |

### デプロイ設定

- **ブランチ連携**: `dev` ブランチへのプッシュで自動デプロイ
- **ビルド出力ディレクトリ**: `build`
- **ルートドキュメント**: `index.html`
- **エラーページ**: `index.html` (SPA対応)
- **キャッシュ設定**:
  - HTML: 86400秒 (1日)
  - CSS/JS: 2592000秒 (30日)
  - 画像: 31536000秒 (1年)

## 実装ロードマップ

1. プロジェクト初期化 (Create React App + TypeScript)
2. ディレクトリ構造とベースファイルの作成
3. コンポーネント実装 (Header, Profile, SocialLinks, Footer)
4. レスポンシブスタイリング
5. Amplifyへのデプロイ設定

## まとめ

本設計書では、ReactとTypeScriptを使用したデジタル名刺の自己紹介ページの詳細設計を行いました。画面設計、機能設計、技術設計、データ設計、Amplify設定の5つの観点から実装方針を明確化しました。特にレスポンシブ対応とTypeScriptによる型安全性を重視した設計となっています。