import { useMutation } from '@tanstack/react-query'
import { markAttandance } from '@/services/attendance.service'

export function useMarkAttandance() {
  const { mutate, mutateAsync } = useMutation({
    mutationFn: (userId: string) => markAttandance(userId)
  })

  return {
    markAttandance: mutate,
    markAttandanceAsync: mutateAsync
  }
}
