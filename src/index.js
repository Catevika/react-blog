import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import App from './App';
import store from './store';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<Router>
				<Route path='/' component={App} />
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
