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
  width: 340px;
  height: 180px;
  padding: 20px 20px;
  background-color: var(--color-white);

  & h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  & p {
    font-size: 1.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;

  & button {
    padding: 8px 12px;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: 700;
    font-size: 1.8rem;
  }
`;
