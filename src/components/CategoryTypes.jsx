import React from 'react'
import { ApiCategories } from '../componentApi/CategoryApi'
import Category from './Category'
import shorts from'../images/shorts.webp';
import Announce from './Announce';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
function CategoryTypes() {
    const newitems=[
        {
            title:'Gym wear',
            src:'https://image.made-in-china.com/202f0j00ZnIVeJdFPRoL/Wholesale-Sweat-Suits-Long-Sleeve-Shirts-Sport-Pants-Men-Gym-Wear-Tracksuits.jpg'
        },
        {
          title:'Shorts',
          src:'https://imgs7.luluandsky.com/catalog/product/8/9/89RT-8571-LIGHT_BLUE_1.jpg'
        },
        {
          title:'Winter wear',
          src:'https://media1.popsugar-assets.com/files/thumbor/aUjYZ7_MLl7GN8X7L7X7If_m6I4=/fit-in/3225x4838/filters:format_auto():extract_cover():upscale()/2022/12/13/731/n/45961726/3d93afcc485f1506_GettyImages-1414576454.jpg'
        }
    ]
  return (
    <div>
    <Announce/>
    <Navbar/>
    <div className='flex justify-between items-center p-5 mobile:flex-col'>
      {ApiCategories.map((category,index)=>(
        <Category item={category} key={index}/>))
      }
    </div>
    <div className='flex justify-between items-center p-5 mobile:flex-col'>
      {newitems.map((category,index)=>(
        <Category item={category} key={index}/>))
      }
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default CategoryTypes
