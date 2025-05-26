import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAccessToken } from '@store/auth.store'
import { useQuery } from '@tanstack/react-query'

export interface EventType {
  id: number
  title: string
  description?: string
}

export function useEventTypes() {
  const [eventTypes, setEventTypes] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)
  const accessToken = useAccessToken()

  useEffect(() => {
    if (!accessToken) return

    axios
      .get('https://student-events-backend.onrender.com/api/events/types', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => setEventTypes(response.data))
      .finally(() => setLoading(false))
  }, [accessToken])

  return { eventTypes, loading }
}

export interface Event {
  id: number
  name: string
  // Agrega aquí los demás campos que necesites mostrar
}

export function useEvents() {
  const accessToken = useAccessToken()

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['events'],
    queryFn: () => {
      if (!accessToken) {
        return Promise.reject(new Error('No access token found'))
      }

      return fetch('https://student-events-backend.onrender.com/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json())
    }
  })

  return {
    events: data,
    eventsSuccess: isSuccess,
    eventsLoading: isLoading,
    eventsError: isError
  }
}
