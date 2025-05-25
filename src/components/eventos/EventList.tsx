import { useState, useEffect } from 'react'
import Button from '../common/Button'
import EventTypeSelect from './EventTypeSelect'
import EventCard from './EventCard'
import { getAllEvents, getAllEventTypes, Event, EventType } from '../../services/event.service'

export default function EventList() {
  const [selectedFilter, setSelectedFilter] = useState('Tipo de Evento')
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
    <div className="min-h-screen bg-pink-50">
      
      {/* Main Content */}
      <div className="px-4 py-4">
        <EventTypeSelect
          value={selectedFilter}
          onChange={setSelectedFilter}
          options={['Tipo de Evento', ...eventTypes.map(type => type.title)]}
        />

        {/* Event Cards */}
        <div className="space-y-4 mt-6">
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
