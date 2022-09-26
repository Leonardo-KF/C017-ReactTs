import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const HeaderLogo = styled.section`
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    color: whitesmoke;
  }

  h1 {
    padding-right: 10px;
  }
`;

export const HeaderSearch = styled.section`
  display: flex;

  input {
    border-radius: 10px;
    border: solid 1px #fff;
    background-color: whitesmoke;
    color: black;
    padding-left: 5px;
  }
`;

export const HeaderButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: white;
    margin: 0px 5px 0px 5px;
  }
`;
