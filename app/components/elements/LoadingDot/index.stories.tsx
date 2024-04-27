import type { Meta, StoryObj } from '@storybook/react'

import { LoadingDot } from './index'

const meta: Meta<typeof LoadingDot> = {
  title: 'elements/LoadingDot',
  component: LoadingDot
}

export default meta

type Story = StoryObj<typeof LoadingDot>

export const Default: Story = {
  args: {}
}
