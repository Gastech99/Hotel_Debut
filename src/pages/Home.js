import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <>
      <div>
        <Hero>
          <Banner title="Des Villas de Luxe" subtitle="Le Luxe à partir de 400.000f">
            <Link to="/rooms" className='btn-primary'>
              Vos Chambres
            </Link>
          </Banner>
        </Hero>
      </div>
      <Services/>
      <FeaturedRooms />
    </>
  )
}
