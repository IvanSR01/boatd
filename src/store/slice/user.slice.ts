// import { createSlice } from "@reduxjs/toolkit";
// import { IStoreUser } from "../../shared/interface/user.interface";
// import { checkAuth, logout, singIn, singUp } from "../action/auth.action";


// const initialState: IStoreUser = {
// 	user: null,
// 	isLoading: false
// }


// const userSlice = createSlice({
// 	name: 'user',
// 	initialState, 
// 	reducers: {},
// 	extraReducers: builder => {
// 		builder.addCase(singIn.pending, (state) => {
// 			state.isLoading = true
// 		})
// 		builder.addCase(singIn.fulfilled, (state, {payload}) => {
// 			state.isLoading = false
// 			state.user = payload ? payload : null
// 		})
// 		builder.addCase(singIn.rejected, (state) => {
// 			state.isLoading = false
// 		})
// 		builder.addCase(singUp.pending, (state) => {
// 			state.isLoading = true
// 		})
// 		builder.addCase(singUp.fulfilled, (state, {payload}) => {
// 			state.isLoading = false
// 			state.user = payload ? payload : null
// 		})
// 		builder.addCase(singUp.rejected, (state) => {
// 			state.isLoading = false
// 		})
// 		builder.addCase(checkAuth.fulfilled, (state, {payload}) => {
// 			state.user = payload ? payload : null
// 		})
// 		builder.addCase(logout.fulfilled, (state) => {
// 			state.user = null
// 			state.isLoading = false
// 		})
// 	}
// })


// export default userSlice.reducer