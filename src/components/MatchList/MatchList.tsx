import React from "react";

import { SOLO } from "@/shared/constant/matchType";
import { UserInfo } from "api";
import Match from "./MatchItem";
import * as S from "./style";

type MatchListProps = {
  user: UserInfo;
  matchType: string;
};

function MatchList({ user, matchType }: MatchListProps) {
  const { matchList } = matchType === SOLO ? user.solo : user.team;

  return (
    <S.Container>
      {matchList.map((match, idx) => (
        <Match key={idx} match={match} />
      ))}
    </S.Container>
  );
}

export default MatchList;
