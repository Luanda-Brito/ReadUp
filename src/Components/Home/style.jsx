import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #126e82;
  height: 100vh;
  color: white;
  font-family: sans-serif;
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;

  h1 {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #efb04e;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e59c28;
  }
`;

export const Links = styled.div`
  margin-top: 1rem;

  a {
    display: block;
    color: #ffffff;
    text-decoration: underline;
    margin-top: 0.5rem;
  }
`;
