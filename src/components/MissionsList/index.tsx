import { useContext, useEffect, useState } from "react";
import { MISSION_STATUS, Mission } from "../../types/mission";
import { DatabaseContext } from "../Contexts/Database";
import MissionCard from "../MissionCard";
import StyledMissionsList from "./styles";

const MissionsList = ({ loading, setLoading }: { loading: boolean; setLoading: Function }) => {
  const [data, setData] = useState<Mission[]>([]);
  const db = useContext(DatabaseContext)!;

  useEffect(() => {
    const getAllMissions = async () => {
      try {
        if (db) {
          const missions = await db.getAllMissions();
          setData(missions);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        // Handle async code errors
        // https://github.com/facebook/react/issues/14981#issuecomment-468460187
        setData(() => {
          throw error;
        });
      }
    };
    getAllMissions();
  }, [db]);

  return (
    !loading && (
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
    )
  );
};

export default MissionsList;
