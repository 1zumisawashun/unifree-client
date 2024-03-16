import { Nl2br } from '@/components/elements/Nl2br'
import { faq } from '@/features/faq/faq.constant'
import 'server-only'

export function Faq() {
  return (
    <main>
      <Nl2br>{faq}</Nl2br>
    </main>
  )
}
