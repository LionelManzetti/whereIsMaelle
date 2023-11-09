import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/pages/Main";

import "./App.css";

function App() {
	return (
		<div id="root">
			<Router>
				<Routes>
					<Route path="/whereismaelle/" element={<Main />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
