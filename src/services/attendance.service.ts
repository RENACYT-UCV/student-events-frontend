import { client } from '@lib/axios'
import { Attendance } from '@/types/attendance'

export const markAttandance = async (userId: string): Promise<Attendance> => {
  return client.post('/attandance/mark', { userId }).then(response => response.data)
}
