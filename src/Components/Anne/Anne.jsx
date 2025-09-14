import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function Anne() {
	const navigate = useNavigate();

	return (
		<div className="anne-page">
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

			<h1>O Diário de Anne Frank</h1>

			<div className="livro-container">
				<img src="/images/anne-frank.jpg" alt="Capa do Diário de Anne Frank" />
				<p className="autor">Autor: Annelies Marie Frank</p>
				<h2>Sinopse</h2>
				<p className="sinopse">
					O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário. 
				</p>
			</div>

			<section className="destaque">
				<img src="/images/oculos.png" alt="Ícone de óculos" className="icon" />
				<h3>Por que devo ler esse livro?</h3>
				<img src="/images/balao.png" alt="Balão" className="icon" />

				<p className="motivo">
					Anne Frank tinha apenas 13 anos quando começou a escrever seu diário. Ela falava de amizade, família, sentimentos e sonhos — coisas que qualquer adolescente sente. Mas ela viveu tudo isso em meio à guerra, escondida para sobreviver. Ler o diário é como entrar na mente de alguém da sua idade que enfrentou dificuldades inimagináveis, mas nunca deixou de acreditar no futuro. É uma história real que nos ensina sobre coragem, liberdade e empatia.
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
