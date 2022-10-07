import styled from "styled-components";

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

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

export const PasswordDiv = styled.div`
  display: flex;
  width: 100%;

  input {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 8px 0px 0px 8px !important;
  }

  button {
    display: flex;
    background-color: white;
    border: none;
    border-radius: 0px 8px 8px 0px;
    height: 1.6rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-right: 5px;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
    background-color: white;
    border: none;
    border-radius: 5px;
    height: 1.6rem;
    cursor: pointer;

    :hover {
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid white;
      color: white;
    }
  }
`;
