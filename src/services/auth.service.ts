import { client } from '../lib/axios'

export type AuthUser = {
  email: string
  password: string
}

export const login = async (data: AuthUser) => {
  return client.post('/auth/login', data)
}
