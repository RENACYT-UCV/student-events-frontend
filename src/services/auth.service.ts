import { authClient } from '../lib/axios'

export type AuthUser = {
  email: string
  password: string
}

export const loginAuth = async (data: AuthUser) => {
  return authClient.post('/auth/login', data).then(response => response.data)
}
