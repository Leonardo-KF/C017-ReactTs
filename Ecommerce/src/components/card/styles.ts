import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
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
  flex-wrap: wrap;
`;

type ButtonColor = {
  color: string;
  width: string;
};

export const Buttons = styled.button<ButtonColor>`
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: ${(props) => props.width};
  height: 25px;
  border-radius: 10px;
  color: white;
  margin-top: 5px;
`;

export const BuySection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
`;
