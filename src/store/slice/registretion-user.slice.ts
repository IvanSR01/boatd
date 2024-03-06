import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  },
  code: "",
};

const registrationSlice = createSlice({
  name: "registrationSeller",
  initialState,
  reducers: {
    setUserRegisterion: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setUserRegisterion } = registrationSlice.actions;

export default registrationSlice.reducer;
