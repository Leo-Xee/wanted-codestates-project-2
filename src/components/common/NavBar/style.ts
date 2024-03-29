import styled from "styled-components";

export const Container = styled.nav<{ isTransparent: boolean }>`
  width: 100%;
  min-width: 1100px;
  position: relative;
  background-color: ${({ isTransparent }) => (isTransparent ? "transparent" : "#005fcc")};
  z-index: 100;
`;

export const Nav = styled.ul<{ isCurrentTab: boolean }>`
  width: 1100px;
  min-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  list-style-type: none;
  font-size: 1.4rem;
  color: var(--color-white);

  & li div a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    width: 80px;
    height: 55px;
    opacity: 0.4;

    &::after {
      content: "";
      display: ${({ isCurrentTab }) => (isCurrentTab ? "none" : "block")};
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 4px;
      background-color: var(--color-white);
    }

    &:hover {
      opacity: 1;
      transition: 0.2s;

      &::after {
        width: 100%;
        left: 0;
        transition: 0.2s;
      }
    }

    &.focus {
      opacity: 1;

      &::after {
        width: 100%;
      }
    }
  }
`;
