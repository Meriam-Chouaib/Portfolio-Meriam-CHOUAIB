export const joinPaths = (paths: string[], isAlreadyPath?: boolean): string => {
  let joinedPath = ''
  for (const path of paths) {
    joinedPath += `${path}${!isAlreadyPath ? '/' : ''}`
  }
  return joinedPath
}

export const createPath = (path: string): string => {
  return `/${path}`
}

export const getParamsFromURL = (key: string) => {
  const currentURL = window.location.href
  const urlParams = new URLSearchParams(new URL(currentURL).search)
  return urlParams.get(key)
}
