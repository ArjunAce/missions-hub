import styled from "styled-components";

const desktopCardWidth = "280px";
const mobileCardWidth = `calc((100vw - 32px) / 2 - 10px)`;

export default styled.div`
  min-width: ${desktopCardWidth};
  max-width: ${desktopCardWidth};
  height: 460px;
  max-height: 460px;

  &:not(:nth-child(3n)) {
    margin-right: 32px;
  }

  a {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
    min-width: ${desktopCardWidth};
    min-height: ${desktopCardWidth};
    border-radius: 12px;
    margin-bottom: 16px;
    background-image: url("data:image/jpeg;base64,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");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      max-height: 20px;
      font-size: 16px;
      font-weight: 600;
      color: #3c4242;
      overflow: hidden;
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

  @media (max-width: 1180px) {
    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
  }

  @media (max-width: 767px) {
    min-width: ${mobileCardWidth};
    max-width: ${mobileCardWidth};
    height: 490px;
    max-height: 490px;

    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }

    img {
      min-width: ${mobileCardWidth};
      min-height: ${mobileCardWidth};
      margin-bottom: 8px;
    }

    .title {
      font-size: 14px;
    }

    .manufacturer,
    .desc {
      font-size: 12px;
    }
  }

  @media (max-width: 650px) {
    height: 460px;
  }

  @media (max-width: 590px) {
    height: 440px;
  }

  @media (max-width: 490px) {
    height: 400px;
  }
`;
