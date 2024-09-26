import React from 'react';
import styled  from 'styled-components';

// Estilos para el contenedor centrado
const CenteredContainer = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0) !important;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

// Estilos para el contenedor de los tres cuadros
const CardContainer = styled.div`
  background: rgb(0 0 0 / 66%);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  transition: opacity 0.5s ease;

  @media (max-width: 1050px) {
    padding: 0.5rem;
  }
`;

// Estilos para la imagen
const Image = styled.img`
  width: auto;
  height: 23rem;
  object-fit: cover;

  @media (max-width: 1050px) {
    width: auto;
    height: 15rem;
  }
`;

// Componente principal
const ModalInformacion = () => {
  return (
    <CenteredContainer className="content content4" style={{ zIndex: 30 }}>
      <CardContainer className="content content4">
        <Image src="/images/informacion.png" alt="Imagen 1" />
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalInformacion;
