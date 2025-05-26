import { createStore, useStore } from 'zustand'
import { devtools } from 'zustand/middleware'

type AuthService = {
  accessToken: string | undefined
  refreshToken: string | undefined
  userId: string | undefined // Add userId to the state
  actions: {
    setAccessToken: (accessToken: string | undefined) => void
    setRefreshToken: (refreshToken: string | undefined) => void
    setUserId: (userId: string | undefined) => void // Add action to set userId
    clearTokens: () => void
  }
}

export const authStore = createStore<AuthService>()(
  devtools(
    set => ({
      accessToken: undefined,
      refreshToken: undefined,
      userId: undefined, // Initialize userId
      actions: {
        setAccessToken: (token: string | undefined) => set({ accessToken: token }),
        setRefreshToken: (token: string | undefined) => set({ refreshToken: token }),
        setUserId: (userId: string | undefined) => set({ userId: userId }), // Implement setUserId
        clearTokens: () =>
          set({
            accessToken: undefined,
            refreshToken: undefined,
            userId: undefined // Clear userId as well
          })
      }
    }),
    {
      name: 'auth-store',
      enabled: !import.meta.env.PROD // enable devtools only in development
    }
  )
)

export type ExtractState<S> = S extends {
  getState: () => infer T
}
  ? T
  : never

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>

const accessTokenSelector = (state: ExtractState<typeof authStore>) => state.accessToken
const refreshTokenSelector = (state: ExtractState<typeof authStore>) => state.refreshToken
const userIdSelector = (state: ExtractState<typeof authStore>) => state.userId // Selector for userId
const actionsSelector = (state: ExtractState<typeof authStore>) => state.actions

export const getAccessToken = () => accessTokenSelector(authStore.getState())
export const getRefreshToken = () => refreshTokenSelector(authStore.getState())
export const getUserId = () => userIdSelector(authStore.getState()) // Getter for userId
export const getAuthActions = () => actionsSelector(authStore.getState())

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector)
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector)
export const useRefreshToken = () => useAuthStore(refreshTokenSelector)
export const useUserId = () => useAuthStore(userIdSelector) // Hook for userId
export const useAuthActions = () => useAuthStore(actionsSelector)
