import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SearchBar } from '@/components/layouts/SearchBar'
import { SubHeader } from '@/components/layouts/SubHeader'
import { Metadata } from 'next'

const title = 'Product List'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SubHeader title={title} href="/">
        <SearchBar />
        {children}
      </SubHeader>
    </LayoutContainer>
  )
}
