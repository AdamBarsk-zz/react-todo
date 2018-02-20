import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';


export const history = createHistory();

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    app: rootReducer,
    router: routerReducer,
  }),
  enhancer,
  applyMiddleware(middleware, thunk),
);
