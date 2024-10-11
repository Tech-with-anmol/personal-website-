import { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    const audiocontext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('background.mp3');
    audioElement.loop = true;
    audioElement.autoplay = true;
    audioElement.muted = true; // Start muted

    const sourcenode = audiocontext.createMediaElementSource(audioElement);
    const gainnode = audiocontext.createGain();
    gainnode.gain.value = 1; // Adjusted since the volume is pre-amped
    sourcenode.connect(gainnode);
    gainnode.connect(audiocontext.destination);

    const handleUserInteraction = () => {
      audiocontext.resume().then(() => {
        audioElement.muted = false;
        audioElement.play().catch((error) => console.error('Playback failed', error));
      });
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return null; // No button, just background audio
};

export default AudioPlayer;
