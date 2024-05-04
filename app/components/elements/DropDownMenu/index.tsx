import { useAnimationEnd } from '@/functions/hooks/useAnimationEnd'
import { useOuterClick } from '@/functions/hooks/useOuterClick'
import {
  autoUpdate,
  computePosition,
  offset,
  Placement
} from '@floating-ui/dom'
import { ElementRef, FC, RefObject, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

type DropDownMenuProps<T> = {
  onClose: () => void
  open: boolean
  placement?: Placement
  referenceRef: RefObject<ElementRef<'button' | 'input'>>
  rows: T[]
  render: FC<T>
}

export const BLOCK_NAME = 'dropdown-menu'

const FADE_IN_ANIMATION = 'fade-in'

export function DropDownMenu<T extends { id: number | string }>({
  onClose,
  open,
  placement = 'bottom-end',
  referenceRef,
  ...props
}: DropDownMenuProps<T>) {
  const floatingRef = useRef<ElementRef<'ul'>>(null)

  const [fadeOut, setFadeOut] = useState(false)

  useOuterClick([floatingRef, referenceRef], () => {
    if (!open) return
    setFadeOut(true)
  })

  /**
   * fade-outアニメーションが終わったらリセットする
   */
  useAnimationEnd(floatingRef, (e) => {
    if (e.animationName.includes(FADE_IN_ANIMATION)) return
    setFadeOut(false)
    onClose()
  })

  /**
   * openの挙動を監視するのはuseEffect的には良くないので解決策があれば変更する
   * @see https://floating-ui.com/docs/computePosition
   * @see https://floating-ui.com/docs/offset#offset
   */
  useEffect(() => {
    if (!open) return

    const referenceEl = referenceRef.current!
    const floatingEl = floatingRef.current!

    const cleanup = autoUpdate(referenceEl, floatingEl, async () => {
      const { x, y } = await computePosition(referenceEl, floatingEl, {
        placement,
        middleware: [offset(8)]
      })

      Object.assign(floatingEl.style, {
        left: `${x}px`,
        top: `${y}px`
      })
    })

    return () => cleanup()
  }, [referenceRef, floatingRef, open, placement])

  if (!open) return null

  return (
    <ul
      className={styles[`${BLOCK_NAME}`]}
      data-is-fade-out={fadeOut}
      ref={floatingRef}
      role="menu"
    >
      {props.rows.map((row) => (
        <li key={row.id}>
          <props.render {...row} />
        </li>
      ))}
    </ul>
  )
}
