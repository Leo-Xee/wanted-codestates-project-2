import useSWR, { SWRConfiguration } from "swr";

import userService from "@/services/userService";
import { MatchListType } from "api";

function useGetMatchList(nickname: string, matchType: MatchListType) {
  let matchList;

  const option: SWRConfiguration = {
    onErrorRetry: (error) => {
      if (error.status === 404) return;
    },
  };

  const { data: user } = useSWR(
    nickname ? ["/users", nickname] : null,
    () => userService.getUserIdByNickname(nickname || ""),
    option,
  );

  if (matchType === "solo") {
    matchList = useSWR(
      user ? ["/soloMatchList", user?.accessId] : null,
      () => userService.getSoloMatchListByUserId(user?.accessId || ""),
      option,
    );
  }

  if (matchType === "team") {
    matchList = useSWR(
      user ? ["/teamMatchList", user?.accessId] : null,
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
