import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './index'

const meta: Meta<typeof Label> = {
  title: 'elements/Label',
  component: Label,
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

type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    children: 'Label'
  }
}
