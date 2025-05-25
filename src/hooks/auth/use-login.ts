import { useMutation } from '@tanstack/react-query'
import { loginAuth, type AuthUser } from '@/services/auth.service'

export function useLogin() {
  const { mutate, mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: AuthUser) => loginAuth(data)
  })

  return {
    login: mutate,
    loginAsync: mutateAsync
  }
}
