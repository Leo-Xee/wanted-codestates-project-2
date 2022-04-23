import React from "react";

import { UserInfo } from "api";
import * as S from "./style";

type SimulatorProps = {
  user: UserInfo;
};

function Simulator({ user }: SimulatorProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>1대1 매칭 시뮬레이터 - &apos;{user.name}&apos;와 가상 대결을 펼쳐보세요.</S.Title>
      </S.Container>
    </S.Wrapper>
  );
}

export default Simulator;
