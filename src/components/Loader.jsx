import React from 'react'

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {

  //The useProgress hook provides a progress variable that represents 
  //the loading progress as a decimal value between 0 and 1.
  const { progress } = useProgress();
  return (

    //<Html> component from "@react-three/drei" to render HTML 
    //content as an overlay on top of the three.js canvas.
    <Html 
    as='div'
    center
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
    >
      <span className='canvas-loader'>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/*expression is used to display the loading progress as a percentage with two decimal places. */}
        {progress.toFixed(2)}%
      </p>

      </span>

    </Html>
  )
}

export default CanvasLoader


{
/*
The <Html> component is used as a <div> element with the following styles applied to center its contents both horizontally and vertically:

display: "flex": Displays the content as a flex container.
justifyContent: "center": Centers the content horizontally.
alignItems: "center": Centers the content vertically.
flexDirection: "column": Sets the flex direction to column, so that the contents are stacked vertically.




*/

}