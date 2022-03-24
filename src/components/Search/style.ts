import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

const movingTitle = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  animation: ${movingTitle} var(--animation-delay);
  & .api {
    font-size: 2.8rem;
  }

  & .main {
    margin-top: -12px;
    font-size: 4rem;
    & span {
      font-weight: bold;
    }
  }

  & .message {
    width: 280px;
    height: 28px;
    font-size: 1.8rem;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 35px;
  }
`;

const extendingForm = keyframes`
0% {
  width: 200px;
}

100% {
  width: 670px;
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
  width: 670px;
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
    width: 300px;
    font-size: 2.4rem;
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
