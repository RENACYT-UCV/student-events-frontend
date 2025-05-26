import { createStore, useStore } from 'zustand'
import { devtools } from 'zustand/middleware'

type AuthService = {
  accessToken: string
  refreshToken: string
  actions: {
    setAccessToken: (accessToken: string | undefined) => void
    setRefreshToken: (refreshToken: string | undefined) => void
    clearTokens: () => void
  }
}

export const authStore = createStore<AuthService>()(
  devtools(
    set => ({
      accessToken: undefined,
      refreshToken: undefined,
      actions: {
        setAccessToken: (token: string) => set({ accessToken: token }),
        setRefreshToken: (token: string) => set({ refreshToken: token }),
        clearTokens: () =>
          set({
            accessToken: undefined,
            refreshToken: undefined
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
const actionsSelector = (state: ExtractState<typeof authStore>) => state.actions

export const getAccessToken = () => accessTokenSelector(authStore.getState())
export const getRefreshToken = () => refreshTokenSelector(authStore.getState())
export const getAuthActions = () => actionsSelector(authStore.getState())

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector)
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector)
export const useRefreshToken = () => useAuthStore(refreshTokenSelector)
export const useAuthActions = () => useAuthStore(actionsSelector)
