import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ isTransparent }: { isTransparent: boolean }) =>
    isTransparent ? "transparent" : "#005fcc"};
`;

export const Nav = styled.ul`
  max-width: 1300px;
  min-width: 1000px;
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
    opacity: 0.3;

    &::after {
      content: "";
      display: block;
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
