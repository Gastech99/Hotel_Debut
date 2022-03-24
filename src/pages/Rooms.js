import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'

const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Vos Chambres">
          <Link to='/' className='btn-primary'>return Home</Link>
        </Banner>
      </Hero>
    </div>
  )
}

export default Rooms