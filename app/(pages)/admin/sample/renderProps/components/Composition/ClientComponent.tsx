'use client'

import { Button } from '@/components/buttons/Button'
import { useState } from 'react'

export default function ClientComponent({
  children
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
      {children}
    </>
  )
}
