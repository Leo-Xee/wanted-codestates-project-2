import styled, { keyframes } from "styled-components";

import background from "@/assets/main_bg1.png";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1100px;
  height: 655px;
  background: url(${background}) center;
  background-size: cover;
  top: 48px;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const movingBazzi = keyframes`
  0% {
    left: -450px;
  }

  100% {
    left: 30px; 
  }
`;

const movingDao = keyframes`
  0% {
    right: -450px;
  }

  100% {
    right: 30px; 
  }
`;

const movingBazziBg = keyframes`
  0% {
    left: -450px;
  }

  100% {
    left: -40px; 
  }
`;

const movingDaoBg = keyframes`
  0% {
    right: -450px;
  }

  100% {
    right: -40px; 
  }
`;
export const Bazzi = styled.img`
  position: absolute;
  top: 200px;
  left: 30px;
  width: 380px;
  animation: ${movingBazzi} var(--animation-delay);
`;

export const BazziBg = styled.img`
  position: absolute;
  top: 200px;
  left: -40px;
  animation: ${movingBazziBg} var(--animation-delay);
`;

export const Dao = styled.img`
  position: absolute;
  top: 200px;
  right: 20px;
  width: 380px;
  animation: ${movingDao} var(--animation-delay);
`;

export const DaoBg = styled.img`
  position: absolute;
  top: 200px;
  right: -40px;
  animation: ${movingDaoBg} var(--animation-delay);
`;
