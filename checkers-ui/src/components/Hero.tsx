import { OrbitControls } from "@react-three/drei"
import { CheckerBoard } from "./CheckerBoard"

export const Hero = () => {
    return (
        <>
        <group scale={[0.5, 0.5, 0.5]} position={[1.5, -0.6, 0]}>
            <OrbitControls/>
            <CheckerBoard/>
            <axesHelper />
            <ambientLight intensity={1} />
        </group>
        </>
    )
}