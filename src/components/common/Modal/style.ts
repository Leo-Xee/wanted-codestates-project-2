import { darken, lighten } from "polished";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
`;
export const Container = styled.div`
  width: 350px;
  height: 150px;
  padding: 20px 20px;
  background-color: var(--color-white);
  letter-spacing: -1px;

  & h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  & p {
    font-size: 1.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;

  & button {
    padding: 8px 16px;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: 700;
    font-size: 1.6rem;

    &:hover {
      background-color: ${lighten(0.1, "#07f")};
    }
    &:active {
      background-color: ${darken(0.1, "#07f")};
    }
  }
`;
