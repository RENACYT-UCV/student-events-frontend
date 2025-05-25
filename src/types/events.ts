export interface EventDetails {
  id: number
  createdAt: string
  updatedAt: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  modality: string
  description: string
  location: string
  url: string
}

export interface Event {
  id: number
  name: string
  abilityAmount: number
  status: string
  eventDetails: EventDetails[] // You might want to define a more specific type for eventDetails
  eventType: {
    // Based on the backend entity definition
    id: number
    title: string
    description: string | null
  }
}
