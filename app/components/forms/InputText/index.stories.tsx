import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "./index";

const meta: Meta<typeof InputText> = {
  title: "InputText",
  component: InputText,
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

type Story = StoryObj<typeof InputText>;

export const Main: Story = {
  args: {
    label: "label",
    description: "description",
    isRequired: true,
    isOptioned: false,
    disabled: false,
    placeholder: "placeholder",
  },
};

export const Error: Story = {
  args: {
    label: "label",
    description: "description",
    isRequired: true,
    isOptioned: false,
    disabled: false,
    placeholder: "placeholder",
    error: "error",
  },
};
