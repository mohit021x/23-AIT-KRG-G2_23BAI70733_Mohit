import './App.css'
import { FixWithFunctionalUpdate } from './components/FixWithFunctionalUpdate'
import { StaleClosureBug } from './components/StaleClosureBug'

function App() {
  return (
    <>
      <StaleClosureBug/>
      <FixWithFunctionalUpdate/>
    </>
  )
}

export default App
