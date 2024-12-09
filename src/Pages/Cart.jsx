import React from "react";
import { useState, useContext } from "react";
import { globalContext } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cartItems, setCartItems, total, setTotal } =
		useContext(globalContext);

	const handleClearCart = () => {
		setTotal(0);
		setCartItems([]);
	};

	const handleRemove = (item) => {
		const temp = cartItems.filter((t) => {
			return t.id === item.id;
		});

		const temp2 = cartItems.filter((t) => {
			return !(t.id === item.id);
		});

		const newTotal = total - temp[0].quantity * temp[0].price;
		setTotal(newTotal);
		setCartItems(temp2);
	};

	return (
		<div className="p-12">
			<h3 className="font-semibold text-3xl ">Your Cart</h3>
			{cartItems.length > 0 ? (
				<div>
					{cartItems.map((item) => {
						return (
							<div>
								<div
									className="flex justify-between mt-2 items-center"
									key={item.id}
								>
									<div className="flex gap-3">
										<img
											src={item.image}
											alt={item.title}
											className="h-16 w-10"
										/>
										<div>
											<h3 className="font-bold">{item.title}</h3>
											<div className="flex gap-2 text-gray-500">
												<p>${item.price}</p>
												<p>x {item.quantity}</p>
											</div>
										</div>
									</div>
									<button
										className="bg-red-500 text-white rounded-lg h-8 px-4"
										onClick={() => handleRemove(item)}
									>
										Remove
									</button>
								</div>
								<div className="w-full bg-gray-500 h-[1px] mt-3"></div>
							</div>
						);
					})}
					<div className="flex mt-4 justify-between p-3">
						<h3 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h3>
						<div className="flex gap-4">
							<button
								className="bg-white border-2 rounded-lg text-black px-3 py-2 hover:bg-gray-200"
								onClick={handleClearCart}
							>
								Clear Cart
							</button>
							<button className="bg-black rounded-lg text-white px-4 py-2 hover:bg-gray-600">
								Checkout
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex mt-3 gap-2">
					<p>Your Cart Is Empty.</p>
					<Link to={"/"} className="text-blue-600 hover:underline">
						Continue Shopping
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
