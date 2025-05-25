import { useState } from 'react'

type EventTypeSelectProps = {
  value: string
  onChange: (value: string) => void
}

const eventTypes = [
  'Deportivo',
  'Académico',
  'Cultural',
  'Social'
]

export default function EventTypeSelect({ value, onChange }: EventTypeSelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div 
        className="bg-white rounded-xl shadow-md cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center px-4 py-3 justify-between">
          <span className="text-gray-800">{value}</span>
          <button className="text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded-xl shadow-lg overflow-hidden z-10">
          {eventTypes.map((type) => (
            <div
              key={type}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${value === type ? 'bg-gray-50' : ''}`}
              onClick={() => {
                onChange(type)
                setIsOpen(false)
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}