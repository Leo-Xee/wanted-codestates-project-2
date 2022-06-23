import React from "react";

import HomeBackground from "@/components/HomeBackground";
import UpdateNews from "@/components/UpdateNews";
import styled from "styled-components";
import VideoNews from "@/components/VideoNews";

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

function Home() {
  return (
    <section>
      <HomeBackground />
      <NewsContainer>
        <UpdateNews />
        <VideoNews />
      </NewsContainer>
    </section>
  );
}

export default Home;
