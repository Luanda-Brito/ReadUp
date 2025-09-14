import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Banana() {
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

			<h1>Diário de um Banana</h1>

			<div className="livro-container">
				<img src="/images/diario-banana.jpg" alt="Capa de Diário de um Banana" />
				<p className="autor">Autor: Jeff Kinney</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
					Não é fácil ser criança. E ninguém sabe disso melhor do que Greg Heffley, que se vê mergulhado no mundo do ensino fundamental, onde fracotes são obrigados a dividir os corredores com garotos mais altos, mais malvados e que já se barbeiam. Em Diário de um Banana, o autor e ilustrados Jeff Kinney nos apresenta um herói improvável. Como Greg diz em seu diário. Só não espere que seja todo Querido Diário isso, Querido Diário aquilo. Para nossa sorte, o que Greg Heffley diz que fará e o que ele realmente faz são duas coisas bem diferentes.
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
					Se você acha que leitura precisa ser chata, está enganado. Diário de um Banana é um dos livros mais divertidos que existem, cheio de situações engraçadas que todo adolescente já viveu ou ainda vai viver.
                    A história é contada pelo Greg, um garoto comum que enfrenta problemas de escola, família, amizades e aquelas trapalhadas que só acontecem nessa fase da vida. O melhor é que o livro mistura texto com desenhos, deixando a leitura leve e rapidinha. 
                    Além de rir bastante, você vai acabar se identificando com várias partes — porque a vida de Greg pode ter muito a ver com a sua.
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
