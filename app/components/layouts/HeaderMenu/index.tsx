'use client'

import { UnstyledButton } from '@/components/buttons'
import { Avatar } from '@/components/elements/Avatar'
import { DropDownMenu } from '@/components/elements/DropDownMenu'
import { profileRoutes } from '@/functions/helpers/getRoutes'
import { useDisclosure } from '@/functions/hooks/useDisclosure'
import { useRouter } from 'next/navigation'
import { ElementRef, useEffect, useRef } from 'react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'profile-menu'

export const HeaderMenu = ({
  userId,
  isAuthenticated
}: {
  userId?: number
  isAuthenticated: boolean
}) => {
  const referenceRef = useRef<ElementRef<'button'>>(null)

  const routes = profileRoutes({ isAuthenticated })

  const dropDownMenu = useDisclosure()
  const { push, prefetch } = useRouter()

  useEffect(() => {
    routes.map((route) => prefetch(route.href))
  }, [prefetch, routes])

  return (
    <>
      <UnstyledButton
        onClick={dropDownMenu.toggle}
        ref={referenceRef}
        aria-label="avatar"
        className={styles[`${BLOCK_NAME}-reference-button`]}
      >
        <Avatar id={userId} />
      </UnstyledButton>
      <DropDownMenu
        onClose={dropDownMenu.close}
        open={dropDownMenu.isOpen}
        referenceRef={referenceRef}
        rows={routes}
        placement="bottom-end"
        render={(route) => (
          <UnstyledButton
            className={styles[`${BLOCK_NAME}-anchor-button`]}
            onClick={() => {
              push(route.href), dropDownMenu.close()
            }}
          >
            {route.value}
          </UnstyledButton>
        )}
      />
    </>
  )
}
