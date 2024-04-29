import styled from "styled-components";
import ErrorBoundary from "../ErrorBoundary";
import Filters from "../Filters";
import MissionsList from "../MissionsList";

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
      <ErrorBoundary>
        <Filters />
        <MissionsList />
      </ErrorBoundary>
    </StyledHome>
  );
};

export default Home;
