import { combineReducers } from '@reduxjs/toolkit'
// import userSlice from './slice/user.slice'
import searchSlice from './slice/search.slice'
const reducers = {
	// user: userSlice,
	search: searchSlice
}

const reducer = combineReducers(reducers)
export default reducer