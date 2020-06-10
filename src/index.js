import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

const loggerMiddleware = store => next => action => {
	const result = next(action);
	console.log('Middleware', store.getState());
	return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));
// <React.StrictMode>
// </React.StrictMode>
const app = (
	<Provider store={store}>
		<App title="App title" />
	</Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
