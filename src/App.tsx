import { useMemo } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import generateTheme from 'theme/theme'
import { useAppSelector } from 'redux/hooks'
import Router from 'routes/Router'

function App() {
  const appConfig = useAppSelector((state) => state.appReducer)

  const theme = useMemo(() => generateTheme(appConfig.theme), [appConfig.theme])

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
