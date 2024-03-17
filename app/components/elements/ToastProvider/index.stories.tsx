import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { useToast } from '@/components/elements/Toast/hooks/useToast'
import { ToastProvider } from '@/components/elements/ToastProvider'

const meta: Meta<typeof Button> = {
  title: 'elements/ToastProvider',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
  decorators: [
    (Story) => (
      <ToastProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ToastProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Button>

const ToastWithHooks = () => {
  const { showToast } = useToast()

  return (
    <Button
      onClick={() =>
        showToast({ message: 'カートに追加しました', theme: 'success' })
      }
    >
      Toast
    </Button>
  )
}

export const Primary: Story = {
  render: () => <ToastWithHooks />
}
