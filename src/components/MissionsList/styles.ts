import styled from "styled-components";

const StyledMissionsList = styled.div`
  width: 100%;
  padding: 32px 24px;

  .list-title {
    font-size: 22px;
    font-weight: 600;
    color: #3f4646;
    margin-bottom: 32px;
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    padding: 20px 0;

    .list-title {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;

export default StyledMissionsList;
