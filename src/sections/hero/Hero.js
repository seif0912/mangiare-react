import './hero.css'
import {Container, Button} from '../../components/Index'

const Hero = () => {
  return (
    <div className="hero">
        <Container>
            <div className="box">
                <h1>delicious food</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Officia quidem optio in similique quia id deserunt sit qui, voluptate error!
                </p>
                {/* <a href="reservation/reservation-style-1.html" className="link">book your table</a> */}
                <Button to='#' class="primary">book your table</Button>
                </div>
        </Container>
    </div>
  )
}

export default Hero