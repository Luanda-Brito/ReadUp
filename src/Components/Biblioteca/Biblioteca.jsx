import './style.jsx';
import { Link } from 'react-router-dom';

export default function Biblioteca() {
  return (
    <div className="biblioteca-page">
      <header className="header">
        <img src="/images/user-icon.png" alt="Ícone de usuário" />
        <img src="/images/search-icon.png" alt="Ícone de pesquisa" />
      </header>

      <h2>Leituras</h2>

      <div className="grid-livros">
        <Link to="/livro/pequeno-principe" className="livro">
          <img src="/images/pequeno-principe.jpg" alt="O Pequeno Príncipe" />
          <p>O Pequeno Príncipe - Antoine de Saint-Exupéry</p>
        </Link>

        <div className="livro">
          <img src="/images/anne-frank.jpg" alt="O Diário de Anne Frank" />
          <p>O diário de Anne Frank - Annelies Marie Frank</p>
        </div>

        <div className="livro">
          <img src="/images/diario-banana.jpg" alt="Diário de um Banana" />
          <p>Diário de um Banana - Jeff Kinney</p>
        </div>

        <div className="livro">
          <img src="/images/o-alquimista.jpg" alt="O Alquimista" />
          <p>O Alquimista - Paulo Coelho</p>
        </div>

        <div className="livro">
          <img src="/images/memorias-postumas.jpg" alt="Memórias Póstumas" />
          <p>Memórias Póstumas - Machado de Assis</p>
        </div>

        <div className="livro">
          <img src="/images/extraordinario.jpg" alt="Extraordinário" />
          <p>Extraordinário - R. J. Palacio</p>
        </div>
      </div>
    </div>
  );
}
