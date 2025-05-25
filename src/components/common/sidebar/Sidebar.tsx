import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEventTypes } from '../../../hooks/useEvents'

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const [showEventos, setShowEventos] = useState(false)
  const { eventTypes, loading } = useEventTypes()
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
    if (onClose) onClose()
  }

  return (
    <div className="w-full h-screen flex flex-col z-[100] ">
      <div className="bg-[#DD2324] text-white p-[22px] flex items-center gap-2">
        {onClose && (
          <div onClick={onClose} className="cursor-pointer">
            {/* <MenuIcon /> */}
          </div>
        )}
        <span className="font-bold text-lg">UniEventos</span>
      </div>
      <div className="bg-white flex-1 p-5 overflow-y-auto relative">
        <SidebarItem icon={<div />} label="Inicio" to="/" />
        <SidebarItem icon={<div />} label="Eventos" onClick={() => setShowEventos(!showEventos)}>
          {showEventos ? <div /> : <div />}
        </SidebarItem>
        {showEventos && (
          <div className="pl-5 text-blue-600">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              eventTypes.map(type => (
                <SidebarItem key={type.id} label={type.title} to={`/eventos/${type.id}`} />
              ))
            )}
          </div>
        )}
        <SidebarItem icon={<div />} label="Historial" to="/historial" />
        <SidebarItem icon={<div />} label="Mi Perfil" to="/profile" />
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
          className={`no-underline flex items-center gap-2 ${red ? 'text-red-600' : 'text-blue-600'}`}
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
