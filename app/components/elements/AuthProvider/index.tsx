import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import "server-only";

const authRoutes = ["/mypage", "/books/[id]", "/cart"];

export async function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";

  // 未ログインの場合
  if (!session) return <>{children}</>;

  // authが必要なrouteの場合
  if (authRoutes.includes(pathname)) {
    // トークンが切れている場合
    if (new Date(session.user.expires) < new Date()) {
      console.log("tokenが切れています");
      redirect("/login");
    }
  }

  return <>{children}</>;
}