import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

export function PropsDrilling() {
  return <ClientComponent propsDrilling={<ServerComponent />} />
}
