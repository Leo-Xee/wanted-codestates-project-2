import React from "react";

import { Match } from "api";
import MatchItem from "./MatchItem";
import * as S from "./style";

type MatchListProps = {
  matchList: Match[];
};

function MatchList({ matchList }: MatchListProps) {
  return (
    <S.Container>
      {matchList.map((match, idx) => (
        <MatchItem key={idx} match={match} />
      ))}
    </S.Container>
  );
}

export default MatchList;
