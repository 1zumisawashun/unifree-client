import type { Meta, StoryObj } from "@storybook/react";

import { AddIcon, EditIcon } from "../../elements/SvgIcon";
import TextButtonAnchor from "./index";

const meta: Meta<typeof TextButtonAnchor> = {
  title: "TextButtonAnchor",
  component: TextButtonAnchor,
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

type Story = StoryObj<typeof TextButtonAnchor>;

export const Primary: Story = {
  args: {
    theme: "primary",
    children: "TextButtonAnchor",
  },
};

export const PrimaryWithPrefix: Story = {
  args: {
    theme: "primary",
    children: "TextButtonAnchor",
    prefix: <AddIcon />,
  },
};

export const PrimaryWithSuffix: Story = {
  args: {
    theme: "primary",
    children: "TextButtonAnchor",
    suffix: <EditIcon />,
  },
};
