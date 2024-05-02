import type { Meta, StoryObj } from '@storybook/react'

import { products } from '@/__tests__/utilities/product.mock'
import { MypagePost } from '@/features/mypage/MypagePost'
import { ComponentProps } from 'react'

const meta: Meta<typeof MypagePost> = {
  title: 'features/mypage/MypagePost',
  component: MypagePost,
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

type Story = StoryObj<typeof MypagePost>

const Render = (props: ComponentProps<typeof MypagePost>) => {
  return <MypagePost {...props} />
}

export const Primary: Story = {
  args: { products },
  render: (args) => <Render {...args} />
}
