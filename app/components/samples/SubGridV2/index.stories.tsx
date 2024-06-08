import type { Meta, StoryObj } from '@storybook/react'

import { SubGridV2 } from './index'

const meta: Meta<typeof SubGridV2> = {
  title: 'samples/SubGridV2',
  component: SubGridV2
}

export default meta

type Story = StoryObj<typeof SubGridV2>

export const Default: Story = {
  args: {}
}
