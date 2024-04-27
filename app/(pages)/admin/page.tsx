import { LayoutContainer } from '@/components/layouts/LayoutContainer'
import { SubHeader } from '@/components/layouts/SubHeader'
import { AdminIndex } from '@/features/admin/index'
import { Metadata } from 'next'

const title = 'Admin'

export const metadata: Metadata = {
  title: `UniFli | ${title}`
}

export default async function Page() {
  return (
    <LayoutContainer>
      <SubHeader title={title}>
        <AdminIndex />
      </SubHeader>
    </LayoutContainer>
  )
}
