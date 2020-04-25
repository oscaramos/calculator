import React from "react";

const Button = ({ isNumeric, isOperator, value, ...otherProps}) => {
  if (isOperator)
    return <div className='key operator-key' {...otherProps}><span>{value}</span></div>
  if (isNumeric)
    return <div className='key numeric-key' {...otherProps}><span>{value}</span></div>
  return <div/>
}

export default Button;