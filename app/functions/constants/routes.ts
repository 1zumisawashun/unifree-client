const publicRoutes = {
  header: {
    primary: [{ href: "/login", value: "Login" }],
    secondary: [],
  },
  profile: {
    primary: [{ href: "/products", value: "Product List" }],
    secondary: [
      { href: "/guide", value: "Guidance" },
      { href: "/tos", value: "Terms of Service" },
      { href: "/faq", value: "FAQ" },
    ],
  },
};

const privateRoutes = {
  header: {
    primary: [{ href: "/cart", value: "Cart" }],
    secondary: [],
  },
  mypage: {
    primary: [
      { href: "/mypage/setting", value: "設定" },
      { href: "/mypage/post", value: "出品商品" },
      { href: "/mypage/history", value: "購入商品" },
      { href: "/mypage/match", value: "マッチング" },
    ],
    secondary: [],
  },
  profile: {
    primary: [
      { href: "/products/create", value: "Product Create" },
      { href: "/mypage/setting", value: "Mypage" },
    ],
    secondary: [],
  },
};

const authRoutes = [
  ...privateRoutes.header.primary,
  ...privateRoutes.profile.primary,
  ...privateRoutes.mypage.primary,
];

export { authRoutes, privateRoutes, publicRoutes };
