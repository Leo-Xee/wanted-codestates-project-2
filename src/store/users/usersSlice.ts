import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getUserIdByNickname,
  getSoloMatchListByUserId,
  getTeamMatchListByUserId,
  Match,
} from "@/api/UserAPI";
import calcMatchList from "@/utils/calcMatchList";

type User = {
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

export const getUserByNickname = createAsyncThunk<User, string>(
  "users/fetchUserInfo",
  async (nickname) => {
    const { accessId, name, level } = await getUserIdByNickname(nickname);
    const soloMatchList = await getSoloMatchListByUserId(accessId);
    const teamMatchList = await getTeamMatchListByUserId(accessId);

    const soloMatchListInfo = calcMatchList(soloMatchList);
    const teamMatchListInfo = calcMatchList(teamMatchList);

    return {
      accessId,
      name,
      level,
      solo: {
        total: soloMatchList.length,
        win: soloMatchListInfo.win,
        lose: soloMatchListInfo.lose,
        retire: soloMatchListInfo.retire,
        finish: soloMatchListInfo.finish,
        character: soloMatchListInfo.character,
        matchList: soloMatchList,
      },
      team: {
        total: teamMatchList.length,
        win: teamMatchListInfo.win,
        lose: teamMatchListInfo.lose,
        retire: teamMatchListInfo.retire,
        finish: teamMatchListInfo.finish,
        character: teamMatchListInfo.character,
        matchList: teamMatchList,
      },
    };
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: { user: {} as User, loading: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByNickname.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByNickname.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserByNickname.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default usersSlice;
