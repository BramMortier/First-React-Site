import styled from "styled-components";

export const GeneratorContainer = styled.div`
  background-color: hsl(218, 23%, 16%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GeneratorCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(217, 19%, 24%);
  min-width: 300px;
  max-width: 40%;
  border-radius: 10px;
  padding: 2rem 4rem 4rem 4rem;

  @media screen and (max-width: 768px) {
    max-width: 70%;
    padding: 2rem 2rem 4rem 2rem;
  }
  @media screen and (max-width: 425px) {
    min-width: 0px;
    max-width: 90%;
    padding: 2rem 1rem 4rem 1rem;
  }
`;

export const TopLine = styled.h2`
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
  color: hsl(150, 100%, 66%);
`;

export const Quote = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  color: hsl(193, 38%, 86%);
  font-size: 28px;

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const Divider = styled.img`
  width: 100%;

  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

export const DiceIcon = styled.img`
  width: 75%;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 1rem;
  position: absolute;
  bottom: -2rem;

  &:hover {
    cursor: pointer;
    transition: all ease 0.2s;
    box-shadow: 0 0 30px hsl(150, 100%, 66%);
  }
`;
