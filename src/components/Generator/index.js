import React, { useEffect, useState } from "react";
import dividerDesktop from "../../images/dividerDesktop.svg";
import dividerMobile from "../../images/dividerMobile.svg";
import diceIcon from "../../images/icon-dice.svg";
import {
  GeneratorContainer,
  GeneratorCard,
  TopLine,
  Quote,
  Divider,
  IconWrapper,
  DiceIcon,
} from "./GeneratorElements";

const Generator = () => {
  const [divider, setDivider] = useState(dividerDesktop);
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentID, setCurrentID] = useState("");

  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.slip.advice == currentQuote) {
      getAdvice();
    } else {
      setCurrentQuote(data.slip.advice);
      setCurrentID(data.slip.id);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 426) {
      setDivider(dividerMobile);
    } else {
      setDivider(dividerDesktop);
    }
  };

  useEffect(() => {
    getAdvice();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <GeneratorContainer>
      <GeneratorCard>
        <TopLine>Advice #{currentID}</TopLine>
        <Quote>{currentQuote}</Quote>
        <Divider src={divider}></Divider>
        <IconWrapper onClick={getAdvice}>
          <DiceIcon src={diceIcon} />
        </IconWrapper>
      </GeneratorCard>
    </GeneratorContainer>
  );
};

export default Generator;
