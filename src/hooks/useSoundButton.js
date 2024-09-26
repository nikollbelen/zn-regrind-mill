import { useRef } from 'react';

// Custom Hook para manejar sonidos
const useSoundButton = () => {
  const hoverAudioRef = useRef(new Audio('/sounds/hover.mp3'));
  const clickAudioRef = useRef(new Audio('/sounds/click.mp3'));

  const playHover = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.play();
    }
  };

  const playClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.play();
    }
  };

  const stopHover = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
    }
  };

  const stopClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.pause();
      clickAudioRef.current.currentTime = 0;
    }
  };

  return { playHover, playClick, stopHover, stopClick };
};

export default useSoundButton;
