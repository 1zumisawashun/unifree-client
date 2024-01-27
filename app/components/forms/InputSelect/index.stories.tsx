import type { Meta, StoryObj } from "@storybook/react";

import { InputSelect } from "./index";

const meta: Meta<typeof InputSelect> = {
  title: "InputSelect",
  component: InputSelect,
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

type Story = StoryObj<typeof InputSelect>;

export const Primary: Story = {
  args: {
    options: [
      { label: "神奈川県", value: "神奈川県" },
      { label: "東京都", value: "東京都" },
      { label: "埼玉県", value: "埼玉県" },
    ],
    label: "labellabellabel",
    description: "descriptiondescriptiondescription",
    isRequired: true,
    isOptioned: false,
    disabled: false,
  },
};
