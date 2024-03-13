import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { FixedFooterContainer } from '@/features/product/ProductDetail/components/FixedFooterContainer'
import { prismaProductFindUnique } from '@/features/product/hooks/prismaProductFindUnique'
import { auth } from '@/functions/helpers/nextAuth/server'
import { Metadata } from 'next'

const title = 'Product Detail'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default async function Layout({
  params,
  children
}: {
  params: { id: string }
  children: React.ReactNode
}) {
  await prismaProductFindUnique({ params })

  const { session } = await auth()

  const userId = session?.user.id

  return (
    <>
      <LayoutContainer hasFooter={!!userId}>
        <SubHeader title={title} href="/products">
          {children}
        </SubHeader>
      </LayoutContainer>
      {userId && <FixedFooterContainer userId={userId} productId={params.id} />}
    </>
  )
}
