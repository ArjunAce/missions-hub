import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { MISSION_STATUS, Mission } from "../../types/mission";
import { decodeParams } from "../../utils";
import { DatabaseContext } from "../../Contexts/Database";
import MissionCard from "../MissionCard";
import StyledMissionsList from "./styles";

const MissionsList = ({ loading, setLoading }: { loading: boolean; setLoading: Function }) => {
  const [data, setData] = useState<Mission[]>([]);
  const db = useContext(DatabaseContext)!;
  const { search } = useLocation();
  const queryParams = useMemo(() => decodeParams(search), [search]);

  useEffect(() => {
    const getMissionsList = async () => {
      setLoading(true);
      try {
        if (db) {
          let missions = null;

          if (Object.keys(queryParams).length) {
            const firestoreFilter = db.getFirestoreFiltersFromParams(queryParams);
            missions = await db.getFilteredMissions(firestoreFilter);
          } else {
            missions = await db.getAllMissions();
          }
          setData(missions || []);
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
    getMissionsList();
  }, [db, queryParams]);

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
