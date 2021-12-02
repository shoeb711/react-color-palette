import React from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

function Palette(props) {

    const colorBoxes = props.colors.map(color => (
        <ColorBox background={color.color} name={color.name} />
    ))


    return (
        <div className='Palette'>
            {/* navbar */}
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* footer */}
        </div>
    )
}

export default Palette
