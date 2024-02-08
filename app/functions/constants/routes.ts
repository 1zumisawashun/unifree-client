const publicRoutes = {
  primary: [
    { href: "/", value: "Index" },
    { href: "/products", value: "Product List" },
  ],
  secondary: [
    { href: "/guide", value: "Guidance" },
    { href: "/tos", value: "Terms of Service" },
    { href: "/faq", value: "FAQ" },
  ],
};

const privateRoutes = [
  { href: "/products/create", value: "Product Create" },
  { href: "/products/[id]/edit", value: "Product Edit" },
  { href: "/mypage/post", value: "Mypage Post" },
  { href: "/mypage/history", value: "Mypage History" },
  { href: "/mypage/setting", value: "Mypage Setting" },
  { href: "/matches", value: "Match List" },
  { href: "/matches/[id]", value: "Match Detail" },
  { href: "/cart", value: "Cart" },
];

const routes = [
  ...publicRoutes.primary,
  ...privateRoutes,
  ...publicRoutes.secondary,
];

export { privateRoutes, publicRoutes, routes };
