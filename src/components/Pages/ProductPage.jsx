import React from "react";
import Announce from "../Announce";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Counter from "../Counter";
function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mb-7 mobile:flex-col mt-3 p-2">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            alt="Product-img"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start justify-item-center mt-10 mobile:mt-5">
          <h1 className="title text-[40px] mobile:text-[30px] ">Cream Hoody Orignal</h1>
          <p className="description pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            harum et quos reprehenderit voluptatibus at accusantium labore
            reiciendis enim molestias. Error expedita ipsum explicabo laborum
            natus sit et corrupti quis?
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>$70</b>
            </p>

            <div className="colors flex mt-7 text-2xl mobile:hidden">
              Colors
              <div className="colorSelect bg-red-600 w-[80%] h-[80%] rounded-full border-2 border-silver"></div>
              <div className="colorSelect bg-blue-600 w-[80%] h-[80%] rounded-full border-2 border-silver"></div>
              <div className="colorSelect bg-yellow-400 w-[80%] h-[80%] rounded-full border-2 border-silver"></div>
            </div>
            <div className="mt-7 text-2xl">
                Size 
                <select className="border-[2px] border-silver rounded-md ml-5">
                    <option selected disabled>select</option>
                    <option >Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div className="mt-7">
                <Counter/>
            </div>
          </div>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
