import "./style.css";

const View = () => {
	return (
		<section>
			<div className="mobile-frame gradient-border">
				<div>
					<header>
						<img
							src={require("../../../../assets/avatars/0.png")}
							alt="Avatar"
						/>
						<div>
							<h6>Andrés Mora</h6>
							<p>The greatest developer that's ever lived.</p>
						</div>
					</header>
					<hr />
					<section>
						<nav>
							<h6>Account</h6>
							<button>Profile</button>
							<button>Notifications</button>
							<button>Location</button>
						</nav>
					</section>
					<hr />
					<section>
						<nav>
							<h6>Security</h6>
							<button>Password</button>
							<button>Email</button>
							<button>Privacy</button>
							<button>Two factor authentication</button>
						</nav>
					</section>
					<hr />
					<section>
						<nav>
							<h6>Security</h6>
							<button>Password</button>
							<button>Email</button>
							<button>Privacy</button>
							<button>Two factor authentication</button>
						</nav>
					</section>
				</div>
			</div>
		</section>
	);
};

export default View;
