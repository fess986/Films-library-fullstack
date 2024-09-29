import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/index.ts'
import { setAuthStatus } from './store/user/userSlice.ts'
import { AuthStatus } from './const/const.ts'
import './styles/styles.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Components/styled/theme/defaultTheme.ts'
import GlobalStyles from './Components/styled/GlobalStyles/globalStyles.ts'

store.dispatch(setAuthStatus(AuthStatus.AUTH))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
        <App />
      <GlobalStyles />
    </ThemeProvider >
  </React.StrictMode>,
)
