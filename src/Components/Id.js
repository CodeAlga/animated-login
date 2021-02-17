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
import {
  FormContainer,
  SoftText,
  StyledInput,
  SubmitButton,
} from "../Assets/CommonStyled";

function Id() {
  const history = useHistory();

  const [id, setId] = useState(String);
  const [isExpanded, setExpanded] = useState(true);

  const playTransition = () => {
    setExpanded(!isExpanded);
  };

  const handleNextStep = () => {
    playTransition();

    setTimeout(() => {
      playTransition();
      history.push("/validate");
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
          <HeaderText>Bienvenido</HeaderText>
          <SubtitleText>Por favor, introduce tu DNI</SubtitleText>
        </CardHeader>
      </CardHeaderContainer>
      <CardContent>
        <FormContainer>
          <StyledInput
            type="text"
            placeholder="DNI"
            maxLength="9"
            onChange={(e) => {
              e.preventDefault();
              setId(e.target.value.toUpperCase());
            }}
          />
        </FormContainer>
        <SoftText>Escribe tu DNI todo seguido con la letra</SoftText>
        <SubmitButton
          disabled={id.length <= 8}
          type="submit"
          onClick={() => handleNextStep()}
        >
          Enviar
        </SubmitButton>
      </CardContent>
    </Card>
  );
}

export default Id;
