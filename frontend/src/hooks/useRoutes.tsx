import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes } from '../const/const'
import { FilmProps } from '../mock/films'

import Layout from '../Components/Layout/Layout'
import Main from '../Components/pages/Main/Main'
import FilmCard from '../Components/pages/FilmCard/FilmCard'
import HeaderReview from '../Components/Layout/Header/HeaderReview/HeaderReview'
import FooterReview from '../Components/Layout/Footer/FooterReview/FooterReview'
import BodyReview from '../Components/Layout/Body/BodyReview/BodyReview'
import AddReview from '../Components/pages/AddReview/AddReview'
import HeaderSignIn from '../Components/Layout/Header/HeaderSignIn/HeaderSignIn'
import FooterSignIn from '../Components/Layout/Footer/FooterSignIn/FooterSignIn'
import BodySignIn from '../Components/Layout/Body/BodySignIn/BodySignIn'
import SignIn from '../Components/pages/SignIn/SignIn'
import MyList from '../Components/pages/MyList/MyList'
import HeaderPlayer from '../Components/Layout/Header/HeaderPlayer/HeaderPlayer'
import FooterPlayer from '../Components/Layout/Footer/FooterPlayer/FooterPlayer'
import BodyPlayer from '../Components/Layout/Body/BodyPlayer/BodyPlayer'
import Player from '../Components/pages/Player/Player'
import HeaderMain from '../Components/Layout/Header/HeaderMain/HeaderMain'
import FooterMain from '../Components/Layout/Footer/FooterMain/FooterMain'
import BodyMain from '../Components/Layout/Body/BodyMain/BodyMain'
// import Page404 from '../Components/pages/Page404/Page404'

export default function useRoutes(isAuth: boolean, films: FilmProps[]) {
  console.log(isAuth);

  return (
    <Routes>
      <Route path={AppRoutes.ROOT} element={<Layout
        HeaderComponent={HeaderMain}
        FooterComponent={FooterMain}
        BodyComponent={BodyMain}
        headerProps={{}}
        footerProps={{}}
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
        FooterComponent={FooterReview}
        BodyComponent={BodyReview}
        headerProps={{}}
        footerProps={{}}
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
        FooterComponent={FooterSignIn}
        BodyComponent={BodySignIn}
        headerProps={{}}
        footerProps={{}}
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
        FooterComponent={FooterPlayer}
        BodyComponent={BodyPlayer}
        headerProps={{}}
        footerProps={{}}
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