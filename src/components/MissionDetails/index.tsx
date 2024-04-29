import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MISSION_STATUS_LABELS } from "../../config/constants";
import routesConfig from "../../config/routes.config";
import { Mission } from "../../types/mission";
import { DatabaseContext } from "../Contexts/Database";
import StyledDetailsWrapper, { StyledDescription } from "./styles";

const MissionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [mission, setMission] = useState<Mission | null>(null);
  const db = useContext(DatabaseContext)!;

  useEffect(() => {
    const getMissionDetails = async () => {
      try {
        if (db && id) {
          const mission = await db.getMissionById(id);
          setMission(mission);
        }
      } catch (error) {
        setMission(() => {
          throw error;
        });
      }
    };
    getMissionDetails();
  }, [db, id]);

  const keyDetails = mission
    ? [
        {
          label: "Launch date",
          value: "24th January 2022",
        },
        {
          label: "Status",
          value: MISSION_STATUS_LABELS[mission.status],
        },
        {
          label: "Duration",
          value: "1 year and 7 months",
        },
        {
          label: "Current location",
          value: "Low Earth Orbit",
        },
      ]
    : [];

  return mission ? (
    <>
      <StyledDetailsWrapper bgImg={mission.heroImage}>
        <div className="hero-image-bg">
          <div className="overlay"></div>
          <div className="container back-container">
            <Link to={routesConfig.missions}></Link>
          </div>
          <div className="container key-details">
            <h1>{mission.name}</h1>
            <h3>{mission.manufacturer}</h3>
            <div className="details-wrapper">
              {keyDetails.map(({ label, value }, index) => (
                <div className="detail" key={index}>
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StyledDetailsWrapper>
      <StyledDescription className="container">
        <div className="desc-title">{mission.name} in depth</div>
        <div className="description-wrap">
          {mission.descFirstHalf.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
          <img src={mission.missionImages[0]} alt="mission image" />
          {mission.descSecondHalf.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </StyledDescription>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default MissionDetails;
