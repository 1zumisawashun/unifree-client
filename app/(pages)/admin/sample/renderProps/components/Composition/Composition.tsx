import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

export function Composition() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}
