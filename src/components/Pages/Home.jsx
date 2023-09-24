import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import Slider from '../Slider'
import Categories from '../Categories'
import Products from '../Products'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
function Home() {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
