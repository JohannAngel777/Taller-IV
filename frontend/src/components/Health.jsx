import { useEffect, useState } from 'react'
import './Health.css'

function Health() {
  const [estado, setEstado] = useState('cargando')
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    const consultarHealth = async () => {
      try {
        const res = await fetch('/api/health')
        if (!res.ok) throw new Error('Respuesta no válida')
        const data = await res.json()
        setMensaje(data.message)
        setEstado('ok')
      } catch (error) {
        setMensaje('No se pudo conectar con el API')
        setEstado('error')
      }
    }

    consultarHealth()
  }, [])

  return (
    <section className="health-section">
      <div className={`health-box ${estado}`}>
        <h4>Estado del API</h4>
        <p>{mensaje || 'Verificando...'}</p>
      </div>
    </section>
  )
}

export default Health
