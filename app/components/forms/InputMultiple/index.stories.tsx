import type { Meta, StoryObj } from '@storybook/react'

import { InputCheckbox } from '@/components/forms/InputCheckbox'
import { InputMultiple } from '@/components/forms/InputMultiple'
import { InputRadio } from '@/components/forms/InputRadio'

import { ComponentProps } from 'react'

const meta: Meta<typeof InputMultiple> = {
  title: 'forms/InputMultiple',
  component: InputMultiple,
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

type Story = StoryObj<typeof InputMultiple>

const InputCheckboxWithHooks = (
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

const InputRadioWithHooks = (props: ComponentProps<typeof InputMultiple>) => {
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
  { value: 2, label: 'option2' }
]

export const Checkbox: Story = {
  args: {
    label: 'カテゴリー',
    description: '1つ以上を選択してください',
    isRequired: true,
    error: '',
    direction: 'column'
  },
  render: (args) => <InputCheckboxWithHooks {...args} />
}

export const RadioButton: Story = {
  args: {
    label: 'カテゴリー',
    description: '1つ以上を選択してください',
    isRequired: true,
    error: '',
    direction: 'column'
  },
  render: (args) => <InputRadioWithHooks {...args} />
}
