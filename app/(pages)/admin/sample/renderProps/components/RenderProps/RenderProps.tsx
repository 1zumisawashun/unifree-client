import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

export function RenderProps() {
  return <ClientComponent render={() => <ServerComponent />} />
}
