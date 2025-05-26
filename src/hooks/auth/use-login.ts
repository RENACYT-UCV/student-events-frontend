import { useMutation } from '@tanstack/react-query'
import { loginAuth, type AuthUser } from '@/services/auth.service'
import { getAuthActions } from '@/store/auth.store'

export function useLogin() {
  const { setAccessToken, setRefreshToken, setUserId } = getAuthActions()

  const { mutate, mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: AuthUser) => loginAuth(data),
    onSuccess: data => {
      // Assuming the login response includes accessToken, refreshToken, and userId
      setAccessToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      setUserId(data.userId) // Store the user ID
    }
  })

  return {
    login: mutate,
    loginAsync: mutateAsync
  }
}
