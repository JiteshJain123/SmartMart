import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context"; // Use named import
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const {search}=useLocation();
  const category= decodeURIComponent(search.split("=")[1]);

  const [filteredproducts,setfilteredproducts]=useState(null)

  const getproductscategory=async() =>{
      try {
        const {data}=await axios.get(`/products/category/${category}`);
        setfilteredproducts(data)
      } catch (error) {
        console.log(error);
        
      }
  }
  
  useEffect(()=>{
    if(!filteredproducts || category=='undefined') setfilteredproducts(products)
    if(category!='undefined'){
      // getproductscategory();
      setfilteredproducts(products.filter(p=>p.category==category));
    }
  },[category,products])

  return ( products ?
    <>
      <Nav/>
      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
            {filteredproducts && filteredproducts.map((p,i)=>(
                        <Link key={p.id} to={`/details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow w-[18%] h-[30vh] flex flex-col items-center justify-center">
                        <div
                          className="hover:scale-115 mb-3 w-full h-[90%] bg-contain bg-no-repeat bg-center"
                          style={{
                            backgroundImage:
                              `url(${p.image})`,
                          }}
                        ></div>
                        <h1 className="hover:text-blue-300 text-sm">
                          {p.title}
                        </h1>
                      </Link>
            ))}
      </div>
    </> : <Loading/>
  ); 
}

export default Home;
