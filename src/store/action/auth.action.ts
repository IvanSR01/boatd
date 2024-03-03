// import { useError, useToastError } from '../../hook'
// import AuthService from '../../service/auth/auth.service'
// import { ISingIn, ISingUp } from '../../shared/interface/auth.interface'
// import { IUser } from '../../shared/interface/user.interface'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'
// import { removeTokens } from '../../api/tokens.api'
// export const singIn = createAsyncThunk<IUser | undefined, ISingIn>(
// 	'auth/login',
// 	async ({ login, password }: ISingIn, thunkAPI) => {
// 		try {
// 			const res = await AuthService.singIn({ login, password })
// 			toast.success('Completed successfully')
// 			return res
// 		} catch (error) {
// 			useToastError(error)
// 			thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )

// export const singUp = createAsyncThunk<IUser | undefined, ISingUp>(
// 	'auth/register',
// 	async ({ email,userName, password }: ISingUp, thunkAPI) => {
// 		try {
// 			const res = await AuthService.singUp({
// 				email,
// 				userName,
// 				password
// 			})
// 			toast.success('Completed successfully')
// 			return res
// 		} catch (error) {
// 			useToastError(error)
// 			thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )

// export const logout = createAsyncThunk<void>('auth/logout', async () => {
// 	removeTokens()
// })

// export const checkAuth = createAsyncThunk<IUser>(
// 	'auth/checkAuth',
// 	async (_, thunkAPI) => {
// 		try {
// 			const res = await AuthService.getNewTokens()
// 			return res
// 		} catch (error) {
// 			if (useError(error) === 'jwt expired') {
// 				useToastError(error)
// 				thunkAPI.dispatch(logout)
// 			}
// 			return thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )