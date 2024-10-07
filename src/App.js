import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/view";
import About from "./routes/about/view";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
		</Routes>
	);
}

export default App;
