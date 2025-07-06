import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Principe from "./Components/Principe/Principe";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/biblioteca" element={<Biblioteca />} />
				<Route path="/livro/pequeno-principe" element={<Principe />} />
			</Routes>
		</BrowserRouter>
	);
}
