import styled from "styled-components";
import missionsData from "./missions-mock-data.json";
import MissionCard from "../MissionCard";

const StyledMissionsList = styled.div`
  width: 100%;
  padding: 32px 24px;

  .list-title {
    font-size: 22px;
    font-weight: 600;
    color: #3f4646;
    margin-bottom: 32px;
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
            mission={{
              name: mission.name,
              image: mission.image,
              manufacturer: mission.manufacturers[0],
              status: mission.status,
              desc: mission.shortDescription,
            }}
          />
        ))}
      </div>
    </StyledMissionsList>
  );
};

export default MissionsList;
