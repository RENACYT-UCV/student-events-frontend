// import { client } from '@lib/axios'
import axios from 'axios'
import { getAccessToken } from '@store/auth.store'

const API_URL = 'https://student-events-backend-kypp.onrender.com/api'

export interface Event {
  id: number
  name: string
  abilityAmount: number
  status: string
  eventDetails: {
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    modality: string
    description: string
    location: string
    url: string
  }[]
  eventType: {
    id: number
    title: string
    description: string | null
  }
}

export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const token = getAccessToken()
    const response = await axios.get<Event[]>(`${API_URL}/events`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventById = async (id: number): Promise<Event> => {
  try {
    const token = getAccessToken()
    const response = await axios.get<Event>(`${API_URL}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching event:', error)
    throw error
  }
}

export interface EventType {
  id: number
  title: string
  description: string | null
}

export const getAllEventTypes = async (): Promise<EventType[]> => {
  try {
    const token = getAccessToken()
    const response = await axios.get<EventType[]>(`${API_URL}/events/types`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching event types:', error)
    throw error
  }
}

// export const getAllEventsByUserId = async (userId: number): Promise<Event[]> => {
//   // return client.get('/events/user', {)
// }
