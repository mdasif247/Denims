import React, { useState } from "react";
import Announce from "../Announce";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Counter from "../Counter"
import CartCounter from '../CartCounter'
const Cart = ({items}) => {
  const[citems,setCitems]=useState([...items]);
  const[cprice,setCprice]=useState(items.map((it)=>it.price));
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mb-3 mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  var sum=0;
  citems.map((cit)=>sum+=cit.price);
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: {items.length}</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            {citems.map((item,index)=>
            
            <div className={ProductDivStyle} key={index}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={item.src}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>1234
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>{item.color} Hoody Original
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Color:</b>
                    <div className="colorSelect ml-1 w-[20px] h-[20px]">{item.color}</div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <CartCounter citem={item} citems={citems} setCitems={setCitems} ind={index} fixp={cprice[index]}/>
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>{item.price}$</b>
                </p>
              </div>
            </div>
            )}

            <hr className="mb-7 mt-7 mobile:mt-0" />
            </div>
          {items.length>0?<div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>${sum}</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>${sum}</p>
            </div>
          </div> : <div className="text-[30px] font-bold block ml-auto mr-auto">No items in the cart</div>}
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;