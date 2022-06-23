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
import * as S from "./style";

function UserDetail() {
  const { nickname } = useParams();
  const [matchType, setMatchType] = useState<MatchListType>("solo");

  const { user, data: matchList, error, isValidating } = useGetMatchList(nickname || "", matchType);

  if (isValidating) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!matchList || matchList?.length === 0) return <div>해당 유저의 경기 정보가 없습니다.</div>;
  if (!user) return <div>해당 유저가 없습니다.</div>;

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
