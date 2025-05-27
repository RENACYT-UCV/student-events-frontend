import { createStore, useStore } from 'zustand'
import { devtools } from 'zustand/middleware'

export const forgotPasswordStore = createStore<{
  email: string
  code: string
  actions: {
    setEmail: (email: string) => void
    clearEmail: () => void
    setCode: (code: string) => void
    clearCode: () => void
  }
}>()(
  devtools(
    set => ({
      email: '',
      code: '',
      actions: {
        setEmail: (email: string) => set({ email }),
        clearEmail: () => set({ email: '' }),
        setCode: (code: string) => set({ code }),
        clearCode: () => set({ code: '' })
      }
    }),
    {
      name: 'forgot-password-store',
      enabled: !import.meta.env.PROD // enable devtools only in development
    }
  )
)

export type ExtractState<S> = S extends {
  getState: () => infer T
}
  ? T
  : never

type Params<U> = Parameters<typeof useStore<typeof forgotPasswordStore, U>>

const emailSelector = (state: ExtractState<typeof forgotPasswordStore>) => state.email
const codeSelector = (state: ExtractState<typeof forgotPasswordStore>) => state.code
const actionsSelector = (state: ExtractState<typeof forgotPasswordStore>) => state.actions

export const getEmail = () => emailSelector(forgotPasswordStore.getState())
export const getCode = () => codeSelector(forgotPasswordStore.getState())
export const getForgotPasswordActions = () => actionsSelector(forgotPasswordStore.getState())

export function useForgotPasswordStore<U>(selector: Params<U>[1]) {
  return useStore(forgotPasswordStore, selector)
}

export function useForgotPasswordActions() {
  return useForgotPasswordStore(getForgotPasswordActions)
}

export function useForgotPasswordEmail() {
  return useForgotPasswordStore(getEmail)
}

export function useForgotPasswordCode() {
  return useForgotPasswordStore(getCode)
}
