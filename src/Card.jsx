import { Rating } from "@mui/material";
import React from "react";

const Card = (props) => {
	const truncateStr = (str) => {
		if (str.length > 50) {
			let ans = str.slice(0, 50) + "...";
			return ans;
		}
		return str;
	};
	return (
		<div className="card">
			<div className="discount">{props.discount}% OFF</div>
			<img className="card-img" src={props.imgSrc} alt="data" />
			<div className="title">{truncateStr(props.title)}</div>
			<div className="details">
				<Rating name="read-only" value={4} readOnly />
				<p>Free Shipping</p>
			</div>

			<div className="price-details">
				${props.currentPrice}{" "}
				<span className="msrp">${props.originalPrice}</span>
			</div>
			<button>Add to cart</button>
		</div>
	);
};

export default Card;
