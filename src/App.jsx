import React from 'react'
//import Navigation from '../src/component/navigation/Navigation'
import './App.css';
import {Products,Navbar} from '../src/component'
const App =() =>{
  return (
    <div className="app">
        <Navbar/>
       <Products/>
    </div>
  );
}


export default App;