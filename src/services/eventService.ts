import axios from 'axios';

const API_URL = 'http://localhost:3000/api/events'; // Assuming your backend runs on port 3000

export interface Event {
  id: number;
  name: string;
  abilityAmount: number;
  status: string;
  eventDetails: any[]; // You might want to define a more specific type for eventDetails
  eventType: { // Based on the backend entity definition
    id: number;
    title: string;
    description: string | null;
  };
}

export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// You can add other event-related API calls here later