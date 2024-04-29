import { useState } from "react";
import styled from "styled-components";
import Error from "../Error";
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
  const [error, setError] = useState<boolean>(true);

  return (
    <StyledHome className="container home-container">
      {error && <Error />}
      {!error && (
        <>
          <Filters />
          <MissionsList />
        </>
      )}
    </StyledHome>
  );
};

export default Home;
