import { useState, useEffect } from 'react'
import { getAllEvents, Event } from '../../services/eventService'

import DrawerSidebar from '../DrawerSidebar'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [allEvents, setAllEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents()
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
    <div>
      {/* Barra de navegación */}
      <div className="bg-red-600">
        <div className="flex items-center justify-between px-4 py-2">
          <button onClick={() => setMenuOpen(true)} className="text-white">
            {/* <MenuIcon /> */}
          </button>
          <h1 className="text-white text-lg font-semibold text-center flex-grow">Inicio</h1>
          <div className="flex items-center gap-4">
            <button className="relative text-white">
              {/* <NotificationsIcon /> */}
              <span className="absolute -top-1 -right-1 bg-pink-500 text-xs text-white rounded-full px-1">
                1
              </span>
            </button>
            <div className="ml-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              U
            </div>
          </div>
        </div>
      </div>

      {/* Drawer lateral */}
      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Saludo */}
      <div className="bg-red-600 text-white p-6 pb-10 rounded-b-[40px] text-center">
        <h2 className="text-xl font-bold">Hola, XXXXXXXX</h2>
        <p className="text-sm">¿Qué haremos hoy?</p>
      </div>

      {/* Contenedor principal */}
      <div className="bg-white rounded-xl mt-[-1rem] p-6 mx-4 shadow-md">
        {/* Eventos de hoy */}
        <h2 className="text-lg font-bold text-red-600 mb-4">Mis Eventos de Hoy</h2>
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
        <h2 className="text-lg font-bold text-red-600 mt-8 mb-4">Mis Próximos Eventos</h2>
        <div className="flex flex-col gap-4">
          {proximosEventos.map(evento => (
            <div key={evento.id} className="flex items-start shadow-md rounded-lg p-4">
              <div>
                <h3 className="text-indigo-600 font-semibold">{evento.name}</h3>
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
