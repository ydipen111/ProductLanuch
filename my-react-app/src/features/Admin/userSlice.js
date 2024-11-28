import { createSlice } from "@reduxjs/toolkit";
import { clearUser, getUserLocal, setUserLocal } from "../../Hooks/local";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserLocal()
  },

  reducers: {

    userAdd: (state, action) => {
      state.user = action.payload;
      setUserLocal(state.user);
    },

    userLogOut: (state, action) => {
      state.user = null;
      clearUser();
    },


  }
});

export const { userAdd, userLogOut } = userSlice.actions;