import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Alquimista() {
	const navigate = useNavigate();

	return (
		<div className="alquimista-page">
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

			<h1>O Alquimista</h1>

			<div className="livro-container">
				<img src="/images/o-alquimista.jpg" alt="Capa O Alquimista" />
				<p className="autor">Autor: Paulo Coelho</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
					Combinando espiritualidade, sabedoria e misticismo, O alquimista é uma inspiradora e emocionante história de autodescoberta que vem transformando a vida de milhões de leitores ao redor do mundo há mais de trinta anos Santiago, um jovem pastor da Andaluzia, parte rumo ao Egito em busca de um tesouro escondido entre as Pirâmides. O que ele não sabe é que sua jornada o levará a riquezas muito diferentes, e mais satisfatórias, do que ele estava esperando. Ao longo do caminho, uma cigana, um homem que se diz rei e um alquimista lhe indicam a direção em que deve seguir e o ajudam a perceber que o maior tesouro se encontra dentro dele mesmo. 
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
					Você já teve um sonho grande e ficou se perguntando se vale a pena correr atrás dele? O Alquimista é exatamente sobre isso. É a história de Santiago, um jovem como qualquer um de nós, que decide sair da sua zona de conforto para seguir seus sonhos. 
                    O livro fala de aventura, descobertas, coragem, e até de como o universo conspira a favor quando a gente acredita de verdade em algo. Não é só uma leitura, é um lembrete de que cada pessoa tem um “tesouro” para encontrar na vida.
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
