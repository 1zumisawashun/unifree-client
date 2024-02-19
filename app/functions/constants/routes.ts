const publicRoutes = {
  profile: {
    primary: [{ href: "/products", value: "商品一覧" }],
    secondary: [
      { href: "/tos", value: "利用規約" },
      { href: "/faq", value: "FAQ" },
    ],
  },
};

const privateRoutes = {
  mypage: {
    primary: [
      { href: "/mypage/setting", value: "設定" },
      { href: "/mypage/post", value: "出品商品" },
      // { href: "/mypage/history", value: "購入商品" },
      { href: "/mypage/match", value: "マッチング" },
    ],
    secondary: [],
  },
  profile: {
    primary: [
      { href: "/products/create", value: "商品追加" },
      { href: "/mypage/setting", value: "マイページ" },
    ],
    secondary: [],
  },
};

const authRoutes = [
  ...privateRoutes.profile.primary,
  ...privateRoutes.mypage.primary,
];

export { authRoutes, privateRoutes, publicRoutes };
