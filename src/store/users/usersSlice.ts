import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  accessId: string;
  name: string;
  level: number;
  // character: string;
  // totalMatch: number;
  // win: number;
  // lose: number;
  // retire: number;
  // finish: number;
};

// 캐릭터, 승, 패, 승률, 완주율, 리타이어율, 최근 50경기의 순위와 평균, 최근 200경기 순위의 평균

export const getUserByNickname = createAsyncThunk<User, string>(
  "GET_USER",
  async (nickname) => {
    const res = await axios.get(`/kart/v1.0/users/nickname/${nickname}`, {
      headers: {
        Authorization: String(process.env.REACT_APP_API_KEY),
      },
    });
    return res.data;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] as User[], loading: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByNickname.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByNickname.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(getUserByNickname.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
// export const { addUser } = usersSlice.actions;
export default usersSlice;
