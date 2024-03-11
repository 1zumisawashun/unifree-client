import type { Meta, StoryObj } from "@storybook/react";

import { InputRadio } from "@/components/forms/InputRadio";
import { ComponentProps } from "react";

const meta: Meta<typeof InputRadio> = {
  title: "forms/InputRadio",
  component: InputRadio,
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

type Story = StoryObj<typeof InputRadio>;

const InputRadioWithHooks = (props: ComponentProps<typeof InputRadio>) => {
  return <InputRadio {...props} />;
};

export const Primary: Story = {
  args: {
    children: "InputRadio",
    disabled: false,
  },
  render: (args) => <InputRadioWithHooks {...args} />,
};

export const PrimaryWithCard: Story = {
  args: {
    children: "InputRadio",
    disabled: false,
    variant: "card",
  },
  render: (args) => <InputRadioWithHooks {...args} />,
};
