import styled from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2em;
`;

export const SoftLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const SoftText = styled.p`
  font-size: 13px;
  font-weight: 500;
  padding: 0.5em;
  color: rgba(200, 200, 200, 0.8);
  text-align: center;
  ${(props) =>
    props.black && "color: black; font-weight: 700; font-size: 15px;"};
`;

export const HighlightLink = styled.a`
  font-size: 12px;
  color: #00ae42;
  font-weight: 500;
  text-decoration: none;
`;

export const HighlightText = styled.p`
  font-size: 44px;
  font-weight: 700;
  padding: 0.7em;
  color: ${(props) => (props.textColor === "NEGATIVO" ? "#00ae42" : "#d63230")};
`;

export const StyledInput = styled.input`
  height: 42px;
  border: 3px solid transparent;
  outline: 1px solid rgba(50, 174, 66, 0.2);
  padding: 10px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  text-transform: uppercase;

  &::placeholder {
    color: rgba(200, 200, 200, 0.9);
  }
  &::not(::last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.3);
  }
  &:focus {
    outline: 1px solid rgba(50, 174, 66, 0.2);
    border-bottom: 3px solid #00ae42;
    transition: all 0.2s ease-in-out;
  }
`;

export const SubmitButton = styled.button`
  width: 75%;
  padding: 1.1em;
  margin: 1.1em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    50deg,
    rgba(15, 48, 28, 1) 65%,
    rgba(46, 66, 54, 1) 100%
  );
  transition: all 0.2s linear;

  &:focus {
    outline: none;
  }

  :disabled {
    pointer-events: none;
    filter: opacity(25%);
    transition: all 0.2s linear;
  }
`;
