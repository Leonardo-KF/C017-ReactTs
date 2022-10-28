import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  width: 380px;
  background-color: whitesmoke;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: black;

  h2 {
    margin: 8px 0 8px 0;
  }
`;

export const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 5px 0 5px 0;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 4px;

  section {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    display: flex;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  h4 {
    display: flex;
    width: 50%;
  }

  span {
    display: flex;
    width: 20%;
  }
`;
