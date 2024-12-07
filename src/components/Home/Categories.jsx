import React from "react";
import { useState, useContext } from "react";
import { globalContext } from "../../App";

const cat = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const Categories = () => {
	const { check, setCheck } = useContext(globalContext);

	const handleChange = (e) => {
		const name = e.target.name;

		if (check.includes(name)) {
			const tempCheck = check.filter((item) => {
				return !(item === name);
			});
			setCheck(tempCheck);
		} else {
			setCheck([...check, name]);
		}

		console.log(check);
	};

	return (
		<div className=" bg-white rounded-lg p-4 px-8 space-y-2 w-1/5">
			<h1 className="font-bold text-2xl mb-4">Categories</h1>
			{cat.map((item) => {
				return (
					<div className="flex gap-3">
						<input type="checkbox" name={item} onChange={handleChange} />
						<p className="font-semibold text-lg">{item}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
