import React from 'react'
import { Container , Button} from '../../components/Index'
import './para.css'
import rest from '../../assets/restaurant.jpg'
import decoLogo from '../../assets/deco-logo.png'


const Para = () => {
  return (
    <div className="para">
        <Container>
            <div className="image">
                <img src={rest} alt=""/>
            </div>
            <div className="info">
                <img src={decoLogo} alt=""/>
                <h2>mangiare restaurant</h2>
                <p>
                    Proin eget tortor risus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
                <p>
                    Proin eget tortor risus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.
                </p>
                <Button to='#' class="secondary">read more</Button>
            </div>
        </Container>
    </div>
  )
}

export default Para