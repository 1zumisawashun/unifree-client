import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";
import "server-only";

function getHeaderRoutes({ session }: { session: any }) {
  const publicRoutes = [{ href: "/login", value: "Login" }];

  const authRoutes = [{ href: "/cart", value: "Cart" }];

  const routes = session ? authRoutes : publicRoutes;

  return routes;
}

function getProfileMenuRoutes({ session }: { session: any }) {
  const publicRoutes = [{ href: "/books", value: "Books" }];

  const authRoutes = session
    ? [
        { href: "/books/create", value: "Create" },
        { href: "/mypage/post", value: "Mypage" },
      ]
    : [];

  const commonRoutes = [
    { href: "/tos", value: "Terms of Service" },
    { href: "/faq", value: "FAQ" },
  ];

  const routes = [...publicRoutes, ...authRoutes, ...commonRoutes];

  return routes;
}

export async function getRoutes() {
  const session = await getServerSession(authOptions);
  const headerRoutes = getHeaderRoutes({ session });
  const profileRoutes = getProfileMenuRoutes({ session });

  return { headerRoutes, profileRoutes };
}