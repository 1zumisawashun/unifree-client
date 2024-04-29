import { MypageMatch } from '@/features/mypage/MypageMatch'

const rows = [
  {
    id: 1,
    title: 'Category',
    annotation: '商品登録で使用するカテゴリーの追加、削除することができます',
    href: `/admin/category`
  },
  {
    id: 2,
    title: 'Match',
    annotation: 'ユーザー間のチャット内容を確認することができます',
    href: `/admin/matches`
  },
  {
    id: 3,
    title: 'Sample',
    annotation: 'サンプルページです',
    href: `/admin/sample`
  }
]

export const AdminIndex = () => {
  return <MypageMatch rows={rows} />
}
