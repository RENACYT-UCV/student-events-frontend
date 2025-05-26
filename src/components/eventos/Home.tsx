import { useState, useEffect } from 'react'
import { getAllEvents } from '@/services/event.service'
import { Event } from '@/types/events'

export default function Home() {
  const [allEvents, setAllEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents()
        console.log('Fetched events:', events)
        setAllEvents(events)
      } catch (error) {
        // Handle error appropriately
        console.error('Failed to fetch events:', error)
      }
    }

    fetchEvents()
  }, [])

  // You might want to filter allEvents into eventosHoy and proximosEventos based on date
  const eventosHoy: Event[] = [] // Filter logic here
  const proximosEventos: Event[] = allEvents // For now, display all events as upcoming

  return (
    <div className="home-events-container">
      {/* Contenedor principal */}
      <div className="bg-white top-0 relative z-10 rounded-3xl mt-[-1rem] p-8 mx-auto max-w-3xl">
        {/* Eventos de hoy */}
        <h2 className="text-2xl font-extrabold text-red-500 mb-4 select-none ">MIS EVENTOS DE HOY</h2>
        <div className="flex flex-col gap-4">
          {eventosHoy.map(evento => (
            <div key={evento.id} className="flex items-center shadow-md rounded-lg p-4">
              {/* Imagen opcional aquí */}
              <div>
                <h3 className="text-indigo-600 font-semibold">{evento.name}</h3>
                {/* Detalles opcionales aquí */}
              </div>
            </div>
          ))}
        </div>

        {/* Próximos eventos */}
        <h2 className="text-2xl font-extrabold text-red-500 mt-8 mb-4 select-none">MIS PRÓXIMOS EVENTOS</h2>
        <div className="flex flex-col gap-4 px-3">
          {proximosEventos &&
            proximosEventos.length > 0 &&
            proximosEventos.map(evento => (
              <div key={evento.id} className="flex cursor-pointer items-start shadow-xl rounded-xl p-4 transition-transform duration-300 ease-in-out hover:scale-102">
                <div>
                  <h3 className="text-indigo-900 font-bold">{evento.name}</h3>
                  {evento.eventDetails?.length > 0 && (
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        {/* <CalendarMonthIcon className="w-4 h-4" /> */}
                        <span>
                          {evento.eventDetails[0].startDate} - {evento.eventDetails[0].endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* <AccessTimeIcon className="w-4 h-4" /> */}
                        <span>
                          {evento.eventDetails[0].startTime} - {evento.eventDetails[0].endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* <LocationOnIcon className="w-4 h-4" /> */}
                        <span>{evento.eventDetails[0].location}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
