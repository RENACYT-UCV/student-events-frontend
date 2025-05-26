import { useQuery } from '@tanstack/react-query'
import { useAccessToken } from '@store/auth.store'

export function useProfile() {
  const accessToken = useAccessToken()

  console.log('Access Token:', accessToken)

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      if (!accessToken) {
        return Promise.reject(new Error('No access token found'))
      }

      return fetch('https://student-events-backend.onrender.com/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json())
    }
  })

  if (data) {
    console.log('Profile Data:', data)
  }

  return {
    profile: data,
    profileSuccess: isSuccess,
    proifileLoading: isLoading,
    profileError: isError
  }
}
