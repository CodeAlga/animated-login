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

function Validation() {
  const history = useHistory();

  const [code, setCode] = useState(String);
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
          <SubtitleText>
            Ahora introduce el código de verificación enviado a tu teléfono
            móbil
          </SubtitleText>
        </CardHeader>
      </CardHeaderContainer>
      <CardContent>
        <FormContainer>
          <StyledInput
            type="number"
            placeholder="Código"
            onChange={(e) => {
              e.preventDefault();
              setCode(e.target.value.toString());
            }}
          />
        </FormContainer>
        <SoftText>Introduce el código de seis números</SoftText>
        <SubmitButton
          type="stubmit"
          disabled={code.length <= 5}
          onClick={() => handleNextStep()}
        >
          Enviar
        </SubmitButton>
      </CardContent>
    </Card>
  );
}

export default Validation;
