import React from "react";

import * as S from "./style";

type CircularProgressBarProps = {
  percent: number;
  color: string;
};

function CircularProgressBar({ percent, color }: CircularProgressBarProps) {
  return (
    <S.Container>
      <S.InnerCircle>
        <S.Percent color={color}>{percent}%</S.Percent>
      </S.InnerCircle>
      <S.Circle>
        <S.Right>
          <S.RightProgress percent={percent} color={color} />
        </S.Right>
        <S.Left>
          <S.LeftProgress percent={percent} color={color} />
        </S.Left>
      </S.Circle>
    </S.Container>
  );
}

export default CircularProgressBar;
