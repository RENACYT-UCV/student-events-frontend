import { useQuery } from '@tanstack/react-query'
import { useAccessToken } from '@store/auth.store'

export function useUserAndDetail(userId: string | undefined) {
  const accessToken = useAccessToken()

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      if (!accessToken) {
        throw new Error('No access token found')
      }
      if (!userId) {
        throw new Error('No user ID provided')
      }

      const response = await fetch(
        `https://student-events-backend-kypp.onrender.com/api/user/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }

      return response.json()
    },
    enabled: !!userId && !!accessToken // Only run the query if userId and accessToken are available
  })

  return {
    userData: data,
    userDataSuccess: isSuccess,
    userDataLoading: isLoading,
    userDataError: isError
  }
}
