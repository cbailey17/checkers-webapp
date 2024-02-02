import { OrbitControls } from "@react-three/drei"
import Piece from "./Piece"

export const Hero = () => {
    return (
        <group scale={[0.5, 0.5, 0.5]} position={[1.5, -0.6, 0]}>
            <OrbitControls/>
            <Piece position={0} isDarkSquare={false} onClick={() => {}} isSelected={false} isKing={false} />
            <axesHelper />
            <ambientLight intensity={1} />
        </group>
    )
}