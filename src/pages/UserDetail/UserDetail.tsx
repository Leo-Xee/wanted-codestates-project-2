import React, { useEffect, useState } from "react";

import { getUserByNickname } from "@/store/users/usersSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import UserProfile from "@/components/UserProfile";
import { SOLO } from "@/constant/matchType";
import Spinner from "@/components/Spinner";
import * as S from "./style";

function UserDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [matchType, setMatchType] = useState(SOLO);

  useEffect(() => {
    dispatch(getUserByNickname(String(id)));
  }, []);

  const { user, loading, error } = useAppSelector((state) => state.users);

  if (loading) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <S.Container>
      <UserProfile user={user} matchType={matchType} setMatchType={setMatchType} />
    </S.Container>
  );
}

export default UserDetail;
