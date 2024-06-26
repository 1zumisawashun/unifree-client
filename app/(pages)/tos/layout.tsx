import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { Metadata } from 'next'

const title = 'Terms of Service'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SubHeader title={title} href="/">
        {children}
      </SubHeader>
    </LayoutContainer>
  )
}
