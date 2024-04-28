import styled from "styled-components";
import missionsData from "./missions-mock-data.json";
import MissionCard from "../MissionCard";
import { MISSION_STATUS } from "../../types/mission";

const StyledMissionsList = styled.div`
  width: 100%;
  padding: 32px 24px;

  .list-title {
    font-size: 22px;
    font-weight: 600;
    color: #3f4646;
    margin-bottom: 32px;
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;

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
