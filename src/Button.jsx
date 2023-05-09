import React from 'react';
import './Button.css';

function Button({ value, onClick, selected }) {
  return <div className={`button ${selected && 'selected'}`}>{value}</div>;
}

export default Button;
