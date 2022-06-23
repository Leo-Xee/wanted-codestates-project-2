import React from "react";

import HomeBackground from "@/components/HomeBackground";
import UpdateNews from "@/components/UpdateNews";
import styled from "styled-components";

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

function Home() {
  return (
    <section>
      <HomeBackground />
      <NewsContainer>
        <UpdateNews />
      </NewsContainer>
    </section>
  );
}

export default Home;
