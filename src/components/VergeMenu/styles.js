import styled, { keyframes } from 'styled-components';

// Animaciones
export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const deslizar = keyframes`
  from {
    transform: translateY(-30%);
    transform: translateX(-100%);
  }
  to {
    transform: translateY(-30%);
    transform: translateX(0);
  }
`;

// Componentes estilizados
export const MenuContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  animation: ${deslizar} 1s ease-out; // Animación suave al aparecer desde la izquierda

  @media (max-width: 1050px) {
    top: 35%;
  }
`;

export const MenuIcon = styled.div`
  // border: 1px solid #f3f3f3;
  border-left: 0px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1.1rem 1rem 1.1rem .8rem;
  border-radius: 0rem 1rem 1rem 0rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease, background-color 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
    
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  @media (max-width: 1050px) {
    padding: .8rem .8rem .8rem .6rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const MenuDescription = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: auto;
  margin-bottom: auto;
  overflow-wrap: break-word;
  width: 12.3rem;
  position: absolute;
  left: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  white-space: normal;
  transform: ${({ show }) => (show ? 'translateX(1rem)' : 'translateX(0rem)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 1050px) {
    font-size: .8rem;
    width: 11rem;
    padding: .8rem;
    transform: ${({ show }) => (show ? 'translateX(.7rem)' : 'translateX(0rem)')};
  }
`;

export const Ayuda = styled.div`
  font-weight: 400;
  margin-left: .5rem;
  font-size: 1.1rem;
  margin-top: auto;
  margin-bottom: auto;
  overflow-wrap: break-word;
  max-width: 13rem;
  position: absolute;
  left: 100%;
  background: rgb(0 0 0 / 66%);
  color: #fff;
  padding: .8rem;
  border-radius: 1rem;
  white-space: normal;

  @media (max-width: 1050px) {
    font-size: .8rem;
    max-width: 11rem;
    padding: .5rem;
    margin-left: .5rem;
  }
`;

export const MenuItems = styled.div`
  padding: .7rem .6rem .7rem .3rem;
  position: absolute;
  top: 121%;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 15rem;
  max-height: 19rem;
  overflow-y: auto;
  border-radius: 0rem 1rem 1rem 0rem;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.3s ease;

  /* Estilos para la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: .3rem; /* Cambia la altura de la barra de desplazamiento horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white; /* Color de la barra */
    border-radius: 1rem; /* Redondeo de la barra */
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(0 0 0 / 39%); /* Fondo de la barra */
  }

  /* Oculta las flechitas de la barra */
  ::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 1050px) {
    padding: .6rem .5rem .6rem .2rem;
    max-height: 10rem;
  }
`;

export const MenuItem = styled.div`
  margin: .5rem;
  border-radius: 1rem;
  padding: .8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.5s ease, background-color 0.5s ease;
  &:hover {
    background-color: rgba(0,0,0,0.5);
    transform: scale(1.01);
  }
  & + & {
    border-top: 1px solid #444;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    font-size: .8rem;
    margin: .3rem;
    border-radius: .5rem;
    padding: .5rem;
    img {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`;