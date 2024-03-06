import { IStoreUser } from "@/shared/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  logout,
  singIn,
  singUpSeller,
  singUpUser,
} from "../action/auth.action";

const initialState: IStoreUser = {
  user: null,
  isLoading: false,
	error: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(singIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload ? payload : null;
    });
    builder.addCase(singIn.rejected, (state) => {
			console.log(state.error)
      state.isLoading = false;
			state.error = 'Пароль неверный'
    });
    builder.addCase(singUpSeller.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(singUpSeller.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload ? payload : null;
    });
    builder.addCase(singUpSeller.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(singUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(singUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload ? payload : null;
    });
    builder.addCase(singUpUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.user = payload ? payload : null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
