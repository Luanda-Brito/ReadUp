import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Principe from "./Components/Principe/Principe";
import Anne from "./Components/Anne/Anne";
import Banana from "./Components/Banana/Banana";
import Alquimista from "./Components/Alquimista/Alquimista";
import Memorias from "./Components/Memorias/Memorias";
import Extraordinario from "./Components/Extraordinario/Extraordinario";	
import { GlobalStyle } from "./Components/Biblioteca/style.jsx"; // importa o global

export default function App() {
	return (
		<>
			<GlobalStyle /> {/* aplica o reset e estilos globais */}
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/biblioteca" element={<Biblioteca />} />
					<Route path="/livro/pequeno-principe" element={<Principe />} />
					<Route path="/livro/anne-frank" element={<Anne />} />
					<Route path="/livro/diario-banana" element={<Banana />} />
					<Route path="/livro/o-alquimista" element={<Alquimista />} />
					<Route path="/livro/memorias-postumas" element={<Memorias />} />
					<Route path="/livro/extraordionario" element={<Extraordinario />} />
				</Routes>
			</HashRouter>
		</>
	);
}
