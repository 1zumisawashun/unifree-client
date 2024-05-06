import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { ToastProviderV2 } from './index'
import { useToastAction } from './useToast'

const meta: Meta<typeof Button> = {
  title: 'samples/ToastProviderV2',
  component: Button,
  decorators: [
    (Story) => (
      <ToastProviderV2>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ToastProviderV2>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Button>

const Render = () => {
  const { showToast } = useToastAction()

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
