import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes } from '../const/const'
import { FilmProps } from '../mock/films'

import Layout from '../Components/Layout/Layout'
import Main from '../Components/pages/Main/Main'
import FilmCard from '../Components/pages/FilmCard/FilmCard'
import HeaderReview from '../Components/Layout/Header/HeaderReview/HeaderReview'
import BodyReview from '../Components/Layout/Body/BodyReview/BodyReview'
import AddReview from '../Components/pages/AddReview/AddReview'
import HeaderSignIn from '../Components/Layout/Header/HeaderSignIn/HeaderSignIn'
import BodySignIn from '../Components/Layout/Body/BodySignIn/BodySignIn'
import SignIn from '../Components/pages/SignIn/SignIn'
import MyList from '../Components/pages/MyList/MyList'
import HeaderPlayer from '../Components/Layout/Header/HeaderPlayer/HeaderPlayer'
import BodyPlayer from '../Components/Layout/Body/BodyPlayer/BodyPlayer'
import Player from '../Components/pages/Player/Player'
import HeaderMain from '../Components/Layout/Header/HeaderMain/HeaderMain'
import BodyMain from '../Components/Layout/Body/BodyMain/BodyMain'
import Footer from '../Components/Layout/Footer/Footer'

export default function useRoutes(isAuth: boolean, films: FilmProps[]) {
  console.log(isAuth);

  return (
    <Routes>
      <Route path={AppRoutes.ROOT} element={<Layout
        HeaderComponent={HeaderMain}
        FooterComponent={Footer}
        BodyComponent={BodyMain}
        headerProps={{}}
        bodyProps={{}} />}>

        <Route
          index
          element={<Main films={films} />}
        />

        <Route
          path={AppRoutes.MAIN}
          element={<Main films={films} />}
        />

        <Route
          path={AppRoutes.FILM_CARD}
          element={<FilmCard />}
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        HeaderComponent={HeaderReview}
        FooterComponent={Footer}
        BodyComponent={BodyReview}
        headerProps={{}}
        bodyProps={{}}
      />}>
        <Route
          path={AppRoutes.ADD_REVIEW}
          element={<AddReview />
          }
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        HeaderComponent={HeaderSignIn}
        FooterComponent={Footer}
        BodyComponent={BodySignIn}
        headerProps={{}}
        bodyProps={{}}
      />}>

        <Route
          path={AppRoutes.SIGN_IN}
          element={<SignIn />}
        />

        <Route
          path={AppRoutes.MY_LIST}
          element={<MyList />
          }
        />
      </Route>

      <Route path={AppRoutes.ROOT} element={<Layout
        HeaderComponent={HeaderPlayer}
        BodyComponent={BodyPlayer}
        headerProps={{}}
        bodyProps={{}}
      />}>

        <Route
          path={AppRoutes.PLAYER}
          element={<Player />}
        />

      </Route>
      {/* <Route
      path='*'
      element={<Page404 />}
    /> */}

      <Route path="*" element={<Navigate to={AppRoutes.MAIN} replace />} />

    </Routes>
  )
}