import type { Meta, StoryObj } from "@storybook/react";

import IconButtonGroup from "./index";

const meta: Meta<typeof IconButtonGroup> = {
  title: "IconButtonGroup",
  component: IconButtonGroup,
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

type Story = StoryObj<typeof IconButtonGroup>;

export const Primary: Story = {
  args: {},
};
