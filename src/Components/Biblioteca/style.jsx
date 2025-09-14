import styled, { createGlobalStyle } from 'styled-components';

// Reset global para evitar espaços em volta
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    background-color: #84ccc9;
    font-family: 'Arial', sans-serif;
  }
`;

export const BibliotecaPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8a48f;
  padding: 0.6rem 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  img {
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
`;

export const Titulo = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 1rem;
  color: #222;
`;

export const GridLivros = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export const Livro = styled.div`
  background-color: white;
  padding: 0.6rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 160px;  /* deixa os cards menores e mais bonitos */
  margin: 0 auto;    /* centraliza os cards menores */

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 12px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    height: 200px; /* altura fixa para deixar os livros proporcionais */
    object-fit: cover; /* corta a imagem sem distorcer */
    border-radius: 8px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #333;
  }
`;
