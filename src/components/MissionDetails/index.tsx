import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Mission {
  id: number;
  name: string;
  description: string;
}

const MissionDetails: React.FC = () => {
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
        <>
          <h2>Mission Details</h2>
          <p>ID: {mission.id}</p>
          <p>Name: {mission.name}</p>
          <p>Description: {mission.description}</p>
          {/* Render other mission details here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MissionDetails;
