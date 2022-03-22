import styled, { keyframes } from "styled-components";

import background from "@/assets/main_bg1.png";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 655px;
  background: url(${background}) center;
  top: 48px;
  left: 0;
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
  animation: ${movingBazzi} 0.5s;
`;

export const BazziBg = styled.img`
  position: absolute;
  top: 200px;
  left: -40px;
  animation: ${movingBazziBg} 0.5s;
`;

export const Dao = styled.img`
  position: absolute;
  top: 200px;
  right: 20px;
  width: 380px;
  animation: ${movingDao} 0.5s;
`;

export const DaoBg = styled.img`
  position: absolute;
  top: 200px;
  right: -40px;
  animation: ${movingDaoBg} 0.5s;
`;
