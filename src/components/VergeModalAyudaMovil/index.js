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
const ModalAyudaMovil = () => {
  return (
    <CenteredContainer id='ayudaMovil' className="content content1" style={{ zIndex: 30 }}>
      <CardContainer id='ayudaMovilContainer' className="content content1">
        <Card>
          <Image src="/images/paso1.png" alt="Imagen 1" />
          <Description><p className='en'>ory views, use the left mouse button.</p><p className='es'>Para poder ver el escenario fijamente desde diferentes direcciones, asegúrese de mover sus dedos sobre la pantalla.</p></Description>
        </Card>
        <Card>
          <Image src="/images/paso2.png" alt="Imagen 2" />
          <Description><p className='en'>button or the physical arrow keys ↑ ↓ → ←.</p><p className='es'>Para acercar o alejar las vistas del modulo interactivo utilice sus dos dedos.</p></Description>
        </Card>
        <Card>
          <Image src="/images/paso3.png" alt="Imagen 3" />
          <Description><p className='en'> use the mouse wheel.</p><p className='es'>Para desplazarse muévase con el dedo en las direcciones que se muestran en las flechas ↑ ↓ → ←.</p></Description>
        </Card>
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalAyudaMovil;
