import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    paymentInfo: {},
    personalUrl: "",
  },
	code: ''
};

const registrationSlice = createSlice({
  name: "registrationSeller",
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setState } = registrationSlice.actions;

export default registrationSlice.reducer;
