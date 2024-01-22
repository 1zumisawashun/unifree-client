"use client";
import { DropdownMenu } from "@/components/elements/DropdownMenu";
import { useRef, useState } from "react";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    console.log("log");
    setOpen(false);
  };
  return (
    <DropdownMenu.Frame>
      <button onClick={onClick} ref={triggerRef}>
        ハンバーガーメニュー
      </button>
      <DropdownMenu.List
        onClose={onClose}
        open={open}
        position="bottomCenter"
        triggerRef={triggerRef}
      >
        <p onClick={() => alert("test")}>これはテストですよ</p>
        <p>これはテストですよ</p>
        <p>これはテストですよ</p>
        <p>これはテストですよ</p>
        <p>これはテストですよ</p>
      </DropdownMenu.List>
    </DropdownMenu.Frame>
  );
};
