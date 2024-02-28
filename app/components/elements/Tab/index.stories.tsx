import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "./index";

const meta: Meta<typeof Tab> = {
  title: "elements/Tab",
  component: Tab,
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

type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  args: {
    items: [
      { value: "FAQ", href: "/help/faq" },
      { value: "Terms", href: "/help/tos" },
    ],
  },
};
