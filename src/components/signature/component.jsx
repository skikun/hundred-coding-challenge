import "./style.css";

const Component = () => {
	return (
		<div className="signature">
			<div>
				<img src={require("./assets/ski.png")} alt="Avatar" />
				<div>
					<img src={require("./assets/signature.png")} alt="Signature" />
					<h4>Andrés Mora</h4>
					<h6>DEVELOPER & DESIGNER</h6>
					<h6>FRONT-END & UI/UX</h6>
				</div>
			</div>
		</div>
	);
};

export default Component;
