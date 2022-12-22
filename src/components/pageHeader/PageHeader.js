import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '../Index'
import "./pageHeader.css"

const PageHeader = (props) => {
  return (
    <div className="hero-about-us-1">
        <Container>
            <h1>{props.title}</h1>
            <p>
                <Link to="/">home</Link> / <span>pages</span> / <span>{props.title}</span>
            </p>
        </Container>
    </div>
  )
}

export default PageHeader