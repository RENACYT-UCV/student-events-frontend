import { useMutation } from '@tanstack/react-query'
import { login, type AuthUser } from '../../services/auth.service'

export function useLogin() {
  const { data, mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: AuthUser) => login(data)
  })

  return {
    data,
    loginAsync: mutateAsync
  }
}
