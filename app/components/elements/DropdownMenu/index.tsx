'use client'

import { StackPosition } from '@/functions/types/Common'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useOuterClick } from '@/functions/hooks/useOuterClick'
import { getOffset } from './getOffset'
import styles from './styles.module.scss'

type ListProps = {
  id?: string
  onClose: () => void
  open: boolean
  position?: StackPosition
  triggerRef: React.RefObject<HTMLButtonElement>
  children: React.ReactNode
}

export const BLOCK_NAME = 'dropdown-menu'

const FADE_IN_ANIMATION = 'fade-in'

type Rect = { width: number; height: number }

const initRect = { width: 0, height: 0 }

function List({
  children,
  id,
  onClose,
  open,
  position = 'bottomCenter',
  triggerRef
}: ListProps) {
  const targetRef = useRef<HTMLUListElement>(null)

  const [fadeOut, setFadeOut] = useState(false)

  const [triggerRect, setTriggerRect] = useState<Rect>(initRect)
  const [targetRect, setTargetRect] = useState<Rect>(initRect)

  useOuterClick([targetRef, triggerRef], () => {
    if (!open) return
    setFadeOut(true)
  })

  // const handleInnerClick = useCallback(() => {
  //   setFadeOut(true)
  // }, [setFadeOut])

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (event.animationName.includes(FADE_IN_ANIMATION)) return
      onClose()
      setFadeOut(false)
    },
    [onClose, setFadeOut]
  )

  useEffect(() => {
    const target = targetRef.current
    target?.addEventListener('animationend', handleAnimationEnd, false)

    return () =>
      target?.removeEventListener('animationend', handleAnimationEnd, false)
  }, [targetRef, handleAnimationEnd])

  // Triggerの縦横幅を取得
  useEffect(() => {
    if (!triggerRef.current) return

    const { height, width } = triggerRef.current.getBoundingClientRect()
    setTriggerRect({ height, width })
  }, [triggerRef])

  // Targetの縦幅を取得
  useEffect(() => {
    if (!open) return
    if (!targetRef.current) return

    const { height, width } = targetRef.current.getBoundingClientRect()
    setTargetRect({ height, width })
  }, [open])

  if (!open) return null

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return (
    <ul
      id={id}
      // onClick={handleInnerClick}
      className={clsx(
        styles[`${BLOCK_NAME}`],
        styles[`${BLOCK_NAME}-${position}`]
      )}
      data-is-fade-out={fadeOut}
      ref={targetRef}
      role="menu"
      style={getOffset({ triggerRect, targetRect, position })}
    >
      {children}
    </ul>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className={styles[`${BLOCK_NAME}-flame`]}>{children}</div>
}

export const DropDownMenu = {
  Frame,
  List
}
