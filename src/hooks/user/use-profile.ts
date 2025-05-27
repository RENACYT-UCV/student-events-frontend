import { useQuery } from '@tanstack/react-query'
import { useAccessToken } from '@store/auth.store'

export function useProfile() {
  const accessToken = useAccessToken()

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      if (!accessToken) {
        return Promise.reject(new Error('No access token found'))
      }

      return fetch('https://student-events-backend-kypp.onrender.com/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json())
    }
  })

  return {
    profile: data,
    profileSuccess: isSuccess,
    proifileLoading: isLoading,
    profileError: isError
  }
}
