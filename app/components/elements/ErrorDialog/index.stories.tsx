import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { useDialog } from '@/functions/hooks/useDialog'
import { ErrorDialog } from './index'

const meta: Meta<typeof ErrorDialog> = {
  title: 'elements/ErrorDialog',
  component: ErrorDialog
}

export default meta

type Story = StoryObj<typeof ErrorDialog>

const Render = () => {
  const dialog = useDialog()
  return (
    <>
      <Button onClick={dialog.open}>Error Dialog</Button>
      <ErrorDialog dialog={dialog} message="error message" domain="ログイン" />
    </>
  )
}

export const Default: Story = {
  render: () => <Render />
}
