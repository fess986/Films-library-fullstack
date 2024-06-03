import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Main from './Components/pages/Main/Main'
import FilmCard from './Components/pages/FilmCard/FilmCard'
import HeaderReview from './Components/Layout/Header/HeaderReview/HeaderReview'
import FooterReview from './Components/Layout/Footer/FooterReview/FooterReview'
import BodyReview from './Components/Layout/Body/BodyReview/BodyReview'
import AddReview from './Components/pages/AddReview/AddReview'
import HeaderSignIn from './Components/Layout/Header/HeaderSignIn/HeaderSignIn'
import FooterSignIn from './Components/Layout/Footer/FooterSignIn/FooterSignIn'
import BodySignIn from './Components/Layout/Body/BodySignIn/BodySignIn'
import SignIn from './Components/pages/SignIn/SignIn'
import MyList from './Components/pages/MyList/MyList'
import HeaderPlayer from './Components/Layout/Header/HeaderPlayer/HeaderPlayer'
import FooterPlayer from './Components/Layout/Footer/FooterPlayer/FooterPlayer'
import BodyPlayer from './Components/Layout/Body/BodyPlayer/BodyPlayer'
import Player from './Components/pages/Player/Player'
import Page404 from './Components/pages/Page404/Page404'
import HeaderMain from './Components/Layout/Header/HeaderMain/HeaderMain'
import FooterMain from './Components/Layout/Footer/FooterMain/FooterMain'
import BodyMain from './Components/Layout/Body/BodyMain/BodyMain'


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout
            HeaderComponent={HeaderMain} // Можно не указывать, тогда будет использоваться MainHeader
            FooterComponent={FooterMain}
            BodyComponent={BodyMain}
            headerProps={{}}
            footerProps={{}}
            bodyProps={{}} />}>

            <Route
              index
              element={<Main />}
            />

            <Route
              path="main"
              element={<Main />}
            />

            <Route
              path={'films/:id'}
              element={<FilmCard />}
            />
          </Route>

          <Route path='/' element={<Layout
            HeaderComponent={HeaderReview} // Можно не указывать, тогда будет использоваться MainHeader
            FooterComponent={FooterReview}
            BodyComponent={BodyReview}
            headerProps={{}}
            footerProps={{}}
            bodyProps={{}} // Дополнительные пропсы для Body, если нужны> 
          />}>
            <Route
              path={'films/:id/review'}
              element={<AddReview />
              }
            />
          </Route>

          <Route path='/' element={<Layout
            HeaderComponent={HeaderSignIn} // Можно не указывать, тогда будет использоваться MainHeader
            FooterComponent={FooterSignIn}
            BodyComponent={BodySignIn}
            headerProps={{}}
            footerProps={{}}
            bodyProps={{}} // Дополнительные пропсы для Body, если нужны> 
          />}>

            <Route
              path={'login'}
              element={<SignIn />}
            />

            <Route
              path={'mylist'}
              element={<MyList />
              }
            />

          </Route>

          <Route path='/' element={<Layout
            HeaderComponent={HeaderPlayer} // Можно не указывать, тогда будет использоваться MainHeader
            FooterComponent={FooterPlayer}
            BodyComponent={BodyPlayer}
            headerProps={{}}
            footerProps={{}}
            bodyProps={{}} // Дополнительные пропсы для Body, если нужны> 
          />}>

            <Route
              path={'player/:id'}
              element={<Player />}
            />

          </Route>

          <Route
            path='*'
            element={<Page404 />}
          />

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
