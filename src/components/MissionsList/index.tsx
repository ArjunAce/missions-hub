import { useContext, useEffect, useState } from "react";
import { MISSION_STATUS, Mission } from "../../types/mission";
import { DatabaseContext } from "../Contexts/Database";
import MissionCard from "../MissionCard";
import StyledMissionsList from "./styles";

const MissionsList = () => {
  const [data, setData] = useState<Mission[]>([]);
  const db = useContext(DatabaseContext)!;

  useEffect(() => {
    const getAllMissions = async () => {
      try {
        if (db) {
          const missions = await db.getAllMissions();
          console.log("missions", missions);
          setData(missions);
        }
      } catch (error) {
        console.log("Error while getting all missions data", error);
      }
    };
    getAllMissions();
  }, [db]);

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
            manufacturer={mission.manufacturer}
            status={mission.status as MISSION_STATUS}
            desc={mission.shortDescription}
          />
        ))}
      </div>
    </StyledMissionsList>
  );
};

export default MissionsList;
