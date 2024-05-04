'use client'

import { ElementRef, useCallback, useRef } from 'react'

export const useDialog = () => {
  const ref = useRef<ElementRef<'dialog'>>(null)

  const open = useCallback(() => ref.current?.showModal(), [])
  const close = useCallback(() => ref.current?.close(), [])

  return { ref, open, close }
}
