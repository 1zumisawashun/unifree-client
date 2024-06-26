import { ImageResponse } from 'next/og'
import { CSSProperties } from 'react'
// App router includes @vercel/og.
// No need to install it.

// Route segment config
export const runtime = 'edge'

const size = {
  width: 1200,
  height: 630
}

const style: CSSProperties = {
  display: 'flex',
  background: '#506c9c',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

/* eslint-disable */
export default async function Image() {
  const src = (await fetch(
    new URL('../assets/images/image_logo_main.jpg', import.meta.url)
  ).then((res) => res.arrayBuffer())) as string

  return new ImageResponse(
    (
      <div style={style}>
        <img width="630" height="630" src={src} />
      </div>
    ),
    {
      ...size
    }
  )
}
