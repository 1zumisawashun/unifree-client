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
- ✅ Product, User, Match, Message の CRUD API 繋ぎ込み
- ✅ その他 UI 改修
- ✅ next-auth の改修（ログインユーザーで操作可能なバリデーションの実装）

</details>

<details>
<summary>🔷 2/12（月）〜2/18（日）</summary>

- Vercel へのデプロイ
- ガイダンスページの作成
- 異常系の UI 差し込み（Empty, Error）
- 入力バリデーションのハンドリング実装

</details>

## Try

<details>
<summary>🔶 試してみたいこと</summary>

- floating-ui でコンポーネントの改修
- cloudflare-images、もし難しそうなら gcs 使う
- テスト実装（RTL・VRT etc）
- 意識的な button コンポーネントの優先度決め

</details>

## UI_20240211

<details>
<summary>index</summary>

- index

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/0acfe14b-7520-4390-8616-2ed66a4bf769)

</details>

<details>
<summary>products</summary>

- products-list

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/61861852-bc61-4add-8611-7c3b038f591e)

- products-detail

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/5ed8d8c4-85be-4765-a5e7-1fe76f69c7dc)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/a0eac003-673d-41d3-8f92-6e26c015b3e9)

- products-create

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/c87b6c1d-b670-41f3-ab73-360abb379b9e)

- products-edit

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/00c8d5eb-e0b5-488d-ae84-fb835210334a)

</details>

<details>
<summary>cart</summary>

- cart

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/12c4ba03-641e-4020-8d1b-411228f4c68a)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/d79584be-8ba3-41ac-8a01-015889cd017f)

</details>

<details>
<summary>mypage</summary>

- mypage-post

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/b5637521-4f1a-4100-a588-d7f9b0cabc8e)

- mypage-history

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/a24ca930-dcc9-4c7a-ba6a-07aac36ba4d3)

- mypage-setting

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/86ef3b86-d0ec-4048-98e9-5c1aa8a3f68f)

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/7717d156-1aec-470f-b400-069588816e9a)

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

<details>
<summary>match</summary>

- match list

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/6d0df88d-0fa5-4af7-aed2-96ce10f939ff)

- match detail

![image](https://github.com/1zumisawashun/unifree-client/assets/65071534/f9c4458e-1aaf-4d60-85d1-c04981991753)

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
