import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface EventType {
  name: string
  slug: string
}

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const [showEventos, setShowEventos] = useState(false)
  const [eventTypes, setEventTypes] = useState<EventType[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/events/types')
      .then(response => setEventTypes(response.data))
      .catch(error => console.error('Error fetching event types:', error))
  }, [])

  const handleLogout = () => {
    // Aquí puedes limpiar datos del usuario si estás usando localStorage, cookies, etc.
    // localStorage.removeItem("token"); por ejemplo
    navigate('/login') // Redirige al login
    if (onClose) onClose() // Cierra el drawer si está abierto
  }

  return (
    <div className="w-full h-screen flex flex-col z-[100]">
      {/* Encabezado rojo con UniEventos y hamburguesa */}
      <div className="bg-[#DD2324] text-white p-[22px] flex items-center gap-2">
        {onClose && (
          <div onClick={onClose} className="cursor-pointer">
            {/* <MenuIcon /> */}
          </div>
        )}
        <span className="font-bold text-lg">UniEventos</span>
      </div>

      {/* Menú blanco */}
      <div className="bg-white flex-1 p-5 overflow-y-auto relative">
        <SidebarItem icon={<div />} label="Inicio" to="/" />
        <SidebarItem icon={<div />} label="Eventos" onClick={() => setShowEventos(!showEventos)}>
          {showEventos ? <div /> : <div />}
        </SidebarItem>

        {showEventos && (
          <div className="pl-5 text-blue-600">
            {eventTypes.map((type, index) => (
              <SidebarItem
                key={index}
                // icon={< />}
                label={type.name}
                to={`/eventos/${type.slug}`}
              />
            ))}
          </div>
        )}

        <SidebarItem icon={<div />} label="Historial" to="/historial" />
        <SidebarItem icon={<div />} label="Mi Perfil" to="/profile" />

        {/* Botón de cerrar sesión */}
        <div onClick={handleLogout} className="absolute bottom-5 left-5 cursor-pointer">
          <SidebarItem icon={<div />} label="Cerrar Sesión" red />
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, to, onClick, children, red = false }: any) {
  return (
    <div className="mb-2" onClick={onClick}>
      {to ? (
        <Link
          to={to}
          className={`no-underline flex items-center gap-2 ${
            red ? 'text-red-600' : 'text-blue-600'
          }`}
        >
          {icon}
          <span>{label}</span>
        </Link>
      ) : (
        <div className="text-blue-600 cursor-pointer flex items-center gap-2">
          {icon}
          <span>{label}</span>
          {children}
        </div>
      )}
    </div>
  )
}
