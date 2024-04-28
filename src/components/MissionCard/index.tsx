import { Link } from "react-router-dom";
import { MISSION_STATUS } from "../../types/mission";
import StyledMissionCard from "./styles";
import routesConfig from "../../config/routes.config";
import { createURL } from "../../utils";

interface Props {
  id: string;
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

const MissionCard = ({ id, name, manufacturer, image, desc, status }: Props) => {
  return (
    <StyledMissionCard>
      <Link to={createURL(routesConfig.mission, { id })}>
        <img src={image} />
        <div className="mission-details">
          <div className="title-wrap">
            <span className="title">{name}</span>
            <span className={`status ${[status?.toLowerCase()]}`}>{MISSION_STATUS_LABELS[status]}</span>
          </div>
          <div className="manufacturer">{manufacturer}</div>
          <div className="desc">{desc}</div>
        </div>
      </Link>
    </StyledMissionCard>
  );
};

export default MissionCard;
