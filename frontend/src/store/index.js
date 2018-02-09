import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'


export const history = createHistory()

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

const middleware = routerMiddleware(history)

export const store = createStore(
	combineReducers({
		core: rootReducer,
		router: routerReducer
	}),
	enhancer,
	applyMiddleware(middleware, thunk)
)