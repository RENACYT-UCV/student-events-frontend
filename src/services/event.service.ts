import { client } from '@lib/axios'
import { Event } from '@/types/events'

export const getAllEvents = async (): Promise<Event[]> => {
  return client.get('/events').then(response => response.data)
}
