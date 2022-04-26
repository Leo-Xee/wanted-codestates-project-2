import styled from "styled-components";

type MatchResult = {
  status: string;
};

export const Wrapper = styled.div<MatchResult>`
  width: 100%;
  height: 100px;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: var(--color-gray-light);
  border-left: ${({ status }) =>
    `10px solid ${
      status === "win"
        ? "var(--color-blue)"
        : status === "default"
        ? "var(--color-gray)"
        : "var(--color-red)"
    }`};
  margin-bottom: 20px;
`;

export const Container = styled.div<MatchResult>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ status }) =>
    status === "win"
      ? "var(--color-blue-light)"
      : status === "default"
      ? "var(--color-white)"
      : "var(--color-red-light)"};
`;

export const Date = styled.span`
  padding-left: 20px;
  font-size: 1.8rem;
  text-align: center;
  flex: 1;
`;

export const Ranking = styled.span<MatchResult>`
  // 글자색
  font-style: italic;
  text-align: center;
  flex: 1;
  color: ${({ status }) =>
    status === "win"
      ? "var(--color-blue)"
      : status === "default"
      ? "var(--color-gray)"
      : "var(--color-red)"};

  & .result {
    font-size: 3rem;
  }

  & .entire {
    font-size: 2rem;
  }
`;

export const Track = styled.span`
  font-size: 2rem;
  text-align: center;
  flex: 1.5;
`;

export const Kart = styled.span`
  font-size: 2rem;
  text-align: center;
  flex: 1;
`;

export const Time = styled.span`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  flex: 1;
`;
