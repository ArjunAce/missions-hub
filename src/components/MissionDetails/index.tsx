import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StyledDetailsWrapper, { StyledDescription } from "./styles";
import routesConfig from "../../config/routes.config";
import missionImage from "../../assets/missions/missions-13.jpg";

interface Mission {
  id: number;
  name: string;
  description: string;
}

const MissionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await fetch("api.missions.com/mission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ missionId: id }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch mission details");
        }
        const data = await response.json();
        setMission(data);
      } catch (error) {
        setMission({
          id: 123,
          name: "Mission name here",
          description: "some desc here",
        });
        console.error("Error fetching mission details:", error);
      }
    };

    fetchMission();
  }, [id]);

  return mission ? (
    <>
      <StyledDetailsWrapper>
        <div className="hero-image-bg">
          <div className="overlay"></div>
          <div className="container back-container">
            <Link to={routesConfig.missions}></Link>
          </div>
          <div className="container key-details">
            <h1>TelSat 1240</h1>
            <h3>NASA</h3>
            <div className="details-wrapper">
              <div className="detail">
                <span className="label">Launch date</span>
                <span className="value">24th January 2022</span>
              </div>
              <div className="detail">
                <span className="label">Status</span>
                <span className="value">In progress</span>
              </div>
              <div className="detail">
                <span className="label">Duration</span>
                <span className="value">1 year and 7 months</span>
              </div>
              <div className="detail">
                <span className="label">Current location</span>
                <span className="value">Low Earth Orbit</span>
              </div>
            </div>
          </div>
        </div>
      </StyledDetailsWrapper>
      <StyledDescription className="container">
        <div className="desc-title">TelSat 1240 In depth</div>
        <div className="description-wrap">
          <p>
            On March 27, 1958, the U.S. Department of Defense announced the launch of four to five lunar probes later in
            the year, all under the supervision of the Advanced Research Projects Agency (ARPA) as part of scientific
            investigations during the International Geophysical Year.
          </p>
          <p>
            Of these, one or two (later confirmed as two) would be carried out by the Army’s Ballistic Missile Agency
            and the other three by the Air Force’s Ballistic Missile Division. This launch was the first of three Air
            Force attempts, and the first attempted deep space launch by any country.
          </p>
          <img src={missionImage} alt="mission image" />
          <p>
            The Able 1 spacecraft, a squat conical fiberglass structure built by Space Technology Laboratories (STL),
            carried a crude infrared TV scanner. The simple thermal radiation device carried a small parabolic mirror
            for focusing reflected light from the lunar surface onto a cell that would transmit voltage proportional to
            the light it received. Engineers painted a pattern of dark and light stripes on the spacecraft’s outer
            surface to regulate internal temperature. The spacecraft was also disinfected with ultraviolet light prior
            to launch.
          </p>
          <p>
            The launch vehicle was a three-stage variant of the Thor intermediate-range ballistic missile (IRBM) with
            elements appropriated from the Vanguard rocket used on its second and third stages.
          </p>
          <p>
            The entire project involved 3,000 people from 52 scientific and industrial firms, all but six of which firms
            were located in Southern California.
          </p>
        </div>
      </StyledDescription>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default MissionDetails;
