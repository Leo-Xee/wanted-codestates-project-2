import styled from "styled-components";
import background from "@/assets/background_flag.png";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: var(--color-black);
  font-size: 1.2rem;

  & span {
    padding-left: 5px;
    letter-spacing: -1px;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding: 20px 0;
  background-image: url(${background});
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: var(--color-background) var(--color-background) var(--color-background)
    var(--color-blue);

  & img {
    width: 160px;
  }
`;

export const ProfileContent = styled.div`
  padding-left: 10px;

  & h1 {
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: -1px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const MatchBtnContainer = styled.div`
  position: relative;
  display: flex;
  border: 1px solid var(--color-blue);
  border-radius: 2px;

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: -25px;
    width: 1px;
    height: 20px;
    background-color: var(--color-gray);
  }
`;

export const MatchBtn = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px;
  width: 100px;
  color: ${(props) => (props.isSelected ? "var(--color-white)" : "var(--color-blue)")};
  background-color: ${(props) => (props.isSelected ? "var(--color-blue)" : "var(--color-white)")};

  & span {
    font-size: 1.2rem;
    letter-spacing: -1px;
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`;

export const UtilBtnContainer = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 10px;
`;

export const UtilBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  color: var(--color-black);
  border: 1px solid var(--color-black);
  border-radius: 33px;

  & span {
    padding: 4px;
    font-size: 1.2rem;
    letter-spacing: -1px;
  }
`;
