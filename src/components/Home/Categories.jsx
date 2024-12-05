import React from "react";

const Categories = () => {
	const names = [
		"electronics",
		"jewelry",
		"men's clothing",
		"women's clothing",
	];

	return (
		<div className=" bg-white rounded-lg p-4 px-8 space-y-2">
			<h1 className="font-bold text-2xl mb-4">Categories</h1>
			{names.map((name) => {
				return (
					<div className="flex gap-3">
						<input type="checkbox" />
						<p className="font-semibold text-lg">{name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
