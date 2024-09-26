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
  padding: 4rem;
  border-radius: 1.5rem;
  display: flex;
  gap: 2rem;
  transition: opacity 0.5s ease;

  @media (max-width: 1050px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

// Estilos para cada cuadro (card)
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Sombra suave estilo Material UI
  background-color: rgb(0 0 0 / 39%);
  border-radius: 1.5rem;

  @media (max-width: 1050px) {
    width: 9rem;
    padding: .8rem;
    border-radius: 1rem;
  }
`;

// Estilos para la imagen
const Image = styled.img`
  width: auto;
  height: 6rem;
  object-fit: cover;

  @media (max-width: 1050px) {
    width: auto;
    height: 3rem;
  }
`;

// Estilos para el texto descriptivo
const Description = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin-top: 1rem;

  @media (max-width: 1050px) {
    font-size: .8rem;
    margin-top: .5rem;
  }
`;

// Componente principal
const ModalAyuda = () => {
  return (
    <CenteredContainer id='ayuda' className="content content1" style={{ zIndex: 30 }}>
      <CardContainer id='ayudaContainer' className="content content1">
        <Card>
          <Image src="/images/mouse1.png" alt="Imagen 1" />
          <Description><p className='en'>To rotate and move through the laboratory views, use the left mouse button.</p><p className='es'>Para rotar y desplazarse por las vistas del laboratorio utilice el botón izquierdo del mouse</p></Description>
        </Card>
        <Card>
          <Image src="/images/mouse2.png" alt="Imagen 2" />
          <Description><p className='en'>To move right or up, press the right mouse button or the physical arrow keys ↑ ↓ → ←.</p><p className='es'>Para desplazarse hacia la derecha o arriba presione el botón derecho del mouse o las teclas físicas ↑ ↓ → ←</p></Description>
        </Card>
        <Card>
          <Image src="/images/mouse3.png" alt="Imagen 3" />
          <Description><p className='en'>To zoom in or out on the laboratory views, use the mouse wheel.</p><p className='es'>Para acercar o alejar las vistas del laboratorio utilice la rueda del mouse.</p></Description>
        </Card>
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalAyuda;
