import { Tab } from "@/components/elements/Tab";

/**
 * @description `/help/faq`と`/help/tos`で共通するレイアウト
 * @see https://beta.nextjs.org/docs/routing/pages-and-layouts#nesting-layouts
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Tab
        items={[
          { text: "Profile", href: "/mypage/profile" },
          { text: "Checkout", href: "/mypage/checkout" },
        ]}
      ></Tab>
      {children}
    </main>
  );
}
