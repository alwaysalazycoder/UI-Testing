import React from "react";
import Card from "./Card";
import { data } from "./data";

const Container = () => {
	return (
		<div className="container flex ">
			<div className="card-container">
				{data.map((item) => (
					<Card imgSrc ={item.image_link} title={item.title} discount={item.discountpercentage} originalPrice={item.msrp} currentPrice = {item.price}  />
				))}
			</div>
		</div>
	);
};

export default Container;
