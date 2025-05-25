import { useState } from 'react'
import Button from '../common/Button'
import EventTypeSelect from './EventTypeSelect'
import EventCard from './EventCard'

// Datos de ejemplo
const mockEvents = [
  {
    id: 1,
    image: '/assets/universidad.jpg',
    type: 'Académico',
    title: 'UCV Eventos Lima Norte',
    date: '21 Junio',
    time: '5:00 pm',
    location: 'Los Olivos - Lima'
  },
  {
    id: 2,
    image: 'https://admision.ucv.edu.pe/wp-content/uploads/2023/05/campus-los-olivos-2.jpg',
    type: 'Deportivo',
    title: 'Campeonato de Fútbol UCV',
    date: '22 Junio',
    time: '3:00 pm',
    location: 'Los Olivos - Lima'
  }
]

export default function EventList() {
  const [selectedFilter, setSelectedFilter] = useState('Tipo de Evento')

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header is now handled by MainLayout */}

      {/* Main Content */}
      <div className="px-4 py-4">
        <EventTypeSelect value={selectedFilter} onChange={setSelectedFilter} />

        {/* Event Cards */}
        <div className="space-y-4 mt-6">
          {mockEvents.map(event => (
            <EventCard
              key={event.id}
              image={event.image}
              type={event.type}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
