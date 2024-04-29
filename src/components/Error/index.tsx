import styled from "styled-components";
import errorImg from "../../assets/error.jpg";

const StyledError = styled.section`
  width: 100%;
  height: calc(100vh - 78px - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
    height: auto;
  }
`;

const Error = () => {
  return (
    <StyledError>
      <img src={errorImg} alt="Error image" />
      <p>Some error occured. Please try again later.</p>
    </StyledError>
  );
};

export default Error;
