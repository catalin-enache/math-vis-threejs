import { ReactNode, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useAppStore } from './store';
// TODO: do not import threeScene, make it local
import { SetUp, currentScene } from 'lib/App/SetUp/SetUp';
import { CPanel } from 'lib/App/CPanel/CPanel';
import { KeyListener } from 'lib/App/KeyListener';

interface AppProps {
  children?: ReactNode;
}

export function App(props: AppProps) {
  const { children } = props;
  const currentCameraStateFake = useAppStore((state) => state.currentCameraStateFake);
  const [camera, setCamera] = useState(currentScene.__inspectorData.currentCamera);

  useEffect(() => {
    setCamera(currentScene.__inspectorData.currentCamera);
  }, [currentCameraStateFake]);

  /*
  shadow types
  const types = {
    basic: THREE.BasicShadowMap, // gives unfiltered shadow maps - fastest, but lowest quality.
    percentage: THREE.PCFShadowMap, // filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm (default)
    soft/true: THREE.PCFSoftShadowMap, // filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm with better soft shadows especially when using low-resolution shadow maps.
    variance: THREE.VSMShadowMap // filters shadow maps using the Variance Shadow Map (VSM) algorithm. When using VSMShadowMap all shadow receivers will also cast shadows
  };
  VSMShadowMap works with Light.shadow.blurSamples
  VSMShadowMap was showing shadow acne for PointLight which was solved with bias -0.0001
  PCFSoftShadowMap and BasicShadowMap do not work with Light.shadow.radius
  * */

  // R3F takes care of adding/removing the camera from the scene
  // and propagating it to useThree hook

  return (
    <Canvas
      camera={camera}
      scene={currentScene}
      shadows={'soft'}
      gl={{ antialias: true, precision: 'highp' }}
      frameloop={'always'} // 'always' | 'demand' | 'never'
      // legacy
      // when legacy is true it sets THREE.ColorManagement.enabled = false, by default THREE.ColorManagement is enabled
      // when THREE.ColorManagement is enabled, ThreeJS will automatically handle the conversion of textures and colors to linear space.
    >
      <SetUp isInjected={false} autoNavControls />
      <CPanel />
      <KeyListener isInjected={false} autoNavControls />
      {children}
    </Canvas>
  );
}
