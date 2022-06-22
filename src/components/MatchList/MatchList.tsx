import React from "react";

import { MatchListType, UserInfo } from "api";
import Match from "./MatchItem";
import * as S from "./style";

type MatchListProps = {
  user: UserInfo;
  matchType: MatchListType;
};

function MatchList({ user, matchType }: MatchListProps) {
  const { matchList } = matchType === "solo" ? user.solo : user.team;

  return (
    <S.Container>
      {matchList.map((match, idx) => (
        <Match key={idx} match={match} />
      ))}
    </S.Container>
  );
}

export default MatchList;
