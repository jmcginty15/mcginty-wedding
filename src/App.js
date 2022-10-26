import { Route, Routes, Navigate } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import RSVP from "./components/rsvp/RSVP";
import Registry from "./components/registry/Registry";
import Photos from "./components/photos/Photos";
import Travel from "./components/travel/Travel";
import Info from "./components/info/Info";
import flowers from "./assets/flowers.jpg";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${flowers})` }}>
      <LoadScript googleMapsApiKey="AIzaSyACGH9R-aRZUG5Wd5A6ro_F2yu8Ea65vXA">
        <NavBar />
        <div className="App-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rsvp" element={<RSVP />} />
            <Route exact path="/registry" element={<Registry />} />
            <Route exact path="/photos" element={<Photos />} />
            <Route exact path="/travel" element={<Travel />} />
            <Route exact path="/orthodox-wedding" element={<Info />} />
          </Routes>
        </div>
      </LoadScript>
    </div>
  );
}

export default App;
