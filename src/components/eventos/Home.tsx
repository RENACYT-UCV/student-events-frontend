import { useState, useEffect } from 'react'
import { getAllEventsByUserId } from '@/services/event.service'
import { Event } from '@/types/events'
import { useProfile } from '@/hooks/user/use-profile'

export default function Home() {
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const { profile } = useProfile()

  useEffect(() => {
    const fetchEvents = async () => {
      if (!profile?.id) return
      try {
        const events = await getAllEventsByUserId(profile.id)

        setAllEvents(events as Event[])
      } catch {
        alert('Error al cargar los eventos. Por favor, inténtalo de nuevo más tarde.')
      }
    }

    fetchEvents()
  }, [profile])

  // Display all events as upcoming since they are already filtered by user registration
  const proximosEventos: Event[] = allEvents

  return (
    <div className="home-events-container">
      {/* Contenedor principal */}
      <div className="bg-white top-0 relative z-10 rounded-3xl mt-[-1rem] p-8 mx-auto max-w-3xl">
        {/* Próximos eventos */}
        <h2 className="text-2xl font-extrabold text-red-500 mt-8 mb-4 select-none">
          MIS PRÓXIMOS EVENTOS
        </h2>
        <div className="flex flex-col gap-4 px-3">
          {proximosEventos &&
            proximosEventos.length > 0 &&
            proximosEventos.map(evento => (
              <div
                key={evento.id}
                className="flex cursor-pointer items-start shadow-xl rounded-xl p-4 transition-transform duration-300 ease-in-out hover:scale-102"
              >
                <div>
                  <h3 className="text-indigo-900 font-bold">{evento.name}</h3>
                  {evento.eventDetails?.length > 0 && (
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <span>
                          {evento.eventDetails[0].startDate} - {evento.eventDetails[0].endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>
                          {evento.eventDetails[0].startTime} - {evento.eventDetails[0].endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
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
