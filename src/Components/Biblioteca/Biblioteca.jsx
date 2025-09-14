import { BibliotecaPage, Header, GridLivros, Livro, Titulo } from './style.jsx';
import { Link } from 'react-router-dom';

export default function Biblioteca() {
  return (
    <BibliotecaPage>
      <Header>
        <img src="/images/user-icon.png" alt="Ícone de usuário" />
        <img src="/images/search-icon.png" alt="Ícone de pesquisa" />
      </Header>

      <Titulo>Leituras</Titulo>

      <GridLivros>
        <Link to="/livro/pequeno-principe" style={{ textDecoration: 'none' }}>
          <Livro>
            <img src="/images/pequeno-principe.jpg" alt="O Pequeno Príncipe" />
            <p>O Pequeno Príncipe - Antoine de Saint-Exupéry</p>
          </Livro>
        </Link>

        <Link to="/livro/anne-frank" style={{ textDecoration: 'none' }}>
        <Livro>
          <img src="/images/anne-frank.jpg" alt="O Diário de Anne Frank" />
          <p>O diário de Anne Frank - Annelies Marie Frank</p>
        </Livro>
        </Link>

        <Link to="/livro/diario-banana" style={{ textDecoration: 'none' }}>
        <Livro>
          <img src="/images/diario-banana.jpg" alt="Diário de um Banana" />
          <p>Diário de um Banana - Jeff Kinney</p>
        </Livro>
        </Link>

        <Link to="/livro/o-alquimista" style={{ textDecoration: 'none' }}>
        <Livro>
          <img src="/images/o-alquimista.jpg" alt="O Alquimista" />
          <p>O Alquimista - Paulo Coelho</p>
        </Livro>
        </Link>

        <Link to="/livro/memorias-postumas" style={{ textDecoration: 'none' }}>
        <Livro>
          <img src="/images/memorias-postumas.jpg" alt="Memórias Póstumas" />
          <p>Memórias Póstumas - Machado de Assis</p>
        </Livro>
        </Link>

        <Link to="/livro/extraordionario" style={{ textDecoration: 'none' }}>
        <Livro>
          <img src="/images/extraordinario.jpg" alt="Extraordinário" />
          <p>Extraordinário - R. J. Palacio</p>
        </Livro>
        </Link>
      </GridLivros>
    </BibliotecaPage>
  );
}
