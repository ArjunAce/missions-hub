import styled from "styled-components";

export default styled.div`
  min-height: 78px;
  display: flex;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #bebcbd;

  .navigation-container {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 54px;
        margin-right: 16px;
      }

      h1 {
        font-size: 20px;
        font-weight: 700;
        color: #3c4242;
      }
    }

    .nav-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-left: 100px;

      a {
        font-size: 18px;
        font-weight: 600;
        color: #807d7e;
        margin: 6px 0;
        + a {
          margin-left: 40px;
        }
      }
    }
  }
`;
