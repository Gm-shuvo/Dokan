import React,{useState,useEffect} from 'react'
import './App.css';
import { commerce } from "./lib/commerce";
import {Products,Navbar} from '../src/component'
const App =() =>{
  const [products, setproducts] = useState([])

  const fetchData = async()=>{
    const {data} = await commerce.products.list()
    setproducts(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
        <Navbar/>
       <Products />
    </div>
  );
}


export default App;