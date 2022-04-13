import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "api";

import {
  getUserIdByNickname,
  getSoloMatchListByUserId,
  getTeamMatchListByUserId,
} from "@/api/UserAPI";
import calcMatchList from "@/utils/calcMatchList";

export const getUserByNickname = createAsyncThunk<UserInfo, string>(
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
  initialState: { user: {} as UserInfo, loading: false, error: false },
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
