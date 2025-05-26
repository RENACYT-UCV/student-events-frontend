import { useMutation } from '@tanstack/react-query'
import { loginAuth, type AuthUser } from '@/services/auth.service'
import { getAuthActions } from '@/store/auth.store'

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
