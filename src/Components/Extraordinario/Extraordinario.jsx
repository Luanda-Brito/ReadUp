import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Extraordinario() {
	const navigate = useNavigate();

	return (
		<div className="extraordinario-page">
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

			<h1>Extraordinario</h1>

			<div className="livro-container">
				<img src="/images/extraordinario.jpg" alt="Capa Extraordinario" />
				<p className="autor">Autor: R. J. Palacio</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
                Todo mundo sabe que é difícil ser um aluno novo, mais ainda quando se tem um rosto tão diferente. Prestes a começar o quinto ano em um colégio particular de Nova York, Auggie tem uma missão nada fácil pela frente: convencer os colegas de que, apesar da aparência incomum, ele é um menino igual a todos os outros.
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
				Imagine entrar na escola pela primeira vez e sentir todos os olhares voltados para você. É isso que acontece com Auggie, um garoto diferente por causa de sua aparência, mas que mostra ter uma coragem e um coração enormes
                Extraordinário não é só um livro, é uma lição de vida. Ele fala sobre amizade, respeito, bullying, empatia e sobre como cada pessoa pode fazer a diferença no mundo sendo mais gentil.
                A história é emocionante, fácil de acompanhar e faz você rir, chorar e pensar ao mesmo tempo. Quando terminar, você vai perceber que ser “normal” não é nada perto de ser extraordinário.
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
