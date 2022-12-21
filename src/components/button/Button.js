import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <a href={props.to} className={`link ${props.class}`}>{props.children}</a>
  )
}

export default Button