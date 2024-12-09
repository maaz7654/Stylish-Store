import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState, createContext } from "react";

export const globalContext = createContext();

const App = () => {
	const [str, setStr] = useState("");
	const [check, setCheck] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);

	return (
		<div className="min-h-screen">
			<globalContext.Provider
				value={{
					str,
					setStr,
					check,
					setCheck,
					cartItems,
					setCartItems,
					total,
					setTotal,
				}}
			>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</globalContext.Provider>
		</div>
	);
};

export default App;
