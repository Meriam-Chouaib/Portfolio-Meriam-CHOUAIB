import { useMemo } from 'react'

import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import generateTheme from 'theme/theme'
import { useAppSelector } from 'redux/hooks'
import Router from 'routes/Router'

function App() {
  const appConfig = useAppSelector((state) => state.appReducer)

  const theme = useMemo(() => generateTheme(appConfig.theme), [appConfig.theme])

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
