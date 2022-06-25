import React from "react";

import ErrorBanner from "@/components/common/ErrorBanner";
import styled from "styled-components";

const Section = styled.section`
  min-width: 1100px;
`;

function NotFound() {
  return (
    <Section>
      <ErrorBanner message="잘못된 경로로 접근한 것 같아요!!" />
    </Section>
  );
}

export default NotFound;
