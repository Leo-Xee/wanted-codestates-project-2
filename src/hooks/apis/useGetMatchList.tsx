import useSWR from "swr";

import userService from "@/services/userService";
import { MatchListType } from "api";

function useGetMatchList(nickname: string, matchType: MatchListType) {
  let matchList;

  const option = { errorRetryCount: 3 };

  const { data: user } = useSWR(
    nickname ? ["/users", nickname] : null,
    () => userService.getUserIdByNickname(nickname || ""),
    option,
  );

  if (matchType === "solo") {
    matchList = useSWR(
      () => ["/soloMatchList", user?.accessId],
      () => userService.getSoloMatchListByUserId(user?.accessId || ""),
      option,
    );
  }

  if (matchType === "team") {
    matchList = useSWR(
      () => ["/teamMatchList", user?.accessId],
      () => userService.getTeamMatchListByUserId(user?.accessId || ""),
      option,
    );
  }

  return {
    data: matchList?.data,
    error: matchList?.error,
    isValidating: matchList?.isValidating,
    user,
  };
}

export default useGetMatchList;
