import StyledNavBar from "./styles.ts";
import logo from "./../../assets/logo.svg";

const NavigationBar = props => {
  return (
    <StyledNavBar>
      <div className="container navigation-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Missions Hub Logo" />
        </a>
        <a href="#home">
          <h1>missions-hub</h1>
        </a>
        <nav role="navigation" className="nav-menu">
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </StyledNavBar>
  );
};

export default NavigationBar;
