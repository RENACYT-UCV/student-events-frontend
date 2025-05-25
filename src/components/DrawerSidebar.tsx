import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom" // <-- añadí useNavigate
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
} from "@heroicons/react/24/outline"

type Props = {
  open: boolean
  onClose: () => void
}

export default function DrawerSidebar({ open, onClose }: Props) {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const navigate = useNavigate() // <-- añadí esto

  const handleLogout = () => {
    // localStorage.removeItem('token') // si estás usando autenticación
    onClose()
    navigate('/login') // <-- redirige al login
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
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <h2 className="bg-[#DD2324] p-4 text-xl text-amber-50 font-bold">UniEventos</h2>
        </div>

        <nav className="p-4 flex flex-col gap-4 text-blue-700">
          <NavItem icon={<HomeIcon className="w-5 h-5" />} to="/" onClick={onClose}>Inicio</NavItem>

          <div>
            <button
              className="flex items-center gap-2 w-full"
              onClick={() => setShowSubmenu(!showSubmenu)}
            >
              <CalendarDaysIcon className="w-5 h-5" />
              <span>Eventos</span>
              {showSubmenu ? <ChevronUpIcon className="w-4 h-4 ml-auto" /> : <ChevronDownIcon className="w-4 h-4 ml-auto" />}
            </button>

            {showSubmenu && (
              <div className="ml-6 mt-2 flex flex-col gap-2 text-sm">
                <NavItem icon={<AcademicCapIcon className="w-4 h-4" />} to="/eventos/academico" onClick={onClose}>Académico</NavItem>
                <NavItem icon={<SparklesIcon className="w-4 h-4" />} to="/eventos/deportivo" onClick={onClose}>Deportivo</NavItem>
                <NavItem icon={<PresentationChartBarIcon className="w-4 h-4" />} to="/eventos/cultural" onClick={onClose}>Cultural</NavItem>
                <NavItem icon={<ChatBubbleLeftRightIcon className="w-4 h-4" />} to="/eventos/charlas" onClick={onClose}>Charlas</NavItem>
                <NavItem icon={<UsersIcon className="w-4 h-4" />} to="/eventos/voluntariados" onClick={onClose}>Voluntariados</NavItem>
                <NavItem icon={<LightBulbIcon className="w-4 h-4" />} to="/eventos/orientacion" onClick={onClose}>Orientación</NavItem>
                <NavItem icon={<PresentationChartBarIcon className="w-4 h-4" />} to="/eventos/pe" onClick={onClose}>P y E</NavItem>
              </div>
            )}
          </div>

          <NavItem icon={<CalendarDaysIcon className="w-5 h-5" />} to="/historial" onClick={onClose}>Historial</NavItem>
          <NavItem icon={<UserIcon className="w-5 h-5" />} to="/profile" onClick={onClose}>Mi Perfil</NavItem>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t text-red-600">
          <button
            onClick={handleLogout} // <-- usamos la función
            className="flex items-center gap-2 hover:underline w-full text-left"
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
    <Link to={to} className="flex items-center gap-2 hover:underline" onClick={onClick}>
      {icon}
      {children}
    </Link>
  )
}