import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/elements/Avatar'
import { Badge } from '@/components/elements/Badge'
import { ComponentProps } from 'react'

const meta: Meta<typeof Badge> = {
  title: 'elements/Badge',
  component: Badge,
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

type Story = StoryObj<typeof Badge>

const BadgeWithHooks = ({ count }: ComponentProps<typeof Badge>) => {
  return (
    <Badge count={count}>
      <Avatar />
    </Badge>
  )
}

export const Primary: Story = {
  args: {
    count: 1
  },
  render: (args) => <BadgeWithHooks {...args} />
}
