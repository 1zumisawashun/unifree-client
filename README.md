# unifree-client

〇〇大学生のための教科書フリマアプリです

サンプルサンプルサンプル

## 環境構築の手順

- クローンして develop ブランチに移動する

```bash
$ git clone git@github.com:1zumisawashun/unifree-client.git
$ cd unifree-client
$ code .
$ git checkout develop
```

- envファイルを生成する（必要な秘匿情報は[こちら](https://www.notion.so/UniFli-b8ffb92d7a464c15842dac09c4e840fa)から参照してください）

```bash
$ cp .env.example .env
```

- パッケージをインストールする

```bash
$ npm install
```

- ローカル開発用 [URL](http://localhost:3000) を開き動作確認をする

```bash
$ npm run dev
```

上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## Vercel

[development](https://unifree-client-git-develop-1zumisawashun.vercel.app/)  
[production](https://unifree-client.vercel.app/)

## Performance Check

[Speed Insights](https://vercel.com/1zumisawashuns-projects/unifree-client/speed-insights)  
[Web Analytics](https://vercel.com/1zumisawashuns-projects/unifree-client/analytics)

## ディレクトリ構成

See [Configuration Reference](https://github.com/1zumisawashun/folder-structure-template).

## ERD

See [Configuration Reference](https://github.com/1zumisawashun/unifree-client/blob/main/prisma/scheme.md).

## 使用技術

```
frontend: Next.js App Router
backend: Next.js Route Handler
orm: Prisma
database: Supabase
css: CSS Modules
auth: Firebase Authentication + NextAuth
storage: Firebase Storage
catalog: Storybook
test: React Testing Library + Jest
hosting: Vercel
```

## Troubleshoot

### デプロイが失敗する

supabaseをhobbyプランで使用しているため定期的に稼働させないとロックされます。  
supabaseのダッシュボードでrestoreさせてください。

### nodeエラーが発生する

nodeのバージョンを本案件のバージョンに合わせてください。  
nodeのバージョン管理ツールをvoltaに設定している場合は不要です。

## その他ドキュメント

See [Configuration Reference](https://www.notion.so/UniFli-b8ffb92d7a464c15842dac09c4e840fa).
