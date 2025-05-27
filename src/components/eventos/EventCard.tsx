import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

type EventCardProps = {
  id: number
  image?: string
  type: string
  title: string
  date: string
  time: string
  location: string
}

export default function EventCard({
  id,
  image,
  type,
  title,
  date,
  time,
  location
}: EventCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="bg-white rounded-xl relative z-10 overflow-hidden shadow-lg p-4 cursor-pointer transform transition-transform duration-300 hover:scale-102"
      onClick={() => navigate(`/eventos/${id}`)}
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />}
      <div className="mt-3">
        <div className="text-gray-600 text-sm">{type}</div>
        <h3 className="text-xl font-bold text-gray-900 mt-1">{title}</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
