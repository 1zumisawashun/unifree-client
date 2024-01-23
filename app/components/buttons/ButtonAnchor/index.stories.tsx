import type { Meta, StoryObj } from "@storybook/react";

import { AddIcon, EditIcon } from "../../elements/SvgIcon";
import { ButtonAnchor } from "./index";

const meta: Meta<typeof ButtonAnchor> = {
  title: "ButtonAnchor",
  component: ButtonAnchor,
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

type Story = StoryObj<typeof ButtonAnchor>;

export const Primary: Story = {
  args: {
    variant: "contained",
    theme: "primary",
    children: "ButtonAnchor",
  },
};

export const PrimaryWithPrefix: Story = {
  args: {
    variant: "contained",
    theme: "primary",
    children: "ButtonAnchor",
    prefix: <AddIcon />,
  },
};

export const PrimaryWithSuffix: Story = {
  args: {
    variant: "contained",
    theme: "primary",
    children: "ButtonAnchor",
    suffix: <EditIcon />,
  },
};
