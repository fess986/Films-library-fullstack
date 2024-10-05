import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getFilmList } from './store/films/filmsSelector';
import { getIsAuth } from './store/user/userSelectors';
import api from './api/api';
import { Films } from './mock/films';

import useRoutes from './hooks/useRoutes';

function App() {

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const filmsF = await api.get('/films').then(() => Films);
        console.log(filmsF);
      } catch (error) {
        console.log('error......................');
        console.log(error);
      }
    }

    fetchFunc()
  }, []);

  const films = useSelector(getFilmList);
  const isAuth = useSelector(getIsAuth);
  
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
