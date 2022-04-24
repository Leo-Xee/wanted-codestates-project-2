import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: var(--color-white);
`;

export const Head = styled.div`
  max-width: 1100px;
  min-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 48px;
  font-size: 1.2rem;
`;

export const HeadLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  & img {
    width: 75px;
    height: 22px;
  }

  & div + div {
    margin-left: 20px;
  }
`;

export const HeadRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: var(--color-gray);
  letter-spacing: -1px;
`;
