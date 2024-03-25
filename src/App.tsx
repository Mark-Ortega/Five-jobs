import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/pages/NavbarComponent";
import HomePageComponent from "./components/pages/HomePageComponent";
import DiscordComponent from "./components/pages/DiscordComponent";
import ValveComponent from "./components/pages/ValveComponent";
import RiotComponent from "./components/pages/RiotComponent";
import GitStartComponent from "./components/pages/GitStartComponent";
import FreeLanceComponent from "./components/pages/FreeLanceComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/discord" element={<DiscordComponent />} />
        <Route path="/valve" element={<ValveComponent />} />
        <Route path="/riot" element={<RiotComponent />} />
        <Route path="/gitstart" element={<GitStartComponent />} />
        <Route path="/freelance" element={<FreeLanceComponent />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
