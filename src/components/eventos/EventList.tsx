import { useState } from 'react'
import Button from '../common/Button'
import EventTypeSelect from './EventTypeSelect'
import EventCard from './EventCard'
import universidadImage from '../../assets/universidad.jpg'

// Datos de ejemplo
const mockEvents = [
  {
    id: 1,
    image: universidadImage,
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
      {/* Header */}
      <div className="bg-red-600 p-4 flex items-center justify-between">
        <Button variant="icon" color="red">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
        <h1 className="text-white text-2xl font-normal">Eventos</h1>
        <div className="flex items-center space-x-4">
          <Button variant="icon" color="red">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </Button>
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        <EventTypeSelect 
          value={selectedFilter}
          onChange={setSelectedFilter}
        />

        {/* Event Cards */}
        <div className="space-y-4 mt-6">
          {mockEvents.map((event) => (
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