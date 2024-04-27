import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { ComponentProps } from 'react'

const meta: Meta<typeof Button> = {
  title: 'elements/CircularProgress',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

const Render = ({ children }: ComponentProps<typeof Button>) => {
  return <Button loading>{children}</Button>
}

export const Default: Story = {
  args: {
    children: 'CircularProgress'
  },
  render: (args) => <Render {...args} />
}
