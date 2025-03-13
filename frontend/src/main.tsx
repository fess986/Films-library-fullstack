import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import App from './App.tsx'
import GlobalStyles from './Components/styled/GlobalStyles/globalStyles.ts'
import { defaultTheme } from './Components/styled/theme/defaultTheme.ts'
import { store } from './store/index.ts'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)
