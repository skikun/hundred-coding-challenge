import { useState } from "react";

import LINKS from "./links";

import "./style.css";

const View = () => {
	const [avatar, setAvatar] = useState(0);

	function getRandomInt(max) {
		setAvatar(Math.floor(Math.random() * max));
		console.log(avatar);
	}

	return (
		<div>
			<img
				src={require(`../../assets/avatars/${avatar}.png`)}
				alt="Avatar"
				onMouseEnter={() => getRandomInt(4)}
			/>
			<div className="profile-card gradient-border">
				<div>
					<img
						src={require("../../assets/banners/uyuni-pixel.gif")}
						alt="Banner"
					/>
					<h2>Andrés Mora</h2>
					<p>@ski</p>
				</div>
				<p>
					I'm a designer and developer specialized in crafting and coding
					software for both mobile and web platforms.
				</p>
				<div>
					<input placeholder="Message @ski" />
					<button>Send</button>
				</div>
			</div>
			<div>
				{LINKS.map(({ key, href, src, altsrc, alt }, i) => {
					return (
						<a key={key} href={href} target="_blank" rel="noopener noreferrer">
							<img src={src} alt={alt} />
							<img src={altsrc} alt={alt} />
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default View;
