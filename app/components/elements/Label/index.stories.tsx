import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './index'

const meta: Meta<typeof Label> = {
  title: 'elements/Label',
  component: Label
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label'
  }
}
