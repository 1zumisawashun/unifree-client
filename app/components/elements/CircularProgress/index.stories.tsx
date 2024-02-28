import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/buttons/Button";
import { ComponentProps } from "react";

const meta: Meta<typeof Button> = {
  title: "elements/CircularProgress",
  component: Button,
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

type Story = StoryObj<typeof Button>;

const CircularProgressWithHooks = ({
  children,
}: ComponentProps<typeof Button>) => {
  return <Button loading>{children}</Button>;
};

export const Primary: Story = {
  args: {
    children: "CircularProgress",
  },
  render: (args) => <CircularProgressWithHooks {...args} />,
};
