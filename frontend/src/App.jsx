import { Container } from 'reactstrap'
import Health from './components/Health'
import Info from './components/Info'

function App() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Taller IV</h1>
      <Health />
      <Info />
    </Container>
  )
}

export default App
