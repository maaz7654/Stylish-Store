import React from "react";
import Products from "../components/Home/Products";
import Categories from "../components/Home/Categories";

const Home = () => {
	return (
		<div className="flex bg-[#F3F4F6] p-6 min-h-screen">
			<Categories />
			<Products />
		</div>
	);
};

export default Home;
