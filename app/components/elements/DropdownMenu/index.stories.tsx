import type { Meta, StoryObj } from "@storybook/react";

import { UnstyledButton } from "@/components/buttons/UnstyledButton";
import { Avatar } from "@/components/elements/Avatar";
import { DropDownMenu } from "@/components/elements/DropDownMenu";
import { useDisclosure } from "@/functions/hooks/useDisclosure";
import { ComponentProps, ElementRef, useRef } from "react";

const meta: Meta<typeof DropDownMenu> = {
  title: "elements/DropDownMenu",
  component: DropDownMenu,
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

type Story = StoryObj<typeof DropDownMenu>;

const DropDownMenuWithHooks = (props: ComponentProps<typeof DropDownMenu>) => {
  const referenceRef = useRef<ElementRef<"button">>(null);

  const routes = [
    {
      id: 1,
      href: "/",
      value: "Home",
    },
    {
      id: 2,
      href: "/profile",
      value: "Profile",
    },
    {
      id: 3,
      href: "/settings",
      value: "Settings",
    },
    {
      id: 4,
      href: "/logout",
      value: "Logout",
    },
  ];
  const { isOpen, close, toggle } = useDisclosure();
  return (
    <>
      <UnstyledButton onClick={toggle} ref={referenceRef}>
        <Avatar />
      </UnstyledButton>
      <DropDownMenu
        {...props}
        onClose={close}
        open={isOpen}
        referenceRef={referenceRef}
        rows={routes}
        render={(route) => <p>{route.value}</p>}
      />
    </>
  );
};

export const Primary: Story = {
  args: {
    placement: "bottom",
  },
  render: (args) => <DropDownMenuWithHooks {...args} />,
};
