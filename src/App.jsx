import React,{useState,useEffect} from 'react'
import './App.css';
import { commerce } from "./lib/commerce";
import {Products,Navbar,Cart} from '../src/component'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const App =() =>{
  const [products, setproducts] = useState([])
  
  const [cartItems, setcartItems] = useState([])

	//fetching products list
  const fetchData = async()=>{
    const {data} = await commerce.products.list()
    setproducts(data)
  }

  //fetching cartitems
  const fetchCartItems = async()=>{
	
	setcartItems(await commerce.cart.retrieve())
  }
  //console.log(cartItems);


  const handleAddcart = async(productId,quantity)=>{
	const items = await commerce.cart.add(productId, quantity)
	setcartItems(items.cart)
  }

  console.log(cartItems);

  useEffect(() => {
	fetchData()
	fetchCartItems()
  }, [])

  return (
   <Router>
      <div className="app">
        <Navbar/>
        <Switch>
		<Route exact path='/'>
          <Products productList ={products} onAddToCart={handleAddcart}/> 
		</Route>

		<Route exact path='/cart'>
          <Cart cartitems={cartItems}  /> 
		</Route>
        </Switch>
      </div>
   </Router>
   
  );
}


export default App;