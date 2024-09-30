import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Provider as ReduxProvider } from 'react-redux'

import App from './App.tsx'
import { store } from './store/index.ts'
import { setAuthStatus } from './store/user/userSlice.ts'
import { setActiveFilm, setFilmList } from './store/films/filmsSlice.ts'

import { AuthStatus } from './const/const.ts'
import { defaultTheme } from './Components/styled/theme/defaultTheme.ts'
import GlobalStyles from './Components/styled/GlobalStyles/globalStyles.ts'
import { Films } from './mock/films.ts'
// import { getActiveGenre } from './store/app/appSelectors.ts'

import './styles/styles.css'

// console.log(getActiveGenre(store.getState()))  
store.dispatch(setAuthStatus(AuthStatus.NO_AUTH))
store.dispatch(setFilmList(Films));
store.dispatch(setActiveFilm(Films[0]));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
        <GlobalStyles />
      </ThemeProvider >
    </ReduxProvider>
  </React.StrictMode>,
)
