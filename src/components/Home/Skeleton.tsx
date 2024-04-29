import styled from "styled-components";

const TextSkeleton = styled.div<{ width?: number; height?: number }>`
  width: ${({ width = 180 }) => width + "px"};
  height: ${({ height = 20 }) => height + "px"};

  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 10px;
  animation: shine-container-items 2s infinite ease-out;

  @keyframes shine-container-items {
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 140px;
    }
  }
`;

const StyledCardSkeleton = styled.div`
  .card {
    width: 280px;
    height: 460px;
    margin-right: 16px;

    .image {
      width: 280px;
      height: 280px;
      margin-bottom: 16px;
      border-radius: 12px;
      background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
      background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
      background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
      background-size: 280px;
      -webkit-animation: shine-image 2s infinite ease-out;
      animation: shine-image 2s infinite ease-out;
    }

    .title-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .manufacturer {
      margin-bottom: 8px;
    }

    .desc {
      width: 280px;
      height: 12px;
      margin-bottom: 6px;
    }
  }

  @keyframes shine-image {
    0% {
      background-position: -32px;
    }
    40%,
    100% {
      background-position: 208px;
    }
  }
`;

const CardSkeleton = () => {
  return (
    <StyledCardSkeleton>
      <div className="card">
        <div className="image"></div>
        <div className="mission-details">
          <div className="title-wrap">
            <TextSkeleton width={160} height={20} />
            <TextSkeleton width={80} height={20} />
          </div>
          <TextSkeleton className="manufacturer" width={120} height={20} />
          <TextSkeleton className="desc" width={280} height={12} />
          <TextSkeleton className="desc" width={280} height={12} />
          <TextSkeleton className="desc" width={280} height={12} />
        </div>
      </div>
    </StyledCardSkeleton>
  );
};

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  padding: 32px 24px;
`;

const StyledFilter = styled.div`
  width: 288px;
  padding-right: 20px;

  .title {
    margin-bottom: 12px;
  }
  .value {
    margin-bottom: 6px;
  }
`;
const StyledMissionsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const HomeSkeleton = () => {
  return (
    <StyledHome>
      <StyledFilter>
        <TextSkeleton className="title" width={260} height={24} />
        <TextSkeleton className="value" width={120} height={16} />
        <TextSkeleton className="value" width={150} height={16} />
      </StyledFilter>
      <StyledMissionsList>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </StyledMissionsList>
    </StyledHome>
  );
};

export default HomeSkeleton;
