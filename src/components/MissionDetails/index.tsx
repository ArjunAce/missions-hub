import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledDetailsWrapper from "./styles";
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

  return (
    <div>
      {mission ? (
        <StyledDetailsWrapper>
          <div className="hero-image-bg">
            <div className="overlay"></div>
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MissionDetails;
