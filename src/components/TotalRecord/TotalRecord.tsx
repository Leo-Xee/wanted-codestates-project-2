import React from "react";

import { Match } from "api";
import useCalcMatchList from "@/hooks/useCalcMatchList";
import * as S from "./style";
import CircularProgressBar from "../CircularProgressBar";

type TotalRecordProps = {
  matchList: Match[];
};

function TotalRecord({ matchList }: TotalRecordProps) {
  const { total, win, lose, finish, retire } = useCalcMatchList(matchList);

  const removeDecimal = (target: number) => Math.ceil((target / total) * 100);

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
            <CircularProgressBar percent={removeDecimal(win)} color="#07f" />
          </S.RateContainer>
          <S.RateContainer>
            <span>완주율</span>
            <CircularProgressBar percent={removeDecimal(finish)} color="#69db7c" />
          </S.RateContainer>
          <S.RateContainer>
            <span>리타이어율</span>
            <CircularProgressBar percent={removeDecimal(retire)} color="#e03131" />
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
