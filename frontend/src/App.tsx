import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { Films } from './mock/films'

import useRoutes from './hooks/useRoutes';

function App() {

  const films = Films;
  const isAuth = false;
  const routes = useRoutes(isAuth, films)

  return (
    <>
      <BrowserRouter>
        {routes}
      </BrowserRouter >
    </>
  )
}

export default App
