import React from "react";

import * as S from "./style";

function Spinner() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Spin>
          {Array.from({ length: 6 }).map(() => (
            <div className="spin-dot" />
          ))}
        </S.Spin>
        <S.Message>데이터를 집계 중입니다.</S.Message>
      </S.Container>
    </S.Wrapper>
  );
}

export default Spinner;
