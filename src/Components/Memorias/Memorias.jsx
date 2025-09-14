import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Memorias() {
	const navigate = useNavigate();

	return (
		<div className="memorias-page">
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

			<h1>Memórias Postumas de Brás Cubas</h1>

			<div className="livro-container">
				<img src="/images/memorias-postumas.jpg" alt="Capa Memórias Postumas de Brás Cubas" />
				<p className="autor">Autor: Machado de Assis</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
                Em "Memórias Póstumas de Brás Cubas," Machado de Assis inova ao apresentar a narrativa sob a perspectiva de um defunto-autor. Brás Cubas, já falecido, relata suas memórias com uma mistura de humor, ironia e reflexão filosófica, abordando temas como a futilidade da vida e a hipocrisia da sociedade. Esta narrativa revolucionária desconstrói as convenções literárias da época, oferecendo ao leitor uma visão crítica e mordaz da sociedade brasileira do século XIX. A edição de luxo da Série Ouro da Editora Garnier, com suas bordas douradas, capa dura almofadada com hotstamping, e fitilho de seda, confere um toque de sofisticação a este clássico imortal.
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
				Imagina um cara que começa a contar sua vida... depois de morto. Sim, morto. Brás Cubas, o narrador dessa história, já partiu dessa pra melhor, e justamente por isso não tem medo de dizer o que pensa — sem censura, sem filtros, e com um sarcasmo que daria inveja a muito influencer de hoje.
                Esse livro não é só sobre o século XIX. É sobre gente que se acha demais, sobre a hipocrisia da sociedade, sobre ambição vazia e sobre como todo mundo, no fundo, é um pouco ridículo — inclusive o próprio narrador.
                E o melhor: Machado de Assis escreve com tanta ironia e inteligência que você vai rir, se irritar e, de quebra, sair da leitura com a sensação de que entendeu um pouco mais sobre o mundo e sobre você mesmo.
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
