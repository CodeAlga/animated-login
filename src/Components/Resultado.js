import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  CardHeaderContainer,
  Card,
  CardHeader,
  CardContent,
  HeaderText,
  SubtitleText,
  Backdrop,
  BackdropAnimation,
  ExpandAnimation,
} from "../Assets/Card";
import { SoftText, SubmitButton, HighlightText } from "../Assets/CommonStyled";

function Result() {
  const history = useHistory();

  const [testResult, setTestResult] = useState("NEGATIVO");
  const [isExpanded, setExpanded] = useState(true);

  const playTransition = () => {
    setExpanded(!isExpanded);
  };

  const handleNextStep = () => {
    playTransition();

    setTimeout(() => {
      playTransition();
      history.push("/result");
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  }, []);
  return (
    <Card>
      <CardHeaderContainer>
        <Backdrop
          initial={false}
          animate={
            isExpanded ? BackdropAnimation.expanded : BackdropAnimation.collapes
          }
          variants={BackdropAnimation}
          transition={ExpandAnimation}
        />
        <CardHeader>
          <HeaderText>Gracias,</HeaderText>
          <SubtitleText>Aqui tienes tu resultado.</SubtitleText>
        </CardHeader>
      </CardHeaderContainer>
      <CardContent>
        <SoftText black>El resultado es:</SoftText>
        <HighlightText textColor={testResult}>{testResult}</HighlightText>
        {testResult === "NEGATIVO" ? (
          <SoftText black>No tienes Covid!</SoftText>
        ) : (
          <SoftText black>
            Ponte en contacto con tus superiores <br /> y tu médico de cabezera.
          </SoftText>
        )}
        <SubmitButton type="button" onClick={() => handleNextStep()}>
          Salir
        </SubmitButton>
      </CardContent>
    </Card>
  );
}

export default Result;
