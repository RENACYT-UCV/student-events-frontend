import React from 'react'
import './HistorialEventDetail.css'
import { useParams, useNavigate } from 'react-router-dom'
import { eventosEjemplo } from '../../lib/data/history/events-example'
// Header is now handled by MainLayout

const EventoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const evento = eventosEjemplo.find(e => e.id === id)

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
    {/* Botón Regresar fuera de la tarjeta */}
    <div className="back-button-wrapper">
      <button className="back-button1" onClick={() => navigate(-1)}>
        ← Regresar
      </button>
    </div>

    {/* Contenido de la tarjeta */}
    <div className="detalle-card">
      <img src={evento.image} alt={evento.title} className="detalle-image" />
      <span className="detalle-type">{evento.type}</span>
      <div className="detalle-title">{evento.title}</div>
      <div className="detalle-datetime">
        <span className="icon">📅</span> {evento.date}
        <span className="icon">🕒</span> {evento.hour}
        <span className="icon detalle-location">📍 Los Olivos - Lima</span>
      </div>
      <div className="detalle-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
      <div className="detalle-status">
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
