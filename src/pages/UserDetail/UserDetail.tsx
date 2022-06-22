import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "@/components/Spinner";
import useGetMatchList from "@/hooks/apis/useGetMatchList";
import { MatchListType } from "api";
import * as S from "./style";

function UserDetail() {
  const { nickname } = useParams();
  const [matchType, setMatchType] = useState<MatchListType>("solo");

  const { user, data, error, isValidating } = useGetMatchList(nickname || "", matchType);

  if (isValidating) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return <div>해당 유저가 없습니다.</div>;

  console.log(data);

  return <S.Container>hello</S.Container>;
}

export default UserDetail;
