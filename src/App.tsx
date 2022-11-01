import React from 'react';
import './App.css';
// react canvas minimum useRef version
const { useRef, useEffect } = React;

function App() {
  const width = 400;
  const height = 200;
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext("2d");
  };


  const context = getContext();
  // draw
  context.fillRect(0, 0, width, height)
  context.fillStyle = 'yellow'
  context.fillRect(50, 50, 50, 50)
  context.fillRect((width - 100), 50, 50, 50)

  // useEffect(() => {
  //   const context: any = canvasRef.current;
  //   context.getContext("2d");
  //   // draw
  //   context.fillRect(0, 0, width, height)
  //   context.fillStyle = 'yellow'
  //   context.fillRect(50, 50, 50, 50)
  //   context.fillRect((width - 100), 50, 50, 50)
  // });

  return (
    <div className="App">
      <h1>Canvas useRef version</h1>
      <canvas
        ref={canvasRef}
        width={`${width}px`}
        height={`${height}px`}
      />
    </div>
  )
}

export default App;
