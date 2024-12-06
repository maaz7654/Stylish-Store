import React from "react";
import { useState, useContext } from "react";
import { globalContext } from "../../App";

const Categories = () => {
	const { check, setCheck } = useContext(globalContext);

	const handleChange = (e) => {
		const name = e.target.name;

		const temp = check.map((item) => {
			if (item.name === name) {
				item.checked = true;
			}
			return item;
		});

		setCheck(temp);

		console.log(check);
	};

	return (
		<div className=" bg-white rounded-lg p-4 px-8 space-y-2 w-1/5">
			<h1 className="font-bold text-2xl mb-4">Categories</h1>
			{check.map((item) => {
				return (
					<div className="flex gap-3">
						<input type="checkbox" name={item.name} onChange={handleChange} />
						<p className="font-semibold text-lg">{item.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
