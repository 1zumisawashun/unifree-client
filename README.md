# unifree-client

- 北海道大学生のための教科書フリマアプリです

## Overview

- nothing

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

- ✅ Vercel へのデプロイ
- ✅ 商品一覧の検索機能
- ✅ プロダクトカードの大学名の繋ぎ込み
- ✅ カートアイテムのリンク先改修、Card（List, Item）にまとめる
- ✅ Match をマイページに移行させる（全体的なマイページの UI 改修）
- ✅ マッチした後の FixedFooter の disable にする
- ✅ フェッチ系の関数を hooks ディレクトリに移行する
- ✅ パネルコンポーネントをいい感じに使い回す（shape）
- ✅ 異常系の UI 差し込み（Empty, Error）
- ✅ フェッチコンポーネントを Suspense でラップする。（これ今回のサバコン戦略的に loading.tsx で良い気がしてきた）
- ✅ 再度 sp 画面の確認をする
- ✅ error.tsx の UI 改修
- ✅ faker.js の導入
- ✅ prisma-erd-generate の導入

</details>

<details>
<summary>🔷 2/19（月）〜2/25（日）</summary>

- ✅ server-action へのリプレイス（責務わけのために中止・match と message だけ対応済み）
- ✅ icon を hero-icon にする。たしかツリーシェイキングの対応されていたはず。
- ✅ badge ui, tooltip, toast の作成と改修
- ✅ withAuth で未ログインユーザーのハンドリングを実装した
- ✅ DM 機能に http 変換を加える
- ✅ 一覧の順番を新しい順にする、出品日の追加
- ✅ 画像が伸びるバグ？制限が不明、おそらく cart？
- ✅ header のバッジの api を繋ぎこむ + DM のアイコンを変える
- ✅ 出品から 1 週間以内なら NEW のラベルを付与する

</details>

<details>
<summary>🔷 2/26（月）〜3/3（日）</summary>

- ✅ カテゴリーを日本語に変換する
- ✅ カートを非表示にする
- ✅ どれをサムネイルにするのかの判定を実装する →DD で実装した
- match-detail に has セレクターを加える改修
- create・edit でフォームをリセットする
- product-form の isSp を削除して改修する
- planet-scale の branching 機能を対応する
- 入力バリデーションのハンドリング実装
- メッセージの通知機能（messages に read をつける）ということはヘッダーにベルアイコンを仕込む必要があるのか、header のベルからマイページマッチに遷移させる
  - https://zenn.dev/catnose99/scraps/468bedaab6dbe3ecfcae
- match テーブルに createdAt を追加する
- send-grid で email する
- stroy-book の panel と dropdown-menu どうするか問題
- 3 月以降は VRT と RTL を導入する
- cloudflare でドメインを取る

</details>

## MEMO

- badge、dropdown-menu は slot で作りたい
- card に list, item を格納する, good
- domain の入った共通コンポーネントの配置について, good
- page.tsx で async function は全て loading.tsx を配置する
- action には button loading を配置する
- ISBN で何かできる？
- リポジトリをプライベートに変更する
- Zenn に記事を書いてエンジニアを募集する（今年の目標も視野に入れる）
- layout → error（error-boundary） → loading（suspense） → page（async function）
- 意識的な button コンポーネントの優先度決め
- カート機能（use-shopping-cart の状態管理 redux を拝借）
- fetch は(pages)だけに閉じ込めて page router と同じにした
- でもあれか zenn のスクラップに書けば問題ないのか

## Folder Structure

See [Configuration Reference](https://github.com/1zumisawashun/folder-structure-template).

## ERD

See [Configuration Reference](https://github.com/1zumisawashun/unifree-client/blob/main/prisma/scheme.md).

## Performance Check

See [Configuration Reference](https://vercel.com/1zumisawashun/unifree-client/speed-insights).

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

## Troubleshoot

- nothing

## その他ドキュメント

See [Configuration Reference](https://nextjs.org/).
