import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { globalContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { str, setStr, cartItems } = useContext(globalContext);

	const handleChange = (e) => {
		setStr(e.target.value);
	};

	return (
		<div className="px-3 py-2 sm:p-3 sm:px-20 flex justify-between shadow-lg">
			<Link to={"/"}>
				<button>
					<h2 className="font-semibold text-lg sm:text-3xl">Stylish Store</h2>
				</button>
			</Link>
			<div className="flex gap-3 items-center">
				<div className="flex items-center border-2 border-gray-200 rounded-full px-2 py-1 gap-2 focus-within:ring-2 focus-within:ring-gray-500 ">
					<CiSearch className="text-black text-2xl" />
					<input
						className=" px-2 py-1 focus:outline-none"
						placeholder="search product"
						onChange={handleChange}
					/>
				</div>
				<Link to={"/cart"}>
					<div>
						<div
							className={`${
								cartItems.length === 0 ? "hidden" : "flex"
							} h-5 w-5 absolute translate-x-8 -translate-y-1 rounded-full bg-red-600 text-white text-center  items-center justify-center`}
						>
							<div className="text-xs">{cartItems.length}</div>
						</div>
						<button className="border rounded-lg p-2 hover:bg-gray-50">
							<CiShoppingCart className="text-black text-2xl" />
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
