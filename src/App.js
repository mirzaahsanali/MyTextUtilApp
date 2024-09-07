import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextArea from "./Components/TextArea";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [alert, setAlert] = useState(null);

	const showAlert = (message) => {
		setAlert(message);
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	return (
		<BrowserRouter>
			<Navbar title="MyTextApp" showAlert={showAlert} />
			<Alert alert={alert} />
			<Routes>
				<Route
					path="/"		
					element={<TextArea title="Enter text below" showAlert={showAlert} />}
				></Route>
				<Route
					path="/about"
					element={<h1>This is about page</h1>}
				></Route>
				<Route
					path="/*"
					element={<h1>Error 404</h1>}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;