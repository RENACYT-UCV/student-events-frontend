import { client } from '@lib/axios'

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
    const response = await client.get<Event[]>('/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventById = async (id: number): Promise<Event> => {
  try {
    const response = await client.get<Event>(`/events/${id}`)
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
    const response = await client.get<EventType[]>('/events/types')
    return response.data
  } catch (error) {
    console.error('Error fetching event types:', error)
    throw error
  }
}

export const registerUserToEvent = async (userId: number, eventId: number): Promise<void> => {
  try {
    await client.post(`/events/${eventId}/register/${userId}`)
  } catch (error) {
    console.error('Error registering user to event:', error)
    throw error
  }
}

export const getUserRegistrations = async (userId: number): Promise<Event[]> => {
  try {
    const response = await client.get<Event[]>(`/events/user/${userId}/registrations`)
    return response.data
  } catch (error) {
    console.error('Error fetching user registrations:', error)
    throw error
  }
}

export const checkUserRegistration = async (userId: number, eventId: number): Promise<boolean> => {
  try {
    const response = await client.get<boolean>(`/events/${eventId}/check-registration/${userId}`)
    return response.data
  } catch (error) {
    console.error('Error checking user registration:', error)
    throw error
  }
}
