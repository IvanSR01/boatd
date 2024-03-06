import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IUser } from "@/shared/types/user.type";
import {
  TypeLogin,
  TypeRegisterSeller,
  TypeRegisterUser,
} from "@/shared/types/auth.type";
import { removeTokens } from "@/$api/tokens.api";
import authService from "@/service/auth-service/auth.service";
import { errorCatch } from "@/$api/api.helpers";
export const singIn = createAsyncThunk<IUser | undefined, TypeLogin>(
  "auth/login",
  async ({ phone, password }: TypeLogin, thunkAPI) => {
    try {
      const res = await authService.login({ phone, password });
      toast.success("Completed successfully");
      return res;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const singUpSeller = createAsyncThunk<
  IUser | undefined,
  TypeRegisterSeller
>("auth/registerSeller", async (data: TypeRegisterSeller, thunkAPI) => {
  try {
    const res = await authService.singUpSeller(data);
    toast.success("Completed successfully");
    return res;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const singUpUser = createAsyncThunk<
  IUser | undefined,
  TypeRegisterUser
>("auth/registerUser", async (data: TypeRegisterUser, thunkAPI) => {
  try {
    const res = await authService.singUpUser(data);
    toast.success("Completed successfully");
    return res;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk<void>("auth/logout", async () => {
  removeTokens();
});

export const checkAuth = createAsyncThunk<IUser>(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const res = await authService.getNewTokens();
      return res;
    } catch (error) {
      if (errorCatch(error) === "jwt expired") {
        thunkAPI.dispatch(logout);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
