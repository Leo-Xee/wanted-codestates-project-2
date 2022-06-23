import React from "react";

import HomeBackground from "@/components/HomeBackground";
import UpdateNews from "@/components/UpdateNews";
import styled from "styled-components";
import VideoNews from "@/components/VideoNews";
import { movingUp } from "@/components/HomeBackground/style";

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  animation: ${movingUp} var(--animation-delay);
  padding-bottom: 30px;
`;

const Section = styled.section`
  background-color: #fafafa;
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
