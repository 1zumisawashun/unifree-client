# unifree-client

- null

## Overview

- null

## Todo

<details>
<summary>🔷 1/22（月）〜1/28（日）までのスケジュール</summary>

- 環境構築・基盤開発（リンター設定・ディレクトリ構成の考案・技術選定 etc）
- atoms・molecules 単位のコンポーネントの実装
- 最低限先方に見せられるだけの UI を整える
- Stripe で購入導線を整える（Stripe + use-shopping-cart）
- ログイン・ログアウト・ログイン中の状態管理を可能にする（FirebaseAuth・NextAuth）
- Vercel へデプロイさせる

</details>

<details>
<summary>🔷 1/29（月）〜2/4（日）までのスケジュール</summary>

- PlanetScale + Prisma を連携させて RDB を組む
- テーブル設計やヒアリングの実施
- テストの組み込み

</details>

<details>
<summary>🔷 2/5（月）〜2/11（日）までのスケジュール</summary>

- 未定

</details>

🔶 試してみたいこと

- floating-ui
- cloudflare-images、もし難しそうなら gcs 使う
- テスト実装（RTL・VRT etc）
- accordion, search-bar の実装

## UI

<details>
<summary>index</summary>

- index

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/d05db166-b0a8-4996-8e60-26d81d5a62a0)

</details>

<details>
<summary>books</summary>

- book-list

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/71fcb5a3-d258-4574-8024-f72cb1019b3d)

- book-detail

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/dd1af9ac-7691-4806-a231-f49290095880)

- book-create

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/64b3a407-dfda-4f9a-b676-cd65be809db0)

- book-edit

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/70e90b8e-09fd-4fda-a7d6-e1cc4cbfaed1)

</details>

<details>
<summary>cart</summary>

- cart

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/6901daab-5d44-4f26-9f8b-ab8a359169ca)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/d79584be-8ba3-41ac-8a01-015889cd017f)

</details>

<details>
<summary>mypage</summary>

- mypage-post

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/6a2620c2-e9c7-4d7b-9a2d-98f422f8545d)

- mypage-history

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/a01ead40-cc7f-4401-af52-c8eb5009bd75)

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
