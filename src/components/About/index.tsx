import { Link } from "react-router-dom";
import routesConfig from "../../config/routes.config";

const About = props => {
  return (
    <section className="container">
      <div>This is a sample about page.</div>
      <Link to={routesConfig.home}>Go back</Link>
    </section>
  );
};

export default About;
