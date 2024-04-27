import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { useToast } from '@/components/elements/Toast/hooks/useToast'
import { ToastProvider } from '@/components/elements/ToastProvider'

const meta: Meta<typeof Button> = {
  title: 'elements/ToastProvider',
  component: Button,
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

const Render = () => {
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

export const Default: Story = {
  render: () => <Render />
}
