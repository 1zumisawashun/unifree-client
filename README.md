This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Todo

🔷1/22（月）〜1/28（日）までのスケジュール

- 環境構築・基盤開発（リンター設定・ディレクトリ構成の考案・技術選定 etc）
- コンポーネントの実装
- 最低限先方に見せられるだけの UI を整える
- auth の実装（Firebase Auth・NextAuth）具体的にはログイン・ログアウト・ログイン中の状態管理を可能にする
- Vercel へデプロイさせる

🔷1/29（月）〜2/4（日）までのスケジュール

- PlanetScale + Prisma を連携させて RDB を組む
- テーブル設計やヒアリングの実施

🔷2/5（月）〜2/11（日）までのスケジュール

- Stripe で購入導線を整える

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
