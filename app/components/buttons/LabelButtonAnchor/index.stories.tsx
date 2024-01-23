import type { Meta, StoryObj } from "@storybook/react";

import LabelButtonAnchor from "./index";

const meta: Meta<typeof LabelButtonAnchor> = {
  title: "LabelButtonAnchor",
  component: LabelButtonAnchor,
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

type Story = StoryObj<typeof LabelButtonAnchor>;

export const Primary: Story = {
  args: {
    theme: "primary",
    children: "LabelButtonAnchor",
    href: "/",
  },
};
