import { useState } from "react";

import TypeButton from "../../../../components/type-button/component";

import "./style.css";

const images = [
	require("./assets/0.png"),
	require("./assets/1.png"),
	require("./assets/2.png"),
	require("./assets/3.png"),
];

const options = ["70x70", "90x90", "130x130"];

const View = () => {
	const [current, setCurrent] = useState(0);
	const [size, setSize] = useState("30x30");

	return (
		<section>
			<div className="add-to-cart gradient-border">
				<div>
					<div>
						{images.map((img, i) => {
							return (
								<img
									key={i}
									src={img}
									alt={i}
									onClick={() => setCurrent(i)}
									className={current === i ? "active" : ""}
								/>
							);
						})}
					</div>
					<img src={images[current]} alt={current} />
					<div>
						{images.map((_, i) => {
							return (
								<div
									key={i}
									className={current === i ? "active" : ""}
									onClick={() => setCurrent(i)}
								></div>
							);
						})}
					</div>
				</div>
				<div>
					<h2>Red Room Ski Blue Background Stickers Original Edition</h2>
					<span>
						<h5>$35.400</h5>
						<h6>$59.500</h6>
					</span>
					<p>
						These set of stickers are part of a limited edition seasonal
						accesories that includes 5 stickers with a unique design.
					</p>
					<p>Select the size of the stickers you want to order:</p>
					<TypeButton
						options={options}
						onChange={(e) => setSize(e)}
						type={size}
					/>
					<hr />
					<button>Add to cart</button>
				</div>
			</div>
			<div></div>
			<div></div>
		</section>
	);
};

export default View;
