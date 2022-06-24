import React from "react";
import ReactDOM from "react-dom";

import * as S from "./style";

function Spinner() {
  const element = (
    <S.Wrapper>
      <S.Container>
        <S.Spin>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="spin-dot" />
          ))}
        </S.Spin>
        <S.Message>데이터를 집계 중입니다.</S.Message>
      </S.Container>
    </S.Wrapper>
  );
  const target = document.querySelector("#modal") as Element;

  return ReactDOM.createPortal(element, target);
}

export default Spinner;
