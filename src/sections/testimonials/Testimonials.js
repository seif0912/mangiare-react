import React from 'react'
import './testimonials.css'
import {Container, SectionHeader} from '../../components/Index'
import quoteLogo from '../../assets/quote-logo.png'
import img1 from '../../assets/chef-5.jpg'
import img2 from '../../assets/chef-6.jpg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className="testimonial">
        <SectionHeader img={quoteLogo} title="testimonial" disc="customer feedback" flip={false}/>
        <Container>
            <div className="slider">
                <span className='i'><FaAngleLeft/></span>
                <div className="testi">
                    <div className="box">
                        <div className="image">
                            <img src={img1} alt=""/>
                        </div>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                        </p>
                        <h3>jane doe</h3>
                    </div>
                    <div className="box active">
                        <div className="image">
                            <img src={img2} alt=""/>
                        </div>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                        </p>
                        <h3>ahmad aissa</h3>
                    </div>
                </div>
                <span className='i'><FaAngleRight/></span>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials