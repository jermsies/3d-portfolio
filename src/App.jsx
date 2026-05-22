import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Apple from "./models/Apple"

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 2]} intensity={2} />

      <Apple />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <OrbitControls />

    </Canvas>
  )
}