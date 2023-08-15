import React from 'react'

// const ColorBlock = (props) => {
const ColorBlock = ((props, i) => {

    return (
        <div className="colorBlock"
            style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
})

export default ColorBlock


// let colorMap = colors.map((color, i) => {
//     return (
//         <ColorBlock color={color} />
//     )
//   })