import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from './axios';
export const ProductContext=createContext();
function Context(props) {
  const[products,setproducts]=useState(JSON.parse(localStorage.getItem("products"))||null)
  // const getproducts=async() =>{
  //   try {
  //       const {data}=await axios("/products")
  //       setproducts(data)
        
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }
  // console.log(products);
  // useEffect(()=>{
  //   getproducts()
  // },[])

  return (
    <ProductContext.Provider value={[products,setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
