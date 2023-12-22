export const CONFIG = {
  BASE_URL_API: import.meta.env.VITE_APP_API_ENDPOINT ?? '',
  BASE_URL_CHAT: import.meta.env.VITE_APP_CHAT_ENDPOINT ?? '',
  FAKE_BASE_URL_API: import.meta.env.VITE_APP_API_FAKE_ENDPOINT ?? '', // TODO - Delete when fake api is no longer needed
  MAP_KEY: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY ?? '',
  MAP_URL: import.meta.env.VITE_APP_GOOGLE_MAPS_URL ?? '',
  API_KEY: import.meta.env.VITE_APP_API_KEY ?? '',
  APP_SECRET_KEY: import.meta.env.VITE_APP_SECRET_KEY ?? '',
}
