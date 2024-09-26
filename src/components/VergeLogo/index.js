
import React from 'react';
import { ContenedorLogo, Logo, Ayuda } from './styles';


function VergeLogo({ logoUrl }) {
  return (
    <div>
      <ContenedorLogo id='logo'>
        <Logo src={logoUrl} alt="Logo" />
      </ContenedorLogo>
      {/* <Ayuda className="content content1" style={{ zIndex: 30 }}><p className='en'>Logo</p><p className='es'>Logo</p></Ayuda> */}
    </div>
  );
}

export default VergeLogo;