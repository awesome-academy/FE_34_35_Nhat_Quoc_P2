import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const getMember = createAsyncThunk("getMember", async (userId) => {
  const currentMember = await usersApi.getUser(userId);
  return currentMember;
});

const memberSlice = createSlice({
  name: "memberSlice",
  initialState: {
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    birthday: "",
    gender: "",
    loading: false,
    error: "",
    memberId: "",
  },
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPassword: (state, action) => {
      state.password = action.payload;
    },
    getPhone: (state, action) => {
      state.phone = action.payload;
    },
    getRegion: (state, action) => {
      state.region = action.payload;
    },
    getBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    getGender: (state, action) => {
      state.gender = action.payload;
    },
    getMemberId: (state, action) => {
      state.memberId = action.payload;
    },
  },
  extraReducers: {
    [getMember.pending]: (state) => {
      state.loading = true;
    },

    [getMember.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMember.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.phone = action.payload.phone;
      state.region = action.payload.region;
      state.birthday = action.payload.birthday;
      state.gender = action.payload.gender;
      state.loading = false;
    },
  },
});

const { reducer: memberReducer, actions } = memberSlice;
export const {
  getName,
  getEmail,
  getBirthday,
  getGender,
  getPassword,
  getPhone,
  getRegion,
  getMemberId,
} = actions;
export default memberReducer;
