import React from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'


function ColorBox(props) {
  const { name, background } = props;

  return (
    <CopyToClipboard text={props.background}>
      <div style={{ background }} className='ColorBox'>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
