import styled from "styled-components";
const StyledMissionCard = styled.div``;

interface Props {
  mission: {
    name: string;
    manufacturer: string;
    image: string;
    desc: string;
    status: string;
  };
}

const MissionCard = ({ mission: { name, manufacturer, image, desc, status } }: Props) => {
  return (
    <StyledMissionCard>
      <img src={image} />
      <div className="mission-details">
        <div className="title-wrap">
          <span className="title">{name}</span>
          <span className="status">{status}</span>
        </div>
        <div className="manufacturer">{manufacturer}</div>
        <div className="desc">{desc}</div>
      </div>
    </StyledMissionCard>
  );
};

export default MissionCard;
