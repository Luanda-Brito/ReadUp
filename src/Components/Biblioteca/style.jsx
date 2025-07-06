import styled from 'styled-components';

export const BibliotecaPage = styled.div`
  background-color: #84ccc9;
  min-height: 100vh;
  padding: 1rem;
  font-family: sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #e8a48f;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const GridLivros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

export const Livro = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 12px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    color: #333;
  }
`;
