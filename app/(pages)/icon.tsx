import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

// Route segment config
export const runtime = "edge";

const size = {
  width: 32,
  height: 32,
};

/* eslint-disable */

export default async function Icon() {
  const src = (await fetch(
    new URL("../assets/images/image_logo_main.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer())) as string;

  return new ImageResponse(<img width="32" height="32" src={src} />, {
    ...size,
  });
}
