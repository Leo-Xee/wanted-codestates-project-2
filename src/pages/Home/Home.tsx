import React from "react";

import HomeBackground from "@/components/HomeBackground";
import UpdateNews from "@/components/UpdateNews";
import styled from "styled-components";
import VideoNews from "@/components/VideoNews";
import { movingUp } from "@/components/HomeBackground/style";

const Section = styled.section`
  min-width: 1100px;
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  animation: ${movingUp} var(--animation-delay);
  padding-bottom: 30px;
`;

function Home() {
  return (
    <Section>
      <HomeBackground />
      <NewsContainer>
        <UpdateNews />
        <VideoNews />
      </NewsContainer>
    </Section>
  );
}

export default Home;
