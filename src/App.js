import React, { useEffect } from "react";
import { useState } from "react";

import ProducList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import {Routes , Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import ProductData from "./database/Products.json";
import Cart from "./Components/Cart";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [products,setProduct]=useState([]);
  const [SearchTerm,setSearchTerm]=useState('');
  const [cartItems,setCartItems]=useState([]);

  useEffect(()=>{
    setProduct(ProductData);
    // console.log(ProductData)
    
  },[])

  useEffect(() => {
    // console.log(products);
  }, [products]);

  const handleSearch=(term)=>{
    setSearchTerm(term);
  }

  const handleAddToCart=(product)=>{
    setCartItems((prevCartItems)=> [...prevCartItems,product])
  }

  const ProductFilter=products.filter((ProF)=>
  ProF.title.toLowerCase().includes(SearchTerm.toLowerCase()));
  
  return (
    <div>
      
      <NavBar handleSearch={handleSearch}/>
      
      {/* <Routers/> */}
      <Routes>
            {/* <Switch> */}
                <Route path="/" element={<ProducList product={ProductFilter} handleAddToCart={handleAddToCart}/>}></Route>
                <Route path="/productDetails/:id" element={<ProductDetails product={products}/>}></Route>
                <Route path="/cart"  element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>
            {/* </Switch> */}
        </Routes>
    </div>
  );
}
export default App;
