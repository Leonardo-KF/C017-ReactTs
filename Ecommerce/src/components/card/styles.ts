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

export const Line = styled.div`
  display: flex;
  width: 30%;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: black;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;

  padding: 10px;
  border-radius: 5px;
  justify-content: space-evenly;
`;

type ButtonColor = {
  color: string;
};

export const Buttons = styled.button<ButtonColor>`
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: 30%;
  height: 25px;
  border-radius: 10px;
  color: white;
`;
