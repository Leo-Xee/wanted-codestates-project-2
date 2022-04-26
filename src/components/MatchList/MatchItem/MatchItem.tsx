import React from "react";

import { Match } from "api";
import trackData from "@/data/track.json";
import kartData from "@/data/kart.json";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import * as S from "./style";

dayjs().format();
dayjs.locale("ko");
dayjs.extend(relativeTime);

type MatchProps = {
  match: Match;
};

function MatchItem({ match }: MatchProps) {
  const {
    endTime,
    playerCount,
    trackId,
    player: { kart: kartId, matchRank, matchRetired, matchTime, matchWin },
  } = match;

  const calcStatus = (): string => {
    if (matchRetired === "1") return "retire";
    if (matchWin === "1") return "win";
    return "default";
  };
  const status = calcStatus();

  const track = trackData.find((v) => v.id === trackId)?.name;
  const kart = kartData.find((v) => v.id === kartId)?.name;
  const ranking = matchRetired === "1" ? "리타이어" : `${matchRank}/${playerCount}`;

  const time = Number(matchTime);
  const msec = Math.floor((time % 1000) / 10);
  const sec = Math.floor((time / 1000) % 60);
  const min = Math.floor(time / 1000 / 60);

  const fillNumber = (n: number): string | number => (n < 10 ? `0${n}` : n);

  console.log(kartData);

  return (
    <S.Wrapper status={status}>
      <S.Container status={status}>
        <S.Date>{dayjs(endTime).fromNow()}</S.Date>
        <S.Ranking>#{ranking}</S.Ranking>
        <S.Track>{track}</S.Track>
        <S.Kart>{kart}</S.Kart>
        <S.Time>
          {status !== "retire" ? `${min}'${fillNumber(sec)}'${fillNumber(msec)}` : "-"}
        </S.Time>
      </S.Container>
    </S.Wrapper>
  );
}

export default MatchItem;
