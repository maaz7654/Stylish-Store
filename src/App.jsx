import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./Pages/Home";
import { useState, createContext } from "react";

export const globalContext = createContext();

const App = () => {
	const [str, setStr] = useState("");
	const [check, setCheck] = useState([
		{ checked: false, name: "electronics" },
		{ checked: false, name: "jewelry" },
		{ checked: false, name: "men's clothing" },
		{ checked: false, name: "women's clothing" },
	]);

	return (
		<div className="min-h-screen">
			<globalContext.Provider value={{ str, setStr, check, setCheck }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</globalContext.Provider>
		</div>
	);
};

export default App;
