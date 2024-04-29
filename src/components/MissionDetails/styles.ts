import styled from "styled-components";
import backImg from "../../assets/back.svg";

export default styled.section<{ bgImg: string }>`
  .hero-image-bg {
    height: 460px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    background-image: url(${({ bgImg }) => bgImg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 32px 0 60px;

    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.7;
    }

    .back-container {
      position: relative;

      a {
        width: 20px;
        height: 20px;
        display: block;
        background-image: url(${backImg});
        background-size: cover;
      }
    }

    .key-details {
      z-index: 1;
    }
    h1 {
      font-size: 48px;
      font-weight: 500;
      line-height: normal;
      color: #ffcb76;
      margin-bottom: 8px;
    }

    h3 {
      font-weight: 500;
      font-size: 32px;
      color: #ffa005;
      margin-bottom: 20px;
    }

    .details-wrapper {
      font-size: 18px;
      color: #cdcdcd;

      .detail {
        margin-bottom: 8px;
      }

      .label {
        width: 160px;
        display: inline-block;
      }
    }
  }
`;

export const StyledDescription = styled.section`
  padding: 40px 0;

  .desc-title {
    font-size: 32px;
    font-weight: 500;
    line-height: normal;
    color: #1b1b1b;
    margin-bottom: 12px;
  }

  .description-wrap {
    p {
      font-size: 16px;
      color: #6b6b6b;
      margin-bottom: 16px;
    }

    img {
      width: 500px;
      height: 500px;
      display: block;
      margin: 0 auto 32px;
    }
  }
`;
