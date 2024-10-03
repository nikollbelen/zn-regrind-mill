import React, { useState } from 'react';
import { MenuContainer, MenuIcon, MenuDescription, MenuItems, MenuItem, Ayuda } from './styles';
import useSoundButton from "../../hooks/useSoundButton";

// Hook para manejar sonidos
const useSound = (url) => {
  const audioRef = React.useRef(new Audio(url));

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return { play };
};

// Componente del menú
const Menu = ({ items, menuIconImage }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [open, setOpen] = useState(false);

  // Carga los sonidos
  const { play: playMenuOpenSound } = useSound('/sounds/menu-open.mp3');
  const { play: playMenuCloseSound } = useSound('/sounds/menu-close.mp3');
  const { playHover, playClick, stopHover, stopClick } = useSoundButton();

  const handleMouseEnter = () => {
    stopHover();
    stopClick();
    playHover();
  };

  const handleButtonClick2 = () => {
    stopHover();
    stopClick();
    playClick();
  };

  const handleClick = () => {
    stopHover();
    stopClick();
    playClick();
    if (!open) {
      setShowDescription(true);
      playMenuOpenSound();
    } else {
      setShowDescription(false);
      playMenuCloseSound();
    }
    setOpen(!open);
  };

  return (
    <MenuContainer id='menu'>
      <MenuIcon
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <img src={menuIconImage} alt="Menu Icon" />
        <MenuDescription show={showDescription}>
        <p className='en'>Zn Regrind Mill</p><p className='es'>Filtro de Concentrado de Zinc</p>
        </MenuDescription>
        <Ayuda className="content content1" style={{ zIndex: 30, display: "none" }}><p className='en'>Menu</p><p className='es'>Menu</p></Ayuda>
      </MenuIcon>
      <MenuItems open={open}>
        {items.map((item, index) => (
          <MenuItem onMouseEnter={handleMouseEnter} onClick={handleButtonClick2} id={item.id} key={index}>
            <img src={item.icon} alt={`Icon ${index}`} />
            <span className='en'>{item.ENdescription}</span><span className='es'>{item.ESdescription}</span>
          </MenuItem>
        ))}
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
