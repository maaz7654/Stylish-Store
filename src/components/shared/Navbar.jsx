import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
	return (
		<div className="p-3 px-20 flex justify-between shadow-lg">
			<h2 className="font-semibold text-3xl">Stylish Store</h2>
			<div className="flex gap-3 items-center">
				<div className="flex items-center border-2 border-gray-200 rounded-full px-2 py-1 gap-2 focus-within:ring-2 focus-within:ring-gray-500 ">
					<CiSearch className="text-black text-2xl" />
					<input
						className=" px-2 py-1 focus:outline-none"
						placeholder="search product"
					/>
				</div>
				<button className="border rounded-lg p-2 hover:bg-gray-50">
					<CiShoppingCart className="text-black text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
