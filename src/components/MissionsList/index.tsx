import missionsData from "./missions-mock-data.json";
import MissionCard from "../MissionCard";
import { MISSION_STATUS } from "../../types/mission";
import StyledMissionsList from "./styles";

const MissionsList = () => {
  const data = missionsData;
  return (
    <StyledMissionsList>
      <div className="list-title">All missions</div>
      <div className="list-wrapper">
        {data.map(mission => (
          <MissionCard
            key={mission.id}
            id={mission.id}
            name={mission.name}
            image={mission.image}
            manufacturer={mission.manufacturers[0]}
            status={mission.status as MISSION_STATUS}
            desc={mission.shortDescription}
          />
        ))}
      </div>
    </StyledMissionsList>
  );
};

export default MissionsList;
