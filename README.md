# unifree-client

- null

## Overview

- null

## Todo

🔷1/22（月）〜1/28（日）までのスケジュール

- 環境構築・基盤開発（リンター設定・ディレクトリ構成の考案・技術選定 etc）
- atoms・molecules 単位のコンポーネントの実装
- 最低限先方に見せられるだけの UI を整える
- Stripe で購入導線を整える（Stripe + use-shopping-cart）
- ログイン・ログアウト・ログイン中の状態管理を可能にする（FirebaseAuth・NextAuth）
- Vercel へデプロイさせる

🔷1/29（月）〜2/4（日）までのスケジュール

- PlanetScale + Prisma を連携させて RDB を組む
- テーブル設計やヒアリングの実施
- テストの組み込み

🔷2/5（月）〜2/11（日）までのスケジュール

- 未定

🔸試してみたいこと

- floating-ui
- cloudflare-images、もし難しそうならgcs使う
- テスト実装（RTL・VRT etc）
- accordion, search-barの実装


## 技術スタック

```
frontend: Next.js App Router
backend: Next.js Route Handler
orm: Prisma
database: PlanetScale
css: CSS Modules + Sass
auth: Firebase Auth + NextAuth
storage: Cloudflare Images or GCS
catalog: Storybook
hosting: Vercel
library: react-hook-form, zod, Stripe, use-shopping-cart, etc
```

## Installation

- clone

```bash
$ git clone git@github.com:1zumisawashun/unifree-client.git
$ cd unifree-client
```

- install

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run dev
```

http://localhost:3000/

- 上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## How to

- フォーマットを効かせる

```bash
$ npm run lint
```

## Troubleshoot

- null

## その他ドキュメント

See [Configuration Reference](https://cli.vuejs.org/config/).
