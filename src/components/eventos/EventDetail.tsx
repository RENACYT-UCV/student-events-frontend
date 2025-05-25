import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventById, Event } from '../../services/event.service'
import Button from '../common/Button'

export default function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!id) return
        const data = await getEventById(parseInt(id))
        setEvent(data)
        setLoading(false)
      } catch (err) {
        console.error('Error al cargar el evento:', err)
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  if (loading || !event) return null

  return (
    <div className="min-h-screen bg-pink-50">
      
      {/* Botón Regresar */}
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Regresar</span>
        </button>
      </div>

      {/* Contenido del evento */}
      <div className="px-4">
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="/assets/universidad.jpg"
            alt={event.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="text-gray-600 text-sm">{event.eventType.title}</div>
          <h2 className="text-xl font-bold text-gray-900 mt-1">{event.name}</h2>

          {event.eventDetails[0] && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{event.eventDetails[0].startDate}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{event.eventDetails[0].startTime}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{event.eventDetails[0].location || 'Virtual'}</span>
              </div>
            </div>
          )}

          <div className="mt-6">
            <p className="text-gray-600 text-sm">
              {event.eventDetails[0]?.description || 'Descripción del evento'}
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.setItem(
                'successEvent',
                JSON.stringify({
                  name: event.name,
                  type: event.eventType.title,
                  date: event.eventDetails[0]?.startDate,
                  time: event.eventDetails[0]?.startTime,
                  location: event.eventDetails[0]?.location || 'Virtual',
                  image: '/assets/universidad.jpg'
                })
              )
              navigate('/eventos/success')
            }}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            MARCAR ASISTENCIA
          </button>
        </div>
      </div>
    </div>
  )
}
