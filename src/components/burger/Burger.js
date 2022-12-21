import React from 'react'
import './burger.css'

const Burger = ({setBurger, burger,setMenu, menu}) => {
  const clickHandler = () => {
    if(burger=="clicked"){
      setBurger('')
      setMenu('')
    }else{
      setBurger('clicked')
      setMenu("active")
    }
  }
  return (
    <div className={`burger ${burger}`} onClick={clickHandler} >
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Burger