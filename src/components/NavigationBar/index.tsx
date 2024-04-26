import { Link } from "react-router-dom";
import StyledNavBar from "./styles.ts";
import logo from "./../../assets/logo.svg";
import RoutesConfig from "../../config/routes.config.ts";

const NavigationBar = props => {
  return (
    <StyledNavBar>
      <div className="container navigation-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Missions Hub Logo" />
          <h1>missions-hub</h1>
        </a>
        <nav role="navigation" className="nav-menu">
          <Link to={RoutesConfig.home}>Home</Link>
          <Link to={RoutesConfig.about}>About</Link>
        </nav>
      </div>
    </StyledNavBar>
  );
};

export default NavigationBar;
