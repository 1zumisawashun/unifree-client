import { StackPosition } from "@/functions/types/Common";

type Rect = { width: number; height: number };

export const getOffset = ({
  triggerRect,
  targetRect,
  position,
}: {
  triggerRect: Rect;
  targetRect: Rect;
  position: StackPosition;
}) => {
  let top;
  let bottom;
  let left;
  let right;

  if (["topLeft", "topCenter", "topRight"].includes(position)) {
    bottom = `${triggerRect.height}px`;
  }
  if (["topCenter", "bottomCenter"].includes(position)) {
    left = `-${(targetRect.width - triggerRect.width) / 2}px`;
  }
  if (["rightCenter", "leftCenter"].includes(position)) {
    top = `-${(targetRect.height - triggerRect.height) / 2}px`;
  }
  if (["bottomLeft", "bottomCenter", "bottomRight"].includes(position)) {
    top = `${triggerRect.height}px`;
  }

  return { top, right, bottom, left };
};
