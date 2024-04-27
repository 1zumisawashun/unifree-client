import type { Meta, StoryObj } from '@storybook/react'

import { AddIcon, EditIcon } from '@/components/elements/SvgIcon'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  title: 'buttons/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button'
  }
}

export const DefaultWithPrefix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button',
    prefix: <AddIcon />
  }
}

export const DefaultWithSuffix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button',
    suffix: <EditIcon />
  }
}
