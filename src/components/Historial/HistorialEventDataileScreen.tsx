import React, { useState, useEffect } from 'react'
import './HistorialEventDetail.css'
import { useParams, useNavigate } from 'react-router-dom'
import { eventosEjemplo } from '../../lib/data/history/events-example'
import { useAccessToken } from '@/store/auth.store'

const EventoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const accessToken = useAccessToken()
  const [evento, setEvento] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchEventDetail = async () => {
      if (!id || !accessToken) {
        setIsLoading(false)
        return // Don't fetch if id or accessToken is not available
      }
      setIsLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/api/event/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del evento')
        }
        const data = await response.json()
        // Transform data if necessary to match the expected structure
        setEvento(data)
      } catch (error) {
        console.error('Error al cargar los detalles del evento:', error)
        setEvento(null) // Clear event on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchEventDetail()
  }, [id, accessToken]) // Depend on id and accessToken

  if (isLoading) {
    return <div>Cargando detalles del evento...</div>
  }

  if (!evento) {
    return <div>Evento no encontrado</div>
  }

  const handleMenuClick = () => {
    console.log('Abrir menú')
  }
  const handleNotificationClick = () => {
    console.log('Abrir notificaciones')
  }

  const handleProfileClick = () => {
    console.log('Abrir perfil')
  }

  return (
    <div className="evento-detalle-container">

      <button className="back-button" onClick={() => navigate(-1)}>
          ← Regresar
        </button>
      {/* Header is now handled by MainLayout */}

      <div className="detalle-card">
        
        <img src={evento.image} alt={evento.title} className="detalle-image" />
        <span className="detalle-type">{evento.type}</span>
        <div className="detalle-title">{evento.title}</div>
        <div className="detalle-datetime">
          <span className="icon">📅</span> {evento.date}
          <span className="icon">🕒</span> {evento.hour}
          <span className="icon detalle-location">📍 Los Olivos - Lima</span>
        </div>
        <div className="detalle-description">{evento.description}</div>
        <div className="detalle-status">
          {/* You might need to adapt this based on the actual event data structure */}
          <span className="status-tag pending">
            <span className="status-icon">🕒</span>
            Pendiente
          </span>
          <span className="status-tag no-attend">
            <span className="status-icon">🚫</span>
            No asistió
          </span>
        </div>
      </div>
    </div>
  )
}

export default EventoDetalle
