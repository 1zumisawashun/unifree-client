'use client'

import { ElementRef, useCallback, useRef } from 'react'

export const useDialog = () => {
  const ref = useRef<ElementRef<'dialog'>>(null)

  const open = useCallback(() => {
    if (ref.current) {
      document.body.style.overflow = 'hidden'
      ref.current.showModal()
    }
  }, [])

  const close = useCallback(() => {
    if (ref.current) {
      document.body.style.overflow = 'auto'
      ref.current.close()
    }
  }, [])

  return { ref, open, close }
}
