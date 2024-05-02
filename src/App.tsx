import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DatabaseProvider from "./Contexts/Database";
import About from "./components/About";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import MissionDetails from "./components/MissionDetails";
import NavigationBar from "./components/NavigationBar";
import RoutesConfig from "./config/routes.config";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <ErrorBoundary>
        <DatabaseProvider>
          <main>
            <Routes>
              <Route path={RoutesConfig.missions} element={<Home />} />
              <Route path={RoutesConfig.mission} element={<MissionDetails />} />
              <Route path={RoutesConfig.about} element={<About />} />
              <Route path={RoutesConfig.home} element={<Navigate to={RoutesConfig.missions} />} />
            </Routes>
          </main>
        </DatabaseProvider>
      </ErrorBoundary>
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
