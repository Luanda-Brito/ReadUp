import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Components/Home/Home";
import Biblioteca from "./Components/Biblioteca/Biblioteca";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/biblioteca">Biblioteca</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sobre" element={<Biblioteca />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
