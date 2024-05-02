import { useState } from "react";
import styled from "styled-components";
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
      <Filters loading={loading} />
      <MissionsList loading={loading} setLoading={seLoading} />
    </StyledHome>
  );
};

export default Home;
