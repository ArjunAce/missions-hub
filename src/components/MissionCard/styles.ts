import styled from "styled-components";

export default styled.div`
  min-width: 280px;
  max-width: 280px;
  height: 440px;
  max-height: 440px;

  &:not(:nth-child(3n)) {
    margin-right: 32px;
  }

  img {
    width: 100%;
    height: auto;
    min-width: 280px;
    min-height: 280px;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 16px;
      font-weight: 600;
      color: #3c4242;
    }

    .status {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #007f9b;
      border: 1px solid #007f9b;
      border-radius: 10px;
      padding: 2px 5px;

      &.completed {
        color: #009b10;
        border-color: #009b10;
      }

      &.upcoming {
        color: #3c009d;
        border-color: #3c009d;
      }
    }
  }

  .manufacturer {
    font-size: 14px;
    font-weight: 500;
    color: #807d7e;
    margin-bottom: 4px;
  }

  .desc {
    font-size: 14px;
    font-weight: 300;
    color: #807d7e;
  }
`;