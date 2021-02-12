import React,{useState,useEffect} from 'react'
import './App.css';
import { commerce } from "./lib/commerce";
import {Products,Navbar,Cart,Checkout} from '../src/component'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const App =() =>{
  const [products, setproducts] = useState([]) 
  const [cartItems, setcartItems] = useState([])
  const [Order, setOrder ]= useState({})
  const [Error, setError] = useState({})




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
	const {cart} = await commerce.cart.add(productId, quantity)
	setcartItems(cart)
  }

  const handleUpdateCart = async (productId, quantity)=>{
    const {cart} = await commerce.cart.update(productId, {quantity})
    setcartItems(cart)
  }

  const handleRemoveCart = async (productId)=>{
    const {cart} = await commerce.cart.remove(productId)
    setcartItems(cart)
  }

  const refreshCart = async()=>{
    const newCart = await commerce.cart.refresh()
    setcartItems(newCart)
  }

  const handleEmptyCart = async ()=>{
    const {cart} = await commerce.cart.empty()
    setcartItems(cart)
    
  }

  const handleCeckoutCapture =async(cardTokenId,newOrder)=>{
    try {
      const inComingOrder = await commerce.checkout.capture(cardTokenId,newOrder)
      setOrder(inComingOrder)
      refreshCart()
    } catch (error) {
      setError(error.data.error.message)
    }
    
  }
  //console.log(cartItems);

  useEffect(() => {
	fetchData()
  fetchCartItems()
  //handleAddcart()
	
  }, [])

  return (
   <Router>
      <div className="app">
        <Navbar cartItems={cartItems}/>
        <Switch>
            <Route exact path='/'>
                  <Products productList ={products} onAddToCart={handleAddcart} /> 
            </Route>

            <Route exact path='/cart'>
                  <Cart cartItems={ cartItems } handleUpdateCart={ handleUpdateCart } handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart} /> 
            </Route>
            <Route exact path='/checkout'>
                  <Checkout cartItems={cartItems} Order={Order} OnCatureOrder={handleCeckoutCapture} Error ={Error} /> 
            </Route>
        </Switch>
      </div>
   </Router>
   
  );
}


export default App;