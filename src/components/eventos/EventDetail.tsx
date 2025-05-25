import { useNavigate } from 'react-router-dom'

export default function EventDetail() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Header is now handled by MainLayout */}

      {/* Back Button */}
      <div className="bg-gray-100 p-4 flex items-center space-x-2">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="ml-2">Regresar</span>
        </button>
      </div>

      {/* Event Content */}
      <div className="p-4 space-y-4">
        <img
          src="/assets/universidad.jpg"
          alt="UCV Campus"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold">UCV Eventos Lima Norte</h1>

        <div className="space-y-3 text-gray-600">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>21 Junio</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>5:00 pm</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Los Olivos - Lima</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-4">
          Evento bien bonito para toda la gente linda de la ucv. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-medium mt-6">
          MARCAR ASISTENCIA
        </button>
      </div>
    </div>
  )
}
