import { LayoutContainer } from "@/components/layouts/LayoutContainer";

/**
 * @description ファインディ
 * @see https://findy-code.io/matches/e74NCTPmkaDvA?page=1
 *
 * @description 転職ドラフト
 * @see https://job-draft.jp/companies/1853/messages/talk
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
