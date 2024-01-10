import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import "./App.css";
import TopBar from "./Components/TopBar";
import ActionBar from "./Components/ActionBar";
// import ImgRow from "./Components/ImgRow";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App bg-dark">
      <TopBar source={logo} />
      <ActionBar />
      <Carousel title="Trending Now" queryParam="superman" />
      <Carousel title="Watch It Again" queryParam="batman" />
      <Carousel title="New Releases" queryParam="aquaman" />
      <Footer />
    </div>
  );
}

export default App;
