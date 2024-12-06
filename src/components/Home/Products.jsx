import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { globalContext } from "../../App";

const Products = () => {
	const [items, setItems] = useState([]);
	const { str, check } = useContext(globalContext);

	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			const temp = resp.data;
			console.log(temp);
			setItems(temp);
		});
	}, []);

	const temp = items.filter((item) => {
		return item.title.toLowerCase().includes(str.toLowerCase());
	});

	return (
		<div className="grid grid-cols-3 gap-3 p-6 w-3/4">
			{temp.map((item, key) => {
				return (
					<div className="border shadow-lg rounded-lg overflow-hidden bg-white">
						<img src={item.image} className="object-cover h-48 w-[100%]" />
						<div className="p-6">
							<h3 className="font-semibold text-lg truncate w-full">
								{item.title}
							</h3>
							<p className="line-clamp-2 pt-3 text-gray-500">
								{item.description}
							</p>
							<div className="flex pt-3 justify-between">
								<p className="font-bold text-lg">${item.price}</p>
								<div className="flex text-gray-500">
									<p className="text-yellow-500">★</p>
									<p>{item.rating.rate}</p>
									<p>{`(${item.rating.count})`}</p>
								</div>
							</div>
							<button className="bg-black text-white rounded-lg w-full p-3 py-2 mt-2 hover:bg-black/80">
								Add to Cart
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
