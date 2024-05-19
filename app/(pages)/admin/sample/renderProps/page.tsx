import { Composition } from './components/Composition/Composition'
import { PropsDrilling } from './components/PropsDrilling/PropsDrilling'
// import { RenderProps } from './components/RenderProps/RenderProps'

export default function Page() {
  return (
    <>
      <Composition />
      <PropsDrilling />
      {/* <RenderProps /> */}
    </>
  )
}
