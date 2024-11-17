import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes } from '../const/const'
import { FilmProps } from '../types/types'

import Layout from '../Components/Layout/Layout'

import Main from '../Components/pages/Main/Main'
import FilmCard from '../Components/pages/FilmCard/FilmCard'
import AddReview from '../Components/pages/AddReview/AddReview'
import SignIn from '../Components/pages/SignIn/SignIn'
import MyList from '../Components/pages/MyList/MyList'
import Player from '../Components/pages/Player/Player'

import BodySignIn from '../Components/Layout/Body/BodySignIn/BodySignIn'
import BodyMain from '../Components/Layout/Body/BodyMain/BodyMain'
import BodyPlayer from '../Components/Layout/Body/BodyPlayer/BodyPlayer'

import HeaderReview from '../Components/Layout/Header/HeaderReview/HeaderReview'
import HeaderSignIn from '../Components/Layout/Header/HeaderSignIn/HeaderSignIn'
import HeaderFilmCard from '../Components/Layout/Header/HeaderFilmCard/HeaderFilmCard'
import HeaderMain from '../Components/Layout/Header/HeaderMain/HeaderMain'

import Footer from '../Components/Layout/Footer/Footer'
import FooterFilmCard from '../Components/Layout/Footer/FooterFilmCard'

import { Films } from '../mock/films'

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