import React from "react";

import { UserInfo } from "api";
import * as S from "./style";
import CircularProgressBar from "../CircularProgressBar";

type TotalRecordProps = {
  user: UserInfo;
  matchType: string;
};

function TotalRecord({ user, matchType }: TotalRecordProps) {
  console.log(user.solo.total);

  const { total, win, lose, retire, finish } = matchType === "solo" ? user.solo : user.team;

  const calcRate = (target: number) => Math.ceil((target / total) * 100);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <span>
            <span className="highlight">종합</span> 전적
          </span>
          <span>
            {total}전 {win}승 {lose}패
          </span>
        </S.Title>
        <S.RateList>
          <S.RateContainer>
            <span>승률</span>
            <CircularProgressBar percent={calcRate(win)} color="#07f" />
          </S.RateContainer>
          <S.RateContainer>
            <span>완주율</span>
            <CircularProgressBar percent={calcRate(finish)} color="#69db7c" />
          </S.RateContainer>
          <S.RateContainer>
            <span>리타이어율</span>
            <CircularProgressBar percent={calcRate(retire)} color="#e03131" />
          </S.RateContainer>
        </S.RateList>
        <S.Mode>
          <span>
            <span className="highlight">최다주행</span> 모드
          </span>
          <span className="mode">매우빠름</span>
        </S.Mode>
      </S.Container>
    </S.Wrapper>
  );
}

export default TotalRecord;
