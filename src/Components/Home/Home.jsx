import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Banner, Input, Button, Links } from './style';

export default function Home() {
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você poderia validar o login se quiser futuramente
    navigate('/biblioteca'); // Redireciona para a rota da tela Biblioteca
  };

  return (
    <Container>
      <Banner>
        <img src="/images/banner-home.png" alt="Banner da Home" />
      </Banner>

      <FormContainer>
        <h1>Projeto ReadUp</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <Input type="email" id="email" placeholder="superhero@miro.com" />

          <label htmlFor="password">Senha</label>
          <Input type="password" id="password" placeholder="sua senha" />

          <Button type="submit">Entrar</Button>
        </form>

        <Links>
          <a href="#">Esqueceu sua senha?</a>
          <a href="#">Privacidade</a>
        </Links>
      </FormContainer>
    </Container>
  );
}
