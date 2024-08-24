import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./NavBar.jsx";
import Home from "./home";
import DisplayNowPlaying from './DisplayNowPlaying.jsx';
import DisplayTopRated from './DisplayTopRated.jsx';
import DisplayPopular from './DisplayPopular.jsx';
import DisplayUpcoming from './DisplayUpcoming.jsx';

import MovieDetailPage from './MovieDetailPage.jsx'; 
import NotFoundPage from './NotFoundPage.jsx'; 

import DisplaySignUp from './DisplaySignUp.jsx';
import DisplayLogin from './DisplayLogin.jsx';

import DisplaySearchInfo from './DisplaySearchInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/displaytoprated" element={<DisplayTopRated />} />
          <Route path="/displaynowplaying" element={<DisplayNowPlaying />} />
          <Route path="/displaypopular" element={<DisplayPopular />} />
          <Route path="/displayupcoming" element={<DisplayUpcoming />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} /> {/* 동적 라우트 추가 */}
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<DisplaySearchInfo />} />
          <Route path="/signuppage" element={<DisplaySignUp />} />
          <Route path="/loginpage" element={<DisplayLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

