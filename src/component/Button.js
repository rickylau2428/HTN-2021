import React from 'react';
import './Tiles.css';

function Button(props) {
  return (
      <button
      className="btn"
      onClick={props.onClick}>
      {props.text}
      </button>
  )
}

export default Button;
