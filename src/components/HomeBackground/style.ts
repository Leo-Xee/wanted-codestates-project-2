import styled, { keyframes } from "styled-components";

import background from "@/assets/main_bg1.png";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1100px;
  height: 655px;
  background: url(${background}) center;
  background-size: cover;
  top: 48px;
  left: 0;
  overflow: hidden;
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
  margin-top: 200px;
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

export const Animate = styled.div`
  position: absolute;
  top: 230px;
  display: flex;
  align-items: center;
`;

const movingToRight = keyframes`
  0% {
    left: -1000px;
  }
  100%{
    left: 0px;
  }
`;

export const Bazzi = styled.div`
  position: relative;
  left: 0px;
  animation: ${movingToRight} var(--animation-delay);
`;

export const BazziCharacter = styled.img`
  width: 380px;
`;

export const BazziBg = styled.img`
  position: absolute;
  width: 500px;
  height: 300px;
  top: 0px;
  left: -50px;
`;

const movingToLeft = keyframes`
  0% {
    right: -1000px;
  }
  100%{
    right: 0px;
  }
`;

export const Dao = styled.div`
  position: relative;
  right: 0px;
  animation: ${movingToLeft} var(--animation-delay);
`;

export const DaoCharacter = styled.img`
  width: 380px;
`;

export const DaoBg = styled.img`
  position: absolute;
  width: 500px;
  height: 320px;
  top: 0px;
`;
