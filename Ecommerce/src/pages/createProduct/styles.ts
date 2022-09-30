import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  input {
    border-radius: 10px;
    color: black;
    padding-left: 5px;
    width: 100%;
  }
`;
