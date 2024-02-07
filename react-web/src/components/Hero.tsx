import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { Checker } from "./Checker";
import { Canvas, useFrame } from "@react-three/fiber";
// import CheckersGame from "./CheckersGame";

export const Hero = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  
    window.addEventListener('resize', () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    });

    const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

    const handleSquareClick = (square: number) => {
      console.log(`Clicked on square ${square}`);
      setSelectedSquare(square);
    };

    // useFrame(() => {
    //     console.log('Frame');
    // });
    
    return (
        <section className='hero'>
            <div className='canvas-container' style={{ width: viewportWidth, height: viewportHeight}}>
                <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
                    <color attach="background" args={['#171720']} />
                    <OrbitControls/>
                    {/* <Checker_board /> */}
                    <Checker />
                    <axesHelper />
                    <ambientLight intensity={1} />
                </Canvas>
            </div>
        </section>
    )
}