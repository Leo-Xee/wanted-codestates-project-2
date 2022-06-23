import styled from "styled-components";
import { DefaultHighlight } from "../TotalRecord/style";

export const Container = styled.div`
  margin: 20px 0;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 20px 5px;
  font-size: 1.4rem;
  letter-spacing: -1px;
  border-bottom: 1px solid var(--color-gray-light);
`;

export const Detail = styled.span`
  display: flex;
  gap: 10px;
`;

export const Highlight = styled(DefaultHighlight)`k`;
