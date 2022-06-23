import React from "react";

import { ReactComponent as Lab } from "@/assets/lab_logo.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;

  & span {
    border-left: 1px solid var(--color-gray);
    padding-left: 10px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  color: var(--color-gray);
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Lab width={140} fill="#6c7a89" />
        <span>Data based on NEXON DEVELOPERS</span>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
