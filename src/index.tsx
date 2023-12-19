import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'locales/i18nInstance'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <I18nextProvider i18n={i18n}>
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  </I18nextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
