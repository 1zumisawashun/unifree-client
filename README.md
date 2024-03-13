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
- ✅ 入力バリデーションのハンドリング実装
- ✅ create・edit でフォームをリセットする
- ✅ ブラウザで警告が出ていたので product-form の isSp を削除して改修する
- ✅ ロゴを正式なものに差し替え
- ✅ planet-scale の branching 機能を対応する
- ✅ メッセージの通知機能（messages に read をつける）ということはヘッダーにベルアイコンを仕込む必要があるのか、header のベルからマイページマッチに遷移させる
  - https://zenn.dev/catnose99/scraps/468bedaab6dbe3ecfcae
- ✅ match テーブルに createdAt を追加する
- ✅ product-card のオーバーレイを改修する
- ✅ 検索のパワーアップ（name と category で検索絞り込みできるようにした）
- ✅ パフォーマンスチューニング（リージョン変更とか）
- ✅ stroy-book の panel と dropdown-menu どうするか問題
- ✅ リポジトリをプライベートにする
- ✅ ogp 対応の骨子に着手
- ✅ develop 環境の作成

</details>

<details>
<summary>🔷 3/4（月）〜3/10（日）</summary>

- ✅ マイページ編集のフォームのバリデーションを改修する
- ✅ RTL の導入
- ✅ cloudflare でドメインを取る
- ✅ OGP 対応とか、メタデータの改修
- ✅ ga4（セットアップまでは完了）
- ✅ 詳細画面に notFound()を加える

</details>

<details>
<summary>🔷 3/11（月）〜3/17（日）</summary>

- ios safariでログインできない問題
  - https://github.com/firebase/firebase-js-sdk/issues/6716
  - https://mackee.hatenablog.com/entry/perl-advent-calendar-2022-day9
  - これ関係なしにクッキー消してログインすると再現できるかもしれない
- match-detail に has セレクターを加える改修
- input-select の placeholder に has not を加える
- match に productId を加えないと破綻しそう
- send-grid で email する
- stripe で購入導線を整える
- VRT の導入
- next.js の production check をやってみる
  - https://nextjs.org/docs/app/building-your-application/deploying/production-checklist
  - https://vercel.com/blog/guide-to-fast-websites-with-next-js-tips-for-maximizing-server-speeds

</details>

## Guideline

箇条書きでまとめていく

### (pages)ディレクトリ

- layout.tsx > error.tsx（error-boundary） > loading.tsx（suspense） > page.tsx（async function）で構成する
- 上記のヒエラルキーに関しては次の[ドキュメント](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy)を参照する
- [id]には notFound を仕込む
- 特に page.tsx で フェッチしている場合は error.tsx と loading.tsx はマストで配置する
- フェッチするのは(pages)ディレクトリに限定する、該当するのは layout か page になるはず
- 例外的に(pages)ディレクトリ以外でフェッチをする時は〇〇 container.tsx として明示的にコンポーネントを作る
- フェッチ を(pages)ディレクトリに閉じ込めるのは Page Router との差分をなくし開発者の認知負荷を下げるため

### loading コンポーネント

- フェッチ = LoadingDot コンポーネント
- ユーザーインタラクション = Button コンポーネント + CircularProgress コンポーネント
- それ以外、または明らかなユーザーインタラクションの阻止が必要な場合（ログイン・ログアウト等）　= LoadingSpinner コンポーネント

## Folder Structure

See [Configuration Reference](https://github.com/1zumisawashun/folder-structure-template).

## ERD

See [Configuration Reference](https://github.com/1zumisawashun/unifree-client/blob/main/prisma/scheme.md).

## Performance Check

See [Speed Insights](https://vercel.com/1zumisawashun/unifree-client/speed-insights).  
See [Web Analytics](https://vercel.com/1zumisawashun/unifree-client/analytics).

## 技術スタック

```
frontend: Next.js App Router
backend: Next.js Route Handler
orm: Prisma
database: PlanetScale
css: CSS Modules + Sass
auth: Firebase Auth + NextAuth
storage: GCS
catalog: Storybook
test: react-testing-library
hosting: Vercel
```

## Installation

- クローンして develop ブランチに移動する

```bash
$ git clone git@github.com:1zumisawashun/unifree-client.git
$ cd unifree-client/develop
```

- パッケージをインストールする

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run ps:dev # PlanetScale
$ npm run dev # Next.js
```

http://localhost:3000/

- 上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## Troubleshoot

- dev環境:https://unifree-client-git-develop-1zumisawashun.vercel.app/
- prod環境:https://unifree-client.vercel.app/

## その他ドキュメント

See [Configuration Reference](https://nextjs.org/).
