import { Routes, Route, Navigate } from 'react-router-dom'




import BodyMain from '../Components/Layout/Body/BodyMain/BodyMain'
import BodyPlayer from '../Components/Layout/Body/BodyPlayer/BodyPlayer'
import BodySignIn from '../Components/Layout/Body/BodySignIn/BodySignIn'

import HeaderSignIn from '../Components/Layout/Header/HeaderSignIn/HeaderSignIn'
import HeaderFilmCard from '../Components/Layout/Header/HeaderFilmCard/HeaderFilmCard'
import HeaderMain from '../Components/Layout/Header/HeaderMain/HeaderMain'

import Footer from '../Components/Layout/Footer/Footer'
import FooterFilmCard from '../Components/Layout/Footer/FooterFilmCard'
import HeaderReview from '../Components/Layout/Header/HeaderReview/HeaderReview'
import Layout from '../Components/Layout/Layout'
import AddReview from '../Components/pages/AddReview/AddReview'
import FilmCard from '../Components/pages/FilmCard/FilmCard'
import Main from '../Components/pages/Main/Main'
import MyList from '../Components/pages/MyList/MyList'
import Player from '../Components/pages/Player/Player'
import SignIn from '../Components/pages/SignIn/SignIn'
import { AppRoutes } from '../const/const'
import { Films } from '../mock/films'
import { FilmProps } from '../types/types'

export default function useRoutes(films: FilmProps[]) {

  return (
    <Routes>
      <Route path={AppRoutes.ROOT} element={<Layout
        BodyComponent={BodyMain}
        HeaderComponent={HeaderMain}
        FooterComponent={Footer}
        bodyProps={{}} 
        headerProps={{}}
        />}>

        <Route
          index
          element={<Main films={films} />}
        />

        <Route
          path={AppRoutes.MAIN}
          element={<Main films={films} />}
        />

      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        BodyComponent={BodyMain}
        HeaderComponent={HeaderFilmCard}
        FooterComponent={FooterFilmCard}
        bodyProps={{}} 
        headerProps={{}}
        />}>

        <Route
          path={AppRoutes.FILM_CARD}
          element={<FilmCard />}
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        BodyComponent={BodyMain}
        HeaderComponent={HeaderReview}
        FooterComponent={Footer}
        bodyProps={{}}
        headerProps={{currentFilm: Films[0]}}
      />}>
        <Route
          path={AppRoutes.ADD_REVIEW}
          element={<AddReview />
          } 
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        BodyComponent={BodySignIn}
        HeaderComponent={HeaderSignIn}
        FooterComponent={Footer}
        bodyProps={{}}
        headerProps={{}}
      />}>

        <Route
          path={AppRoutes.SIGN_IN}
          element={<SignIn />}
        />

        <Route
          path={AppRoutes.MY_LIST}
          element={<MyList />}
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        BodyComponent={BodyPlayer}
        bodyProps={{}}
        headerProps={{}}
      />}>

        <Route
          path={AppRoutes.PLAYER}
          element={<Player film={Films[0]}/>}
        />
      </Route>

      <Route path="*" element={<Navigate to={AppRoutes.MAIN} replace />} />

    </Routes>
  )
}