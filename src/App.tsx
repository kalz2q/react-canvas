import React from 'react';
import './App.css';
// react canvas minimum , simpler version
const { useEffect } = React;

function App() {
  const width = 400;
  const height = 200;

  useEffect(() => {
    const canvasElem: any = document.getElementById("canvas");
    const context = canvasElem.getContext("2d");

    // draw
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (data[row][col] === 1) {
          context.fillRect(col * 10, row * 10, 10, 10);
        }
      }
    }
  });

  return (
    <div className="App">
      <canvas
        id="canvas"
        width={`${width}px`}
        height={`${height}px`}
      />
    </div>
  );
}

const data = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

export default App;
