import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

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
    const response = await axios.get<Event[]>(`${API_URL}/events`)
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventById = async (id: number): Promise<Event> => {
  try {
    const response = await axios.get<Event>(`${API_URL}/events/${id}`)
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
    const response = await axios.get<EventType[]>(`${API_URL}/events/types`)
    return response.data
  } catch (error) {
    console.error('Error fetching event types:', error)
    throw error
  }
}

// You can add other event-related API calls here later
