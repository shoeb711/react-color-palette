import React from 'react';
import './ColorBox.css';

function ColorBox(props) {
  const { name, background } = props;

  return (
    <div style={{ background }} className='ColorBox'>
      <div className='copy-container'>
        <div className='box-content'>
          <span>{name}</span>
        </div>
        <button className='copy-button'>copy</button>
      </div>
      <span className='see-more'>More</span>
    </div>
  );
}

export default ColorBox;
