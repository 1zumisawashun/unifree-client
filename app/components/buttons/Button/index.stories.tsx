import type { Meta, StoryObj } from '@storybook/react'

import { AddIcon, EditIcon } from '@/components/elements/SvgIcon'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  title: 'buttons/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button'
  }
}

export const PrimaryWithPrefix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button',
    prefix: <AddIcon />
  }
}

export const PrimaryWithSuffix: Story = {
  args: {
    variant: 'contained',
    theme: 'primary',
    disabled: false,
    loading: false,
    children: 'Button',
    suffix: <EditIcon />
  }
}
