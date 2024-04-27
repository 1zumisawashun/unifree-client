# unifree-client

〇〇大学生のための教科書フリマアプリです

## Installation

- クローンして develop ブランチに移動する

```bash
$ git clone git@github.com:1zumisawashun/unifree-client.git
$ cd unifree-client/develop
```

- envファイルを生成する（必要な秘匿情報は[こちら](https://www.notion.so/UniFli-b8ffb92d7a464c15842dac09c4e840fa)から参照してください）

```bash
$ cp .env.example .env
```

- パッケージをインストールする

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run dev
# http://localhost:3000
```

上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## Vercel

[development](https://unifli-client-git-develop-uniflis-projects.vercel.app)  
[production](https://uni-fli.com)

## Performance Check

[Speed Insights](https://vercel.com/1zumisawashun/unifree-client/speed-insights)  
[Web Analytics](https://vercel.com/1zumisawashun/unifree-client/analytics)

## Folder Structure

See [Configuration Reference](https://github.com/1zumisawashun/folder-structure-template).

## ERD

See [Configuration Reference](https://github.com/1zumisawashun/unifree-client/blob/main/prisma/scheme.md).

## 技術スタック

```
frontend: Next.js App Router
backend: Next.js Route Handler
orm: Prisma
database: Supabase
css: CSS Modules + Sass
auth: Firebase Authentication + NextAuth
storage: Firebase Storage
catalog: Storybook
test: react-testing-library
hosting: Vercel
```

## Troubleshoot

- nothing

## その他ドキュメント

See [Configuration Reference](https://www.notion.so/UniFli-b8ffb92d7a464c15842dac09c4e840fa).
