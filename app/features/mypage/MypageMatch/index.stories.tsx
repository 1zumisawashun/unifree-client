import type { Meta, StoryObj } from '@storybook/react'

import { MypageMatch } from '@/features/mypage/MypageMatch'
import { ComponentProps } from 'react'

const meta: Meta<typeof MypageMatch> = {
  title: 'features/mypage/MypageMatch',
  component: MypageMatch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta

type Story = StoryObj<typeof MypageMatch>

const Render = (props: ComponentProps<typeof MypageMatch>) => {
  return <MypageMatch {...props} />
}

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

export const Primary: Story = {
  args: { rows },
  render: (args) => <Render {...args} />
}
