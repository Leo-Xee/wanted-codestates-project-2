import React from "react";
import styled from "styled-components";

import NotFoundImg from "@/assets/notFound.png";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 90px;
    height: 150px;
  }

  & p {
    padding-top: 30px;
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

function NotFound() {
  return (
    <Container>
      <img src={NotFoundImg} alt="Not Found Error" />
      <p>잘못된 경로로 접근했어요!</p>
    </Container>
  );
}

export default NotFound;
