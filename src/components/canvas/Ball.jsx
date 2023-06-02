
//Suspense is a React component used for displaying fallback content 
//while waiting for asynchronous operations to complete, such as 
//data fetching or code splitting, improving user experience during loading
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";


//The provided imports from the "@react-three/drei" library serve the following purposes:

//Decal is used to add decals, which are flat textures that can be applied to 3D objects.
//Float is used to create floating animations for 3D objects.
//OrbitControls is used to enable interactive orbit controls, allowing users to rotate and navigate the 3D scene.
//Preload is used to preload and cache 3D assets, ensuring they are ready for rendering when needed.
//useTexture is a hook used to load and manage textures or images for 3D materials in a React Three.js application.
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";




// Progress loader to provide smooth loading of balls
import CanvasLoader from "../Loader";


const Ball = (props) => {

  //useTexture hook to load a texture or image specified by the props.imgUrl prop,
  // and assigns the resulting texture reference to the decal variable using array destructuring.
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/*Light */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;