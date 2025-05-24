import { useState } from 'react'
import DrawerSidebar from '../DrawerSidebar'
import folclore from '../../assets/folclore.jpg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <div className="bg-red-600">
        <div className="flex items-center justify-between px-4 py-2">
          <button onClick={() => setMenuOpen(true)} className="text-white text-xl">
            ☰
          </button>
          <h1 className="text-white text-lg font-semibold text-center flex-grow">Inicio</h1>
          <div className="flex items-center gap-4">
            <button className="relative text-white">
              🔔
              <span className="absolute -top-1 -right-1 bg-pink-500 text-xs text-white rounded-full px-1">1</span>
            </button>
            <div className="ml-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
              ●
            </div>
          </div>
        </div>
      </div>

      {/* Drawer lateral */}
      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Saludo */}
      <div className="bg-red-600 text-white p-6 pb-12 rounded-b-[40px] text-center relative">
        <h2 className="text-2xl font-bold">Hola, XXXXXXXX</h2>
        <p className="text-sm">¿Qué haremos hoy?</p>
        <div className="absolute top-2 right-2 opacity-20 text-[80px]">📍</div>
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-xl -mt-8 p-6 mx-4 shadow-md z-10 relative">
        {/* Eventos de hoy */}
        <h2 className="text-lg font-bold text-red-600 mb-4">Mis Eventos de Hoy</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 shadow-md rounded-lg p-2 bg-white">
            <img src={folclore} alt="evento" className="w-16 h-16 rounded-md object-cover" />
            <div>
              <h3 className="text-blue-700 font-semibold text-sm">Congreso Internacional de Psicoterapia</h3>
              <div className="text-xs text-gray-600 flex gap-2 mt-1">
                <span>📅 17 Junio</span>
                <span>🕒 3:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Próximos eventos */}
        <h2 className="text-lg font-bold text-red-600 mt-8 mb-4">Mis Próximos Eventos</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 shadow-md rounded-lg p-2 bg-white">
            <img src={folclore} alt="evento" className="w-16 h-16 rounded-md object-cover" />
            <div>
              <h3 className="text-blue-700 font-semibold text-sm">Taller de Dibujo, Anime y Más</h3>
              <div className="text-xs text-gray-600 flex gap-2 mt-1">
                <span>📅 17 Diciembre</span>
                <span>🕒 3:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
