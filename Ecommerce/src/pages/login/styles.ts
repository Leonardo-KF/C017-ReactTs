import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  form {
    display: flex;
    min-width: 300px;
    flex-direction: column;
    margin-top: 15px;
  }

  input {
    border-radius: 8px;
    padding-left: 5px;
    height: 1.6rem;
    margin-bottom: 10px;
  }
`;
