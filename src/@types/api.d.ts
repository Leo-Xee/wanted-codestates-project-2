declare module "api" {
  export type MatchListType = "solo" | "team";

  export type User = {
    accessId: string;
    name: string;
    level: number;
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

  export type MatchList = {
    matches: [matches: { matches: Match[]; matchType: string }];
    nickname: string;
  };

  export type UserInfo = {
    accessId: string;
    name: string;
    level: number;
    solo: {
      total: number;
      win: number;
      lose: number;
      retire: number;
      finish: number;
      character: string;
      matchList: Match[];
    };
    team: {
      total: number;
      win: number;
      lose: number;
      retire: number;
      finish: number;
      character: string;
      matchList: Match[];
    };
  };
}
