import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/elements/Avatar'
import { Badge } from '@/components/elements/Badge'
import { ComponentProps } from 'react'

const meta: Meta<typeof Badge> = {
  title: 'elements/Badge',
  component: Badge
}

export default meta

type Story = StoryObj<typeof Badge>

const Render = ({ count }: ComponentProps<typeof Badge>) => {
  return (
    <Badge count={count}>
      <Avatar />
    </Badge>
  )
}

export const Default: Story = {
  args: {
    count: 1
  },
  render: (args) => <Render {...args} />
}
