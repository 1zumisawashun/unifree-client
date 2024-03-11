const publicRoutes = {
  profile: {
    primary: [{ id: 1, href: '/products', value: '商品一覧' }],
    secondary: [
      { id: 2, href: '/tos', value: '利用規約' },
      { id: 3, href: '/faq', value: 'FAQ' }
    ]
  }
}

const privateRoutes = {
  mypage: {
    primary: [
      { id: 4, href: '/mypage/setting', value: '設定' },
      { id: 5, href: '/mypage/post', value: '出品商品' },
      // { id: 6, href: "/mypage/history", value: "購入商品" },
      { id: 7, href: '/mypage/match', value: 'マッチング' }
    ],
    secondary: []
  },
  profile: {
    primary: [
      { id: 8, href: '/products/create', value: '商品追加' },
      { id: 9, href: '/mypage/setting', value: 'マイページ' }
    ],
    secondary: []
  }
}

const authRoutes = [
  ...privateRoutes.profile.primary,
  ...privateRoutes.mypage.primary
]

export { authRoutes, privateRoutes, publicRoutes }
