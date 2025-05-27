import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // <-- añadí useNavigate
import {
  HomeIcon,
  CalendarDaysIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  AcademicCapIcon,
  SparklesIcon,
  PresentationChartBarIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { useEventTypes } from '../../../hooks/useEvents'

type Props = {
  open: boolean
  onClose: () => void
}

export default function DrawerSidebar({ open, onClose }: Props) {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const navigate = useNavigate() 
  const { eventTypes, loading } = useEventTypes()

  const handleLogout = () => {
    // localStorage.removeItem('token') // si estás usando autenticación
    onClose()
    navigate('/login') 
  }

  // Nueva función para manejar la navegación por tipo de evento
  const handleEventTypeClick = (typeTitle: string) => {
    navigate(`/eventos?tipo=${encodeURIComponent(typeTitle)}`)
    onClose()
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <h2 className="bg-[#1E2C64] p-6 text-2xl text-white font-bold">UniEventos</h2>
        </div>

        <nav className="p-6 flex flex-col gap-5 font- text-blue-700 text-xl">
          <NavItem icon={<HomeIcon className="w-5 h-5" />} to="/" onClick={onClose}>
            Inicio
          </NavItem>

          <div>
            <button
              className="flex items-center gap-2 w-full cursor-pointer hover:font-medium hover:text-red-600"
              onClick={() => setShowSubmenu(!showSubmenu)}
            >
              <CalendarDaysIcon className="w-5 h-5" />
              <span>Eventos</span>
              {showSubmenu ? (
                <ChevronUpIcon className="w-4 h-4 ml-auto" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 ml-auto" />
              )}
            </button>

            {showSubmenu && (
              <div className="ml-6 mt-2 flex flex-col gap-2 text-sm">
                {loading ? (
                  <p>Cargando...</p>
                ) : (
                  <>
                    {eventTypes.map(type => (
                      <div
                        key={type.id}
                        className="flex items-center gap-2 hover:font-medium hover:text-red-600 cursor-pointer"
                        onClick={() => handleEventTypeClick(type.title)}
                      >
                        <CalendarDaysIcon className="w-4 h-4" />
                        {type.title}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          <NavItem
            icon={<CalendarDaysIcon className="w-5 h-5" />}
            to="/historial"
            onClick={onClose}
          >
            Historial
          </NavItem>
          <NavItem icon={<UserIcon className="w-5 h-5" />} to="/profile" onClick={onClose}>
            Mi Perfil
          </NavItem>
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t text-red-600">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:font-medium w-full text-lg text-left hover:text-red-800 cursor-pointer"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  )
}

type NavItemProps = {
  icon: React.ReactNode
  to: string
  children: React.ReactNode
  onClick?: () => void
}

function NavItem({ icon, to, children, onClick }: NavItemProps) {
  return (
    <Link to={to} className="flex items-center gap-2 hover:font-medium hover:text-red-600" onClick={onClick}>
      {icon}
      {children}
    </Link>
  )
}
