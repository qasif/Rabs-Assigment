import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import PopularMovies from "./Component/PopularMovies";
import TvShows from "./Component/TvShows";
import RecentlyAdded from "./Component/RecentlyAdded";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/popularmovies" element={<PopularMovies/>} />
        <Route path="/recentlyadded" element={<RecentlyAdded/>} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
