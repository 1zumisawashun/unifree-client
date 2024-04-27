import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { prismaCategoryFindMany } from '@/features/admin/category/hooks/prismaCategoryFindMany'
import { Metadata } from 'next'

const title = 'Admin Category'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  await prismaCategoryFindMany()

  return (
    <LayoutContainer>
      <SubHeader title={title} href="/admin">
        {children}
      </SubHeader>
    </LayoutContainer>
  )
}
