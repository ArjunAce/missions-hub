import styled from "styled-components";
import bgImg from "../../assets/background/bg-2.jpg";

export default styled.section`
  .hero-image-bg {
    height: 460px;
    position: relative;
    display: flex;
    align-items: end;
    background-image: url(${bgImg});
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
      font-weight: 500;
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