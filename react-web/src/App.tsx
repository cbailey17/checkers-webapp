import './App.css'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react';
import { Hero } from './components/Hero';
import CheckersGame from './components/CheckersGame';

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  window.addEventListener('resize', () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  });

  return (
    <div className='canvas-container' style={{ width: viewportWidth, height: viewportHeight}}>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={['#171720']} />
        <Hero />
      </Canvas>
      <CheckersGame />
    </div>
  )
}

export default App
