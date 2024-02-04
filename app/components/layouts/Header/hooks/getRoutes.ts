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
  const publicRoutes = [{ href: "/products", value: "Products" }];

  const authRoutes = session
    ? [
        { href: "/products/create", value: "Create" },
        { href: "/mypage/post", value: "Mypage" },
        { href: "/matches", value: "Match" },
      ]
    : [];

  const commonRoutes = [
    { href: "/guide", value: "Guidance" },
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
