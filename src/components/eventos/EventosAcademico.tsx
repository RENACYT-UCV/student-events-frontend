// src/components/EventosAcademico.tsx
import React, { useState, useEffect } from 'react'
import { getAllEvents, Event } from '../../services/eventService'
import DrawerSidebar from '../DrawerSidebar'

export default function EventosAcademico() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents()
        setEvents(fetchedEvents)
      } catch (error) {
        console.error('Failed to fetch academic events:', error)
        // Handle error appropriately, e.g., show an error message to the user
      }
    }

    fetchEvents()
  }, [])

  // You might want to filter events based on type 'Académico' if your backend supports it
  // For now, displaying all fetched events as academic events
  const academicEvents = events // Apply filtering if needed

  return (
    <div className="bg-[#f5dede] min-h-screen">
      {/* AppBar superior */}
      <header className="bg-red-600 text-white">
        <div className="flex items-center px-4 py-3">
          <button onClick={() => setMenuOpen(true)}>
            {/* <Bars3Icon className="h-6 w-6" /> */}
          </button>
          <h1 className="flex-grow text-center text-lg font-semibold">Académico</h1>
          <button className="ml-auto">{/* <BellIcon className="h-6 w-6" /> */}</button>
          <div className="ml-4 w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center font-bold">
            U
          </div>
        </div>
      </header>

      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Contenido */}
      <main className="p-4">
        {academicEvents.map(evento => (
          <div key={evento.id} className="bg-white p-4 mb-6 rounded-xl shadow">
            <p className="text-xs text-gray-500">{evento.eventType?.title || 'Académico'}</p>
            <h2 className="text-lg font-bold">{evento.name}</h2>

            {evento.eventDetails?.[0] && (
              <div className="mt-2 space-y-1 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  {/* <CalendarDaysIcon className="h-4 w-4" /> */}
                  <span>
                    {evento.eventDetails[0].startDate} - {evento.eventDetails[0].endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <ClockIcon className="h-4 w-4" /> */}
                  <span>
                    {evento.eventDetails[0].startTime} - {evento.eventDetails[0].endTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <MapPinIcon className="h-4 w-4" /> */}
                  <span>{evento.eventDetails[0].location}</span>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600">
                {/* <HeartIcon className="h-5 w-5" /> */}
              </button>
              <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                {/* <CircleStackIcon className="h-5 w-5" /> */}
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
