import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers/index.js';
import MainPage from './pages/MainPage.jsx';
import './styles/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<MainPage />
	</Provider>,
	document.getElementById('root')
);
