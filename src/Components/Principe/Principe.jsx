import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Principe() {
	const navigate = useNavigate();

	return (
		<div className="principe-page">
			<header>
				<img
					src="/images/voltar.png"
					alt="Voltar"
					className="icon"
					onClick={() => navigate('/biblioteca')}
				/>
				<p>Leitura</p>
				<img src="/images/coracao.png" alt="Favoritar" className="icon" />
			</header>

			<h1>O Pequeno Príncipe</h1>

			<div className="livro-container">
				<img src="/images/pequeno-principe.jpg" alt="Capa do Pequeno Príncipe" />
				<p className="autor">Autor: Antoine de Saint-Exupéry</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
					Um piloto cai com sua avião no deserto e ali encontra um menino
					luminoso e frágil. Ele diz ser vindo de um pequeno planeta distante.
					E ali, na convivência com o piloto perdido, os dois repensam os seus
					valores e encontram o sentido da vida.
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
					Esse livro fala sobre a importância de sair da zona de conforto,
					aprender com as experiências diferentes, conhecer novas pessoas e
					viajar pelo mundo.
				</p>
			</section>

			<footer>
				<p>
					<a href="#">Ver disponibilidade da Escola 📚</a>
				</p>
			</footer>
		</div>
	);
}
