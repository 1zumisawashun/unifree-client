import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { Metadata } from 'next'

const title = 'Admin Matches'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutContainer>
      <SubHeader title={title} href="/admin">
        {children}
      </SubHeader>
    </LayoutContainer>
  )
}
