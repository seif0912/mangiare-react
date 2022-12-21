import React from 'react'
import './chef.css'
import {Container, SectionHeader, ChefCard} from '../../components/Index'
import chefLogo from '../../assets/chef-logo.png'
import {Chefs} from '../../data/Chefs'

const Chef = () => {
    const chefs = Chefs.map(chef=>{
        return <ChefCard key={chef.id} imgSrc={chef.imgSrc} title={chef.title} name={chef.name}/>
    })
  return (
    <div className="chef">
        <Container>
            <SectionHeader img={chefLogo} title="chef" disc="recipe artist" flip={false}/>
            <div className="chefs">
                {chefs}
            </div>
        </Container>
    </div>
  )
}

export default Chef