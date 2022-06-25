import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "@/components/common/Spinner";
import useGetMatchList from "@/hooks/apis/useGetMatchList";
import { MatchListType } from "api";
import UserProfile from "@/components/UserProfile";
import Simulator from "@/components/Simulator";
import MatchList from "@/components/MatchList";
import TotalRecord from "@/components/TotalRecord";
import RankChart from "@/components/RankChart";
import ErrorBanner from "@/components/common/ErrorBanner";
import * as S from "./style";

function UserDetail() {
  const { nickname } = useParams();
  const [matchType, setMatchType] = useState<MatchListType>("solo");

  const { user, data: matchList, isValidating } = useGetMatchList(nickname || "", matchType);

  if (isValidating) return <Spinner />;
  if (!matchList || !user)
    return (
      <S.Container>
        <ErrorBanner message="해당 유저와 경기정보가 없습니다." />
      </S.Container>
    );

  return (
    <S.Container>
      <UserProfile
        userName={user.name}
        lastestMatch={matchList[0]}
        matchType={matchType}
        setMatchType={setMatchType}
      />
      <Simulator userName={user.name} />
      <S.DashBoard>
        <TotalRecord matchList={matchList} />
        <RankChart matchList={matchList} />
      </S.DashBoard>
      <MatchList matchList={matchList} />
    </S.Container>
  );
}

export default UserDetail;
