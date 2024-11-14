import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlaylistPage from './components/PlaylistPage';
import SongPage from './components/SongPage';
import AboutPage from "./components/AboutPage";
// import NotFoundPage from './components/NotFoundPage'; kanske nåt att lägga till?
import './App.css'

function App() {

  return (
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playlists/:id" element={<PlaylistPage />} />
        <Route path="/songs/:id" element={<SongPage />} />
        <Route path="/user" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;