import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

export const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border-radius: 50%;
  background-color: var(--color-white);
  z-index: 5;
`;

export const Percent = styled.span`
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 2rem;
  z-index: 10;
`;

const fillRight = (percent: number) => keyframes`
  100% {
    transform: rotate(${percent <= 50 ? 180 + 3.6 * percent : 360}deg);
  }
`;

const fillLeft = (percent: number) => keyframes`
  100% {
    transform: rotate(${percent > 50 ? 180 + 3.6 * (percent - 50) : 180}deg);
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  border-radius: 50%;
  background-color: var(--color-white);
`;

export const Right = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--color-white);
  clip: rect(0px, 80px, 80px, 40px);
`;

export const RightProgress = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  clip: rect(0px, 80px, 80px, 40px);
  border-radius: 50%;
  transform: rotate(180deg);
  animation: ${({ percent }: { percent: number }) => fillRight(percent)} 0.3s linear both;
`;

export const Left = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--color-white);
  clip: rect(0px, 40px, 80px, 0px);
`;

export const LeftProgress = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  clip: rect(0px, 40px, 80px, 0px);
  border-radius: 50%;
  transform: rotate(180deg);
  animation: ${({ percent }: { percent: number }) => fillLeft(percent)} 0.3s linear both;
  animation-delay: 0.3s;
`;
