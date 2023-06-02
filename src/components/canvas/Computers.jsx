import React, { Suspense, useEffect, useState } from "react";


// The Canvas object is where you start to define your React Three Fiber Scene.
import { Canvas } from "@react-three/fiber";
import { MeshDiscardMaterial, OrbitControls, Preload, useGLTF } from "@react-three/drei";

//

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  //using the scene.gltf model for computer
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>

      {/*Lights */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/*3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas =() => {

  //useState hook for mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return(
    <Canvas
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    
    >
      {/*Loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/*Controls for Manipulating the 3D Model */}

        {/*This component provides controls for manipulating the 3D model.  */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

    </Canvas>


  )
}


export default ComputerCanvas


// 3D Models Downloaded from Sketchfab


/*

Documentation of UseEffect

The useEffect hook is used to perform side effects in a React functional component. 
It takes two arguments: a callback function and an optional dependency array.

The callback function passed to useEffect will be executed after the component has 
rendered for the first time and whenever the dependencies in the dependency array change.

In this code, an empty dependency array ([]) is passed to useEffect, 
which means the callback function will only be executed once, after the initial render.


Inside the callback function, the following steps are performed:

1. The window.matchMedia method is called with a media query string "(max-width: 500px)".
   This method returns a MediaQueryList object that represents the result of the media query 
   evaluation.

2. The initial value of the isMobile state variable is set based on the 
   initial value of the media query evaluation using mediaQuery.matches. 
   If the media query matches the current screen size (e.g., the screen width is less than or equal to 500 pixels),
  isMobile is set to true; otherwise, it is set to false.

3. A callback function named handleMediaQueryChange is defined. 
   This function takes an event object as an argument and updates the 
   isMobile state variable based on the new value of the media query evaluation 
   (event.matches).

4. The addEventListener method is called on the mediaQuery object to 
   add the handleMediaQueryChange function as a listener for changes to the media query. 
   Whenever the media query evaluation changes (e.g., due to a screen resize), 
   the handleMediaQueryChange function will be called.

5. A cleanup function is returned from the useEffect callback function using the
   return statement. This cleanup function is responsible for removing the event listener
   when the component is unmounted. It calls the removeEventListener method on the mediaQuery 
   object, passing in the handleMediaQueryChange function as the listener to remove.

Overall, this code sets up an event listener to detect changes in the screen size and updates 
the isMobile state variable accordingly. This can be useful for making responsive UI adjustments 
based on the screen size within the component.
*/