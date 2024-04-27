import { MISSION_STATUS } from "../../types/mission";
import StyledMissionCard from "./styles";

interface Props {
  name: string;
  manufacturer: string;
  image: string;
  desc: string;
  status: MISSION_STATUS;
}

const MISSION_STATUS_LABELS = {
  [MISSION_STATUS.IN_PROGRESS]: "In progress",
  [MISSION_STATUS.COMPLETED]: "Completed",
  [MISSION_STATUS.UPCOMING]: "Upcoming",
};

const MissionCard = ({ name, manufacturer, image, desc, status }: Props) => {
  return (
    <StyledMissionCard>
      <img src={image} />
      <div className="mission-details">
        <div className="title-wrap">
          <span className="title">{name}</span>
          <span className={`status ${[status?.toLowerCase()]}`}>{MISSION_STATUS_LABELS[status]}</span>
        </div>
        <div className="manufacturer">{manufacturer}</div>
        <div className="desc">{desc}</div>
      </div>
    </StyledMissionCard>
  );
};

export default MissionCard;
