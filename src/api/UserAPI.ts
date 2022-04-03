import axios from "axios";

axios.defaults.headers.common.Authorization = String(process.env.REACT_APP_API_KEY);

const SPEED_SOLO = "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a";
const SPEED_TEAM = "effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e";

type User = {
  accessId: string;
  name: string;
  level: number;
};

type MatchList = {
  matches: [matches: { matches: Match[]; matchType: string }];
  nickname: string;
};

export type Match = {
  accountNo: string;
  matchId: string;
  matchType: string;
  teamId: string;
  character: string;
  startTime: string;
  endTime: string;
  channelName: string;
  trackId: string;
  playerCount: number;
  matchResult: string;
  seasonType: string;
  player: {
    accountNo: string;
    characterName: string;
    character: string;
    kart: string;
    license: string;
    pet: string;
    flyingPet: string;
    partsEngine: string;
    partsHandle: string;
    partsWheel: string;
    partsKit: string;
    rankinggrade2: string;
    matchRank: string;
    matchRetired: string;
    matchWin: string;
    matchTime: string;
  };
};

export const getUserIdByNickname = async (nickname: string) => {
  const res = await axios.get<User>(`/kart/v1.0/users/nickname/${nickname}`);
  return res.data;
};

export const getSoloMatchListByUserId = async (accessId: string) => {
  const res = await axios.get<MatchList>(
    `/kart/v1.0/users/${accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=${SPEED_SOLO}`,
  );
  return res.data.matches[0].matches;
};

export const getTeamMatchListByUserId = async (accessId: string) => {
  const res = await axios.get<MatchList>(
    `/kart/v1.0/users/${accessId}/matches?start_date=&end_date= &offset=0&limit=75&match_types=${SPEED_TEAM}`,
  );
  return res.data.matches[0].matches;
};
