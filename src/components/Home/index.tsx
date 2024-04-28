import Filters from "../Filters";
import MissionsList from "../MissionsList";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100%;
  display: flex;

  .filters-container {
    width: 288px;
    padding: 32px 24px;
  }
`;

const Home = props => {
  return (
    <StyledHome className="container home-container">
      <Filters />
      <MissionsList />
    </StyledHome>
  );
};

export default Home;
