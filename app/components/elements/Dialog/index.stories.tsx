import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/buttons/Button";
import { Dialog, useDialog } from "@/components/elements/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "elements/Dialog",
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const DialogWithHooks = () => {
  const dialog = useDialog();
  return (
    <>
      <Button onClick={dialog.open}>Dialog</Button>
      <Dialog {...dialog}>
        Dialog
        <Button onClick={dialog.close}>Close</Button>
      </Dialog>
    </>
  );
};

export const Primary: Story = {
  render: () => <DialogWithHooks />,
};
