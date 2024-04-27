import type { Meta, StoryObj } from '@storybook/react'

import { AddIcon, EditIcon } from '@/components/elements/SvgIcon'
import { ButtonAnchor } from './index'

const meta: Meta<typeof ButtonAnchor> = {
  title: 'buttons/ButtonAnchor',
  component: ButtonAnchor
}

export default meta

type Story = StoryObj<typeof ButtonAnchor>

export const Default: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    children: 'ButtonAnchor',
    href: '/'
  }
}

export const DefaultWithPrefix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    children: 'ButtonAnchor',
    prefix: <AddIcon />,
    href: '/'
  }
}

export const DefaultWithSuffix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    children: 'ButtonAnchor',
    suffix: <EditIcon />,
    href: '/'
  }
}
