/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_DEVELOP: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
