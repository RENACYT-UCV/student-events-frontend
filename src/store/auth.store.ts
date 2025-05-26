import { createStore, useStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type UserData = {
  userId: string
  username?: string
  email?: string
  role?: string
}

type AuthService = {
  accessToken: string | undefined
  refreshToken: string | undefined
  user: UserData | undefined
  isAuthenticated: boolean
  actions: {
    setAccessToken: (accessToken: string | undefined) => void
    setRefreshToken: (refreshToken: string | undefined) => void
    setUser: (user: UserData | undefined) => void
    login: (tokens: { accessToken: string; refreshToken: string }, userData: UserData) => void
    clearTokens: () => void
    logout: () => void
  }
}

export const authStore = createStore<AuthService>()(
  devtools(
    persist(
      (set, get) => ({
        accessToken: undefined,
        refreshToken: undefined,
        user: undefined,
        isAuthenticated: false,
        actions: {
          setAccessToken: (token: string | undefined) =>
            set({ accessToken: token, isAuthenticated: Boolean(token && get().refreshToken) }),
          setRefreshToken: (token: string | undefined) =>
            set({ refreshToken: token, isAuthenticated: Boolean(token && get().accessToken) }),
          setUser: (userData: UserData | undefined) => set({ user: userData }),
          login: (tokens: { accessToken: string; refreshToken: string }, userData: UserData) =>
            set({
              accessToken: tokens.accessToken,
              refreshToken: tokens.refreshToken,
              user: userData,
              isAuthenticated: true
            }),
          clearTokens: () =>
            set({
              accessToken: undefined,
              refreshToken: undefined
            }),
          logout: () =>
            set({
              accessToken: undefined,
              refreshToken: undefined,
              user: undefined,
              isAuthenticated: false
            })
        }
      }),
      {
        name: 'auth-storage',
        partialize: state => ({
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          user: state.user,
          isAuthenticated: state.isAuthenticated
        }),
        onRehydrateStorage: () => state => {
          if (state) {
            console.log('Auth store rehydrated successfully')
          }
        }
      }
    ),
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
const userSelector = (state: ExtractState<typeof authStore>) => state.user
const isAuthenticatedSelector = (state: ExtractState<typeof authStore>) => state.isAuthenticated

export const getAccessToken = () => accessTokenSelector(authStore.getState())
export const getRefreshToken = () => refreshTokenSelector(authStore.getState())
export const getAuthActions = () => actionsSelector(authStore.getState())
export const getUser = () => userSelector(authStore.getState())
export const getIsAuthenticated = () => isAuthenticatedSelector(authStore.getState())

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector)
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector)
export const useRefreshToken = () => useAuthStore(refreshTokenSelector)
export const useUser = () => useAuthStore(userSelector)
export const useIsAuthenticated = () => useAuthStore(isAuthenticatedSelector)
export const useAuthActions = () => useAuthStore(actionsSelector)

export const useUserId = () => useAuthStore(state => state.user?.userId)
export const useUsername = () => useAuthStore(state => state.user?.username)
export const useUserEmail = () => useAuthStore(state => state.user?.email)
export const useUserRole = () => useAuthStore(state => state.user?.role)

export const clearAuthStorage = () => {
  localStorage.removeItem('auth-storage')
  getAuthActions().logout()
}
