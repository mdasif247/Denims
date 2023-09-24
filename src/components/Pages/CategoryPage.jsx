import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import Products from '../Products'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
function CategoryPage() {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='flex flex-col p-5'>
        <h1 className='text-[30px]'>Men's wear</h1>
        <div className='flex items-center justify-between mt-3'>
            <div className='flex mobile:flex-col'>
                <p>Filter by</p>
                <select className='ml-3 border-2 border-silver mobile:mt-2'>
                    <option selected disabled value="">Size</option>
                    <option  value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                </select>
                <select className='ml-3 border-2 border-silver mobile:mt-2'>
                    <option selected disabled>Color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                </select>
            </div>
            <div className='flex'>
                <p>Sort by</p>
                <select className='ml-3 border-2 border-silver'>
                    <option>Newest (first)</option>
                    <option>Oldest (first)</option>
                    <option>Price (High)</option>
                    <option>Price (Low)</option>
                </select>
            </div>
        </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default CategoryPage
