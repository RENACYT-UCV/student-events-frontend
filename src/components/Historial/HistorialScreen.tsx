import React, { useState, useEffect } from 'react'
import './HistorialScreen.css'
import { useNavigate } from 'react-router-dom'
import { eventosEjemplo, Evento } from '../../lib/data/history/events-example'
import { useAccessToken, useUserId } from '@/store/auth.store'
// Header is now handled by MainLayout

interface HistorialScreenProps {}

const HistorialScreen: React.FC<HistorialScreenProps> = () => {
  const [eventos, setEventos] = useState<Evento[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const accessToken = useAccessToken()
  const userId = useUserId()

  useEffect(() => {
    const fetchEventos = async () => {
      if (!userId || !accessToken) {
        setIsLoading(false)
        setError('No se pudo obtener el ID de usuario o el token de acceso')
        return // Don't fetch if userId or accessToken is not available
      }
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://student-events-backend-kypp.onrender.com/api/user/${userId}/event-history`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()

        if (!data || data.length === 0) {
          setEventos([])
          setIsLoading(false)
          return
        }

        // Transformar los datos recibidos al formato que espera el componente
        const eventosFormateados = data.map((registro: any) => {
          const fechaInicio = registro.event.eventDetails[0]?.startDate
            ? new Date(registro.event.eventDetails[0].startDate).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })
            : 'Sin fecha'

          const fechaFin = registro.event.eventDetails[0]?.endDate
            ? new Date(registro.event.eventDetails[0].endDate).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })
            : 'Sin fecha'

          const horaInicio = registro.event.eventDetails[0]?.startTime || 'Sin hora'
          const horaFin = registro.event.eventDetails[0]?.endTime || 'Sin hora'

          const tipoEvento = '' // Se establece como cadena vacía para no mostrar nada

          return {
            id: registro.event.id.toString(),
            title: registro.event.name || 'Sin título',
            date: `${fechaInicio} - ${fechaFin}`,
            hour: `${horaInicio} - ${horaFin}`,
            type: tipoEvento, // Usar el tipo de evento aquí
            status:
              registro.assistances && registro.assistances.length > 0
                ? registro.assistances[0].status === true
                  ? 'Asistió'
                  : 'No asistió'
                : 'Pendiente',
            asistence:
              registro.assistances && registro.assistances.length > 0
                ? registro.assistances[0].status === true
                  ? 'Asistió'
                  : 'No asistió'
                : 'Pendiente',
            image: registro.event.eventDetails[0]?.url || '',
            category: tipoEvento, // También actualizar la categoría
            location: registro.event.eventDetails[0]?.location || 'Sin ubicación',
            description: registro.event.eventDetails[0]?.description || 'Sin descripción'
          }
        })

        setEventos(eventosFormateados)
      } catch (error) {
        setError((error as Error).message || 'Error al cargar el historial')
      } finally {
        setIsLoading(false)
      }
    }

    fetchEventos()
  }, [userId, accessToken]) // Add dependencies to re-fetch when userId or accessToken changes

  const handleExportPDF = async () => {
    if (!userId || !accessToken) {
      console.error('User ID or Access Token not available')
      // Optionally, show a user-friendly message here
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://student-events-backend-kypp.onrender.com/pdf/usuario-eventos?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      if (!response.ok) {
        // Attempt to read error message from response if available
        const errorText = await response.text()
        throw new Error(
          `Error al generar el PDF: ${response.status} ${response.statusText} - ${errorText}`
        )
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `historial_eventos_usuario_${userId}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
      alert('PDF generado y descargado exitosamente.')
    } catch (error) {
      console.error('Error al exportar PDF:', error)
      alert(
        `Error al exportar PDF: ${(error as Error).message}. Por favor, inténtalo de nuevo más tarde.`
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleEventClick = (eventoId: string) => {
    navigate(`/evento/${eventoId}`)
  }

  const eventosFiltrados = eventos

  const agruparEventos = () => {
    const grupos = {
      'Historial de Eventos': [] as Evento[]
    }

    eventosFiltrados.forEach(evento => {
      grupos['Historial de Eventos'].push(evento)
    })

    return grupos
  }

  const eventosAgrupados = agruparEventos()
  if (isLoading) {
    return (
      <div className="historial-mobile-container">
        <div className="loading-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Cargando historial...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="historial-mobile-container">
      {/* Content */}
      <div className="mobile-content">
        <div className="historial-header-icon-container">
          <div className="historial-header-icon">
            <img src="/assets/images/historialIcon.gif" alt="CheckIconGIF" />
          </div>
        </div>

        {/* Title Section */}
        <div className="title-container">
          <div className="title-section">
            <div className="title-left">
              <h2 className="main-title">HISTORIAL</h2>
              <p className="subtitle">de Eventos</p>
            </div>
            <button className="pdf-button" onClick={handleExportPDF}>
              <span className="pdf-text">PDF</span>
              <span className="download-arrow">⬇️</span>
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {/* No events message */}
        {!isLoading && !error && eventos.length === 0 && (
          <div className="no-events-message">
            <p>No hay eventos registrados para mostrar.</p>
          </div>
        )}

        {/* Events Groups */}
        <div className="events-container">
          {Object.entries(eventosAgrupados).map(
            ([grupo, eventosGrupo]) =>
              eventosGrupo.length > 0 && (
                <div key={grupo} className="event-group">
                  <h3 className="group-header">{grupo}</h3>

                  <div className="events-list">
                    {eventosGrupo.map(evento => (
                      <div
                        key={evento.id}
                        className="event-item"
                        onClick={() => handleEventClick(evento.id)}
                      >
                        <div className="event-details">
                          <div className="event-datetime-row">
                            <div className="datetime-item">
                              <span className="calendar-icon">📅</span>
                              <span className="date-text">{evento.date}</span>
                            </div>
                            <div className="datetime-item">
                              <span className="clock-icon">🕒</span>
                              <span className="time-text">{evento.hour}</span>
                            </div>
                          </div>

                          <h4 className="event-title">{evento.title}</h4>

                          <div className="event-tags">
                            <span
                              className={`status-tag status-${evento.asistence.toLowerCase().replace(/ /g, '-')}`}
                            >
                              {evento.asistence}
                            </span>
                            {/* Puedes mostrar otros tags según estado */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default HistorialScreen
