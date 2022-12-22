import React from 'react'
import './rest.css'
import bgImg from "../../assets/since.png"
import { Button } from '../../components/Index'

const Rest = () => {
  return (
    <div className="rest">
        <div className="box">
            <img src={bgImg} alt=""/>
            <h1>mangiare restaurant</h1>
            <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <Button to="#" class="secondary white">reserve table</Button>
        </div>
    </div>
  )
}

export default Rest