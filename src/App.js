import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'
import validateColor from 'validate-color'


function App(){
    let [colors, setColors] = useState([
        'violet', 'blue', 
        'lightblue', 'green', 
        'greenyellow', 'yellow', 
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
      return (
          <ColorBlock key={i} color={color} />
      )
    })

  const addColor = (newColor) => {
  const myColor = validateColor(newColor) ? newColor : "invalid color"

    setColors([...colors, myColor]) 
  }
        return (
        <div className="App">
           {colorMap}
           <ColorForm addColor={addColor} />     
        </div>
    )
}


export default App;
