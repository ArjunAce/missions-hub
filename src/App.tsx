import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import RoutesConfig from "./config/routes.config";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import MissionDetails from "./components/MissionDetails";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path={RoutesConfig.missions} element={<Home />} />
          <Route path={RoutesConfig.mission} element={<MissionDetails />} />
          <Route path={RoutesConfig.about} element={<About />} />
          <Route path={RoutesConfig.home} element={<Navigate to={RoutesConfig.missions} />} />
        </Routes>
      </main>
      <footer className="container">
        <p>
          &copy; {new Date().getFullYear()} missions-hub | Made with ❤️ by{" "}
          <a href="https://github.com/ArjunAce" target="_blank">
            Arjun
          </a>
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
