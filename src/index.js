import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import App from "./App";
import store from "./store";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<Router>
				<Routes>
					<Route path='*' element={<App />} />
				</Routes>
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
