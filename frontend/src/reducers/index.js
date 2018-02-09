import { combineReducers } from 'redux'
import auth from './auth.reducer'

const appReducer = combineReducers({ 
	auth
})

const rootReducer = (state, action) => { 
	if (action.type === 'USER_LOGOUT') {
		const { routing } = state
		state = { routing } 
	}
	
	return appReducer(state, action)
}

export default rootReducer