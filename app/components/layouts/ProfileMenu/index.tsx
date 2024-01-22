"use client";
import { TextButtonAnchor } from "@/components/buttons";
import { Avatar } from "@/components/elements/Avatar";
import { DropdownMenu } from "@/components/elements/DropdownMenu";
import { FlexWrapper } from "@/components/elements/FlexWrapper";
import { useRef, useState } from "react";
import cover from "../../../assets/images/image-cover.jpg";

export const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <DropdownMenu.Frame>
      <button onClick={onClick} ref={triggerRef}>
        <Avatar
          {...{
            src: cover,
            alt: "",
            blurredDataUrl: undefined,
            width: undefined,
            height: undefined,
          }}
        ></Avatar>
      </button>
      <DropdownMenu.List
        onClose={onClose}
        open={open}
        position="bottomRight"
        triggerRef={triggerRef}
      >
        <FlexWrapper direction="column">
          <TextButtonAnchor href="/notes" size="large">
            Memo
          </TextButtonAnchor>
          <TextButtonAnchor href="/help/faq" size="large">
            FAQ
          </TextButtonAnchor>
          <TextButtonAnchor href="/settings" size="large">
            Setting
          </TextButtonAnchor>
          <TextButtonAnchor href="/gallery" size="large">
            Gallery
          </TextButtonAnchor>
          <TextButtonAnchor href="/login" size="large">
            Login
          </TextButtonAnchor>
        </FlexWrapper>
      </DropdownMenu.List>
    </DropdownMenu.Frame>
  );
};
