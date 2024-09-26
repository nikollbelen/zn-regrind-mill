import styled, { keyframes } from 'styled-components';

// Animación para deslizarse desde la izquierda
export const deslizar = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Componente estilizado para el contenedor del logo
export const ContenedorLogo = styled.div`
  // border: 1px solid #f3f3f3;
  border-left: 0px;
  z-index: 20;
  display: none;
  position: absolute;
  top: 3rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); // Rectángulo negro semi-transparente
  padding: 0.7em 4rem;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  justify-content: center;
  align-items: center;
  animation: ${deslizar} 1s ease-out; // Animación suave al aparecer desde la izquierda

  @media (max-width: 1050px) {
    top: 1rem;
    padding: 0.5em 1rem;
  }
`;

// Componente estilizado para la imagen del logo
export const Logo = styled.img`
  width: 10rem;
  height: auto;

  @media (max-width: 1050px) {
    width: 6rem;
  }
`;

export const Ayuda = styled.div`
  display: none;
  top: 3.67rem;
  font-weight: 400;
  margin-left: 19rem;
  font-size: 1.1rem;
  margin-top: auto;
  margin-bottom: auto;
  overflow-wrap: break-word;
  max-width: 13rem;
  position: absolute;
  left: 0;
  background: rgb(0 0 0 / 66%);
  color: #fff;
  padding: .8rem;
  border-radius: 1rem;
  white-space: normal;

  @media (max-width: 1050px) {
    top: 1.2rem;
    font-size: .8rem;
    max-width: 11rem;
    padding: .5rem;
    margin-left: 8.5rem;
  }
`;