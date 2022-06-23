import styled from "styled-components";
import { DefaultNewsContainer, DefaultNewsTitle } from "../UpdateNews/style";

export const Container = styled(DefaultNewsContainer)``;

export const Title = styled(DefaultNewsTitle)``;

export const VideoList = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const VideoItem = styled.li`
  font-size: 1.25rem;

  & a {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
export const VideoImg = styled.img`
  width: 140px;
  transition: transform 0.2s ease-in-out;
`;
export const VideoTitle = styled.div`
  width: 140px;
  line-height: 1.4rem;
`;
export const VideoOwner = styled.div`
  color: #aaa;
`;
