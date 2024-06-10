import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Components/theme/default.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider >
  </React.StrictMode>,
)
