import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { auth } from '@/functions/helpers/nextAuth/server'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const title = 'Shopping Cart'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

// FIXME: layout.tsxでauthハンドリングはNGだが応急処置で設定
export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const { session } = await auth()

  if (!session?.user.isAdmin) {
    return notFound()
  }

  return <LayoutContainer>{children}</LayoutContainer>
}
