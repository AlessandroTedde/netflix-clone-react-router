import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import "./App.css";
import TopBar from "./Components/TopBar";
import ActionBar from "./Components/ActionBar";
// import ImgRow from "./Components/ImgRow";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <TopBar source={logo} />
        <ActionBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel title="Trending Now" queryParam="superman" />
                <Carousel title="Watch It Again" queryParam="batman" />
                <Carousel title="New Releases" queryParam="aquaman" />
              </>
            }
          />
          <Route path="trending-now" element={<Carousel title="Trending Now" queryParam="superman" />} />
          <Route path="watch-it-again" element={<Carousel title="Watch It Again" queryParam="batman" />} />
          <Route path="new-releases" element={<Carousel title="New Releases" queryParam="aquaman" />} />
          <Route path="/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
