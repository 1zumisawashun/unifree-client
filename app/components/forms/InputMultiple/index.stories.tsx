import type { Meta, StoryObj } from '@storybook/react'

import { InputCheckbox } from '@/components/forms/InputCheckbox'
import { InputMultiple } from '@/components/forms/InputMultiple'
import { InputRadio } from '@/components/forms/InputRadio'

import { ComponentProps } from 'react'

const meta: Meta<typeof InputMultiple> = {
  title: 'forms/InputMultiple',
  component: InputMultiple
}

export default meta

type Story = StoryObj<typeof InputMultiple>

const RenderMultipleCheckbox = (
  props: ComponentProps<typeof InputMultiple>
) => {
  return (
    <InputMultiple
      {...props}
      rows={options}
      render={(option) => (
        <InputCheckbox value={option.value}>{option.label}</InputCheckbox>
      )}
    />
  )
}

const RenderMultipleRadio = (props: ComponentProps<typeof InputMultiple>) => {
  return (
    <InputMultiple
      {...props}
      rows={options}
      render={(option) => (
        <InputRadio value={option.value}>{option.label}</InputRadio>
      )}
    />
  )
}

const options = [
  { value: 1, label: 'option1' },
  { value: 2, label: 'option2' },
  { value: 3, label: 'option3' }
]

export const MultipleCheckbox: Story = {
  args: {
    label: 'カテゴリー',
    description: '1つ以上を選択してください',
    isRequired: true,
    error: '',
    direction: 'column'
  },
  render: (args) => <RenderMultipleCheckbox {...args} />
}

export const MultipleRadio: Story = {
  args: {
    label: 'カテゴリー',
    description: '1つ以上を選択してください',
    isRequired: true,
    error: '',
    direction: 'column'
  },
  render: (args) => <RenderMultipleRadio {...args} />
}
