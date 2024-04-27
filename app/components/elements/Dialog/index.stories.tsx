import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/buttons/Button'
import { Dialog } from '@/components/elements/Dialog'
import { useDialog } from '@/functions/hooks/useDialog'

const meta: Meta<typeof Dialog> = {
  title: 'elements/Dialog',
  component: Dialog
}

export default meta

type Story = StoryObj<typeof Dialog>

const Render = () => {
  const dialog = useDialog()
  return (
    <>
      <Button onClick={dialog.open}>Dialog</Button>
      <Dialog {...dialog}>
        <h1>Dialog</h1>
        <Button onClick={dialog.close}>Close</Button>
      </Dialog>
    </>
  )
}

export const Default: Story = {
  render: () => <Render />
}
