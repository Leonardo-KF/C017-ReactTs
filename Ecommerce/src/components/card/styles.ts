import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 15px;

  img {
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0 0px;
  }

  span {
    color: red;
  }

  h3 {
    font-size: 1rem;
  }
`;
