import React from 'react';
import './App.css';
// maze boutaoshihou
const { useEffect } = React;

function App() {
  const width = 700;
  const height = 200;

  useEffect(() => {
    const canvasElem: any = document.getElementById("canvas");
    const context = canvasElem.getContext("2d");

    const getData = () => {
      const data = [];
      for (let row = 0; row < 9; row++) {
        data[row] = [0];
        for (let col = 0; col < 7; col++) {
          data[row][col] = 1;
        }
      }
      return data;
    }
    const data = getData();

    // draw
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        data[row][col] = 1;
        context.fillRect(col * 10, row * 10, 10, 10);
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
