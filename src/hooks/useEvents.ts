import { useEffect, useState } from 'react'
import axios from 'axios'

export interface EventType {
  id: number
  title: string
  description?: string
}

export function useEventTypes() {
  const [eventTypes, setEventTypes] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/events/types') // Ensure the correct endpoint is used
      .then(response => setEventTypes(response.data))
      .finally(() => setLoading(false))
  }, [])

  return { eventTypes, loading }
}

export interface Event {
  id: number
  name: string
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('/api/events/types') // Cambia por tu endpoint real si es necesario
      .then(response => setEvents(response.data))
      .finally(() => setLoading(false))
  }, [])

  return { events, loading }
}
