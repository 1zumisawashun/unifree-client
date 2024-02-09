# unifree-client

- null

## Overview

- null

## Schedule

<details>
<summary>🔷 1/22（月）〜1/28（日）</summary>

- ✅ 環境構築・基盤開発（リンター設定・ディレクトリ構成の考案・技術選定 etc）
- ✅ atoms・molecules 単位のコンポーネントの実装
- ✅ 最低限先方に見せられるだけの UI を整える
- ✅ Stripe で購入導線を整える（Stripe + use-shopping-cart）
- ✅ ログイン・ログアウト・ログイン中の状態管理を可能にする（FirebaseAuth・NextAuth）
- ✅ 基本的な sp 対応をする

</details>

<details>
<summary>🔷 1/29（月）〜2/4（日）</summary>

- ✅ 画像アップロードの機能の実装（GCS 連携）
- ✅ Product と User の CRUD 機能の実装
- ✅ UI のアップデート（トースト等）
- ✅ 全体的なコードのリファクタリング
- ✅ Prisma スキーマの骨子を作成

</details>

<details>
<summary>🔷 2/5（月）〜2/11（日）</summary>

- ✅ PlanetScale + Prisma を連携させて RDB を組む
- ✅ Prisma スキーマ作成
- ✅ DM 機能の実装
- ✅ Product と User の CRUD API 繋ぎ込み
- ✅ その他 UI 改修
- ✅ next-auth の改修（ログインユーザーで操作可能なバリデーションの実装）

</details>

<details>
<summary>🔷 2/12（月）〜2/18（日）</summary>

- Vercel へのデプロイ

</details>

## Try

<details>
<summary>🔶 試してみたいこと</summary>

- floating-ui でコンポーネントの改修
- cloudflare-images、もし難しそうなら gcs 使う
- テスト実装（RTL・VRT etc）
- 意識的な button コンポーネントの優先度決め

</details>

## UI_20240127

<details>
<summary>index</summary>

- index

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/11eebdab-62dc-4b8c-a4c8-dfa8da4b6d0f)

</details>

<details>
<summary>products</summary>

- products-list

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/79780bc6-d3b1-4fbd-aed5-0cafd1f24574)

- products-detail

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/92cd1d9e-d696-462c-a1a6-8730bf8c3895)

- products-create

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/5948cbf3-ad36-4742-97ca-3b14e6e09f2c)

- products-edit

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/07de310b-a4bc-4643-ad95-ec93e444d406)

</details>

<details>
<summary>cart</summary>

- cart

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/354aca3f-c26d-4059-879e-f1c9b4e1ca07)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/d79584be-8ba3-41ac-8a01-015889cd017f)

</details>

<details>
<summary>mypage</summary>

- mypage-post

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/784a2a77-6128-41d8-a0a0-4b0ff0815562)

- mypage-history

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/3049e851-a342-4290-bc19-314d568f3094)

- mypage-setting

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/11d77907-4b44-4fd9-bb10-61dbfa5e7c4c)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/05c7e73b-3e47-43de-a748-b4558bc8285a)

</details>

<details>
<summary>login</summary>

- login

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/c252b32b-2f91-48ac-b4bd-ac27426a727d)

</details>

<details>
<summary>tos</summary>

- tos

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/a42009d0-74ff-4cf4-ad55-754b3f4bfe89)

</details>

<details>
<summary>faq</summary>

- faq

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/d66f5d5d-4768-4b2e-8b10-7bc415a0d555)

</details>

## 技術スタック

```
frontend: Next.js App Router
backend: Next.js Route Handler
orm: Prisma
database: PlanetScale
css: ITCSS + CSS Modules + Sass
auth: Firebase Auth + NextAuth
storage: GCS
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
