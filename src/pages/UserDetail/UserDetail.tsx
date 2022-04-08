import React, { useEffect, useState } from "react";

import { getUserByNickname } from "@/store/users/usersSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/store";
import UserProfile from "@/components/UserProfile";
import { SOLO } from "@/constant/matchType";
import * as S from "./style";

function UserDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [matchType, setMatchType] = useState(SOLO);

  useEffect(() => {
    dispatch(getUserByNickname(String(id)));
  }, []);

  return (
    <S.Container>
      <UserProfile matchType={matchType} setMatchType={setMatchType} />
    </S.Container>
  );
}

export default UserDetail;
