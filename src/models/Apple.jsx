import { useGLTF } from "@react-three/drei"

export default function Apple() {
  const model = useGLTF("/models/apple.glb")

  return (
    <primitive 
      object={model.scene}
      scale={1}
    />
  )
}