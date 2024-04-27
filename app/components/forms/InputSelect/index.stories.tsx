import type { Meta, StoryObj } from '@storybook/react'

import { InputSelect } from '@/components/forms/InputSelect'
import { ComponentProps } from 'react'

const meta: Meta<typeof InputSelect> = {
  title: 'forms/InputSelect',
  component: InputSelect
}

export default meta

type Story = StoryObj<typeof InputSelect>

const Render = (props: ComponentProps<typeof InputSelect>) => {
  return <InputSelect {...props} />
}

export const Primary: Story = {
  args: {
    options: [
      { label: '神奈川県', value: '神奈川県' },
      { label: '東京都', value: '東京都' },
      { label: '埼玉県', value: '埼玉県' }
    ],
    label: 'labellabellabel',
    description: 'descriptiondescriptiondescription',
    isRequired: true,
    isOptioned: false,
    disabled: false
  },
  render: (args) => <Render {...args} />
}
