import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";

import userService from "@/services/userService";
import Spinner from "@/components/Spinner";
import * as S from "./style";

function UserDetail() {
  const { id } = useParams();

  const { data, error, isValidating } = useSWR(["/users", id], () =>
    userService.getUserIdByNickname(id),
  );
  const accessId = data?.accessId;

  const { data: solo } = useSWR(["/soloMatchList", accessId], () =>
    userService.getSoloMatchListByUserId(accessId),
  );

  console.log(solo);

  // const [matchType, setMatchType] = useState(SOLO);

  if (isValidating) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return <S.Container>Hello</S.Container>;
}

export default UserDetail;
