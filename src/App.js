import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LandingPage from "./components/landing-page";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <head>
        <title>Level Up</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <LandingPage />
    </div>
  );
}

export default App;
