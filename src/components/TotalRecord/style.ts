import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Container = styled.div`
  width: 450px;
  padding: 10px 20px;
  font-size: 1.4rem;
  letter-spacing: -1px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-gray-light);

  & .highlight {
    color: var(--color-blue);
    font-weight: 600;
  }
`;

export const RateList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-gray-light);
`;

export const RateContainer = styled.div`
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &:not(:first-child) {
    border-left: 1px solid var(--color-gray-light);
  }
`;

export const Mode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  & .highlight {
    color: var(--color-blue);
    font-weight: 600;
  }

  & .mode {
    font-size: 2rem;
  }
`;
