import { useEffect, useState } from 'react'
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from 'reactstrap'

function Info() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const consultarInfo = async () => {
      try {
        const res = await fetch('/api/info')
        if (!res.ok) throw new Error('Respuesta no válida')
        const data = await res.json()
        setInfo(data)
      } catch (err) {
        setError(true)
      }
    }

    consultarInfo()
  }, [])

  if (error) {
    return <Alert color="danger">No se pudo obtener la información del API</Alert>
  }

  if (!info) {
    return <Spinner color="primary" />
  }

  return (
    <div>
      <Alert color="success">{info.message}</Alert>

      <Row>
        {info.integrantes.map((persona) => (
          <Col md="6" lg="4" key={persona.nombre} className="mb-3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">{persona.nombre}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {persona.carrera}
                </CardSubtitle>
                <CardText>Edad: {persona.edad} años</CardText>
                <Badge color="primary">
                  Materias aprobadas: {persona.materiasAprobadas}
                </Badge>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Info
