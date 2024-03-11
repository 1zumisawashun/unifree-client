import { TabButton } from '@/components/elements/Tab'
import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { mypageRoutes } from '@/functions/helpers/getRoutes'
import { Metadata } from 'next'

const title = 'Mypage'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const routes = mypageRoutes()
  return (
    <LayoutContainer>
      <SubHeader title={title} href="/">
        <TabButton items={routes} />
        {children}
      </SubHeader>
    </LayoutContainer>
  )
}
