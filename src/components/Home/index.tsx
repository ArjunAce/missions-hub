import { useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "../ErrorBoundary";
import Filters from "../Filters";
import MissionsList from "../MissionsList";
import Skeleton from "./Skeleton";

const StyledHome = styled.div`
  height: 100%;
  display: flex;

  .filters-container {
    width: 288px;
    padding: 32px 24px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Home = (_: any) => {
  const [loading, seLoading] = useState<boolean>(true);

  return (
    <StyledHome className="container home-container">
      {loading && <Skeleton />}
      <ErrorBoundary>
        <Filters loading={loading} />
        <MissionsList loading={loading} setLoading={seLoading} />
      </ErrorBoundary>
    </StyledHome>
  );
};

export default Home;
