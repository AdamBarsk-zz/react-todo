import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store/index';
import registerServiceWorker from './registerServiceWorker';
import './static/fontawesome/fontawesome-all';
import './style.css';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
