import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import RoutesConfig from "./config/routes.config";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="container">
        <Routes>
          <Route path={RoutesConfig.home} element={<Home />} />
          <Route path={RoutesConfig.about} element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
