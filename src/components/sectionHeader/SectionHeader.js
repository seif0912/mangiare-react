import React from 'react'
import "./sectionHeader.css"


const SectionHeader = (props) => {
  return (
    <div className='sectionHeader'>
        <img src={props.img} alt=""/>
        {
            props.flip ? 
                <>
                    <h2>{props.disc}</h2>
                    <h1 className="title">{props.title}</h1>
                </>
            :
                <>
                    <h1 className="title">{props.title}</h1>
                    <h2>{props.disc}</h2>
                </>
        }
    </div>
  )
}

export default SectionHeader