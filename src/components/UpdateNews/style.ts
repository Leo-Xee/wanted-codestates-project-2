import styled from "styled-components";
import background from "@/assets/background_flag_news.png";

export const DefaultNewsContainer = styled.div`
  max-width: 1100px;
  position: relative;
  margin-top: 560px;
  width: 500px;
  height: 260px;
  padding: 10px 20px;
  z-index: 1000;
  letter-spacing: -1px;
  background-image: url(${background});
  background-size: 500px 260px;
  background-repeat: no-repeat;
  border: 1px solid var(--color-gray-light);
`;

export const DefaultNewsTitle = styled.div`
  padding-bottom: 5px;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-blue);
  border-bottom: 1px solid var(--color-blue);
`;

export const Container = styled(DefaultNewsContainer)``;

export const Title = styled(DefaultNewsTitle)``;

export const Table = styled.div`
  font-size: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  background-color: #efefef;
  text-align: center;
  padding: 5px 0;
`;

export const HContent = styled.div`
  flex: 8;
`;

export const HDate = styled.div`
  flex: 2;
  border-left: 1px solid gray;
`;

export const LogItem = styled.div`
  display: flex;
  text-align: start;
  margin-top: 10px;
`;

export const LogContent = styled.div`
  flex: 8;
  padding-left: 5px;
`;

export const LogDate = styled.div`
  flex: 2;
  text-align: center;
`;
