'use client'

import { Button } from '@/components/buttons/Button'
import { useState } from 'react'

export default function ClientComponent(props: { render: React.FC }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
      {props.render}
    </>
  )
}
