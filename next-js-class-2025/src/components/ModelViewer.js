'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Model({ modelPath, isThumb }) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useFrame(() => {
    if (isThumb && ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={ref} />;
}

export default function ModelViewer({ modelPath, isThumb = false }) {
  const canvasStyle = isThumb ? {
    width: '100%',
    aspectRatio: '1/1',
    background: 'transparent'
  } : {
    width: '100%',
    height: '100%',
    background: '#transparent'
  };

  return (
    <div style={canvasStyle}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model modelPath={modelPath} isThumb={isThumb} />
          {!isThumb && <OrbitControls />}
        </Suspense>
      </Canvas>
    </div>
  );
}