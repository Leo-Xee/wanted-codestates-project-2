import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const gradientBackground = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 20px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientBackground} 14s ease infinite;
`;

export const Title = styled.span`
  padding-left: 20px;
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -1px;
`;
