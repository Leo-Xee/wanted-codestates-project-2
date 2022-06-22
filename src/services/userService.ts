import { SPEED_SOLO, SPEED_TEAM } from "@/shared/constant/matchType";
import fetcher from "@/shared/utils/fetcher";
import { MatchList, User } from "api";

const userService = {
  getUserIdByNickname: async (nickname: string) => {
    const data = await fetcher<User>("get", `/kart/v1.0/users/nickname/${nickname}`);
    return data;
  },
  getSoloMatchListByUserId: async (accessId: string) => {
    const data = await fetcher<MatchList>(
      "get",
      `/kart/v1.0/users/${accessId}/matches?start_date=&end_date=&offset=0&limit=200&match_types=${SPEED_SOLO}`,
    );
    return data.matches[0].matches;
  },
  getTeamMatchListByUserId: async (accessId: string) => {
    const data = await fetcher<MatchList>(
      "get",
      `/kart/v1.0/users/${accessId}/matches?start_date=&end_date=&offset=0&limit=75&match_types=${SPEED_TEAM}`,
    );
    return data.matches[0].matches;
  },
};

export default userService;
