import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../common/Button'
import EventTypeSelect from './EventTypeSelect'
import EventCard from './EventCard'
import { getAllEvents, getAllEventTypes, Event, EventType } from '../../services/event.service'

export default function EventList() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const tipoFromUrl = queryParams.get('tipo')

  const [selectedFilter, setSelectedFilter] = useState(tipoFromUrl || 'Tipo de Evento')
  const [events, setEvents] = useState<Event[]>([])
  const [eventTypes, setEventTypes] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, typesData] = await Promise.all([getAllEvents(), getAllEventTypes()])
        setEvents(eventsData)
        setEventTypes(typesData)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los datos')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Actualizar el filtro cuando cambia la URL
  useEffect(() => {
    if (tipoFromUrl) {
      setSelectedFilter(tipoFromUrl)
    }
  }, [tipoFromUrl])

  const filteredEvents = events.filter(
    event => selectedFilter === 'Tipo de Evento' || event.eventType.title === selectedFilter
  )

  if (loading)
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center">Cargando...</div>
    )
  if (error)
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center text-red-600">
        {error}
      </div>
    )

  return (
    <div className="justify-center min-h-screen bg-pink-50">
      <img
        src="/assets/images/white-bg(1).png"
        alt=""
        className="fixed sm:top-5 md:top-30 left-0 w-full top h-full opacity-25 object-cover z-0"
      />

      {/* Main Content */}
      <div className="px-4 py-6 mx-auto max-w-5xl sm:px-6 md:px-8 ">
        <EventTypeSelect
          value={selectedFilter}
          onChange={setSelectedFilter}
          options={['Tipo de Evento', ...eventTypes.map(type => type.title)]}
        />

        {/* Event Cards */}
        <div className="space-y-4 mt-6 mx-auto px-4 sm:px-6 md:px-1 lg:max-w-6xl">
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              image="/assets/universidad.jpg"
              type={event.eventType.title}
              title={event.name}
              date={event.eventDetails[0]?.startDate}
              time={event.eventDetails[0]?.startTime}
              location={event.eventDetails[0]?.location || 'Virtual'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
