export const CONFIG = {
  BASE_URL_API: process.env.REACT_APP_API_ENDPOINT ?? '',
  BASE_URL_CHAT: process.env.REACT_APP_CHAT_ENDPOINT ?? '',
  FAKE_BASE_URL_API: process.env.REACT_APP_API_FAKE_ENDPOINT ?? '', // TODO - Delete when fake api is no longer needed
  MAP_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
  MAP_URL: process.env.REACT_APP_GOOGLE_MAPS_URL ?? '',
  API_KEY: process.env.REACT_APP_API_KEY ?? '',
  APP_SECRET_KEY: process.env.REACT_APP_SECRET_KEY ?? '',
}
