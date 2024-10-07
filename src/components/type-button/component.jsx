import "./style.css";

const Component = ({ options, type, onChange }) => {
	return (
		<div className="type-selector">
			{options.map((option, i) => {
				return (
					<button
						key={i}
						onClick={() => onChange(option)}
						className={type === option ? "active" : ""}
					>
						{option} mm
					</button>
				);
			})}
		</div>
	);
};

export default Component;
