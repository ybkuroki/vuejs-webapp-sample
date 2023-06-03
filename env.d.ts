/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_API_ROOT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}