import React from 'react';
import './App.css';
const { useEffect, useState } = React;

const width = 255
const height = 255

function App() {
  const [png, setPng] = useState<string | null>(null)
  // const [png, setPng] = useState<string>("")
  const [png2, setPng2] = useState<string | null>(null)

  useEffect(() => {
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    canvasElem.height = height
    const ctx = canvasElem.getContext('2d')

    // draw
    if (ctx !== null) {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#888888'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'pink'
      ctx.fillRect(50, 50, 50, 50)
    }
    setPng(canvasElem.toDataURL())

  }, [])

  return (
    <div>
      <h3>画像生成</h3>
      <h4>生成</h4>
      {png && (
        <div className="comp" style={{ display: 'flex' }}>
          <img alt="icon" src={png} />
          <img alt="round icon" src={png} style={{ borderRadius: '100%' }} />
        </div>
      )}
    </div>
  )
}

export default App;
