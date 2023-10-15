import Announce from "./components/Announce";
import Cart from "./components/Pages/Cart";
import CategoryPage from "./components/Pages/CategoryPage";
import Home from "./components/Pages/Home";
import ProductPage from "./components/Pages/ProductPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import CategoryTypes from "./components/CategoryTypes";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[items,setItems]=useState([]);
  const addToCart=(item)=>{
    toast.success("Added to cart");
    setItems([...items,item])
  }
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="category" element={<CategoryTypes/>} />
        <Route path="products" element={<CategoryPage/>} />
        <Route path="register" element={<Register/>} />
        <Route path="signin" element={<Login/>} />
        <Route path="cart" element={<Cart items={items}/>}/>
        <Route path="product" element={<ProductPage addtocart={addToCart}/>} />
      </Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
