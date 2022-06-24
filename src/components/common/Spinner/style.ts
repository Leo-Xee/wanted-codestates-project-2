import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const rotatingSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const rotatingDot = keyframes`
  80%, 100% {
    transform: rotate(360deg);
  }
`;

const expandingDot = keyframes`
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1.0);
  }
`;

export const Spin = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  animation: ${rotatingSpin} 2.5s infinite linear both;

  & .spin-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${rotatingDot} 2s infinite ease-in-out both;
  }

  & .spin-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  & .spin-dot:nth-child(2) {
    animation-delay: -1s;
  }
  & .spin-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  & .spin-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  & .spin-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  & .spin-dot:nth-child(6) {
    animation-delay: -0.6s;
  }

  & .spin-dot:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--color-blue);
    border-radius: 100%;
    animation: ${expandingDot} 2s infinite linear both;
  }

  & .spin-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  & .spin-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  & .spin-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  & .spin-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  & .spin-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  & .spin-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;

export const Message = styled.div`
  padding-top: 40px;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: -1px;
`;
