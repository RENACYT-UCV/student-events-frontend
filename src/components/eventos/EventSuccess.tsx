import { useNavigate } from 'react-router-dom'

interface SuccessEvent {
  name: string
  type: string
  date: string
  time: string
  location: string
  image: string
}

export default function EventSuccess() {
  const navigate = useNavigate()
  const event = JSON.parse(localStorage.getItem('successEvent') || '{}')

  if (!event.name) {
    navigate('/eventos')
    return null
  }

  return (
    <div className="min-h-screen bg-pink-50">
      
      {/* Back Button */}
      <div className="bg-pink-50 p-4 flex items-center space-x-2">
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

      {/* Success Content */}
      <div className="p-8 flex flex-col items-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-white border-4 border-green-500 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">¡Nos vemos ahí!</h2>
          <p className="text-gray-600">Evento registrado con éxito</p>
        </div>

        <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
          <div className="p-4 space-y-2">
            <span className="text-sm text-gray-500">{event.type}</span>
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/eventos')}
          className="w-full max-w-md bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Ver más Eventos
        </button>
      </div>
    </div>
  )
}
