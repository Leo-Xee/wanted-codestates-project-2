import styled, { keyframes } from "styled-components";

const extendingForm = keyframes`
0% {
  width: 200px;
}

100% {
  width: 650px;
}
`;

const appearingInput = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-top: 50px;
  width: 650px;
  height: 70px;
  border: 4px solid var(--color-white);
  border-radius: 35px;
  animation: ${extendingForm} var(--animation-delay);

  & label select {
    position: absolute;
    left: 30px;
    top: 16px;
    font-size: 1.8rem;
    color: var(--color-white);
    background: transparent;
    outline: none;
    border: none;
  }

  & label input {
    position: absolute;
    left: 120px;
    top: 12px;
    font-size: 2.4rem;
    width: 400px;
    color: var(--color-white);
    background-color: transparent;
    border: none;
    outline: none;
    animation: ${appearingInput} var(--animation-delay);

    &::placeholder {
      color: var(--color-white);
      opacity: 0.5;
    }
  }

  & button {
    position: absolute;
    right: 25px;
    top: 22px;
  }
`;
