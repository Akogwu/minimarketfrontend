import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Slider from "./components/Slider";
import Categories from "../../components/Categories";
import {Container} from "@material-ui/core";
import Products from "./components/Products";
import Footer from "../../components/Footer";
import {products} from "./store/data";

const Home = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    let productExistInCart = false;
    const cartItemsCopy = cartItems.slice();
    cartItemsCopy.forEach( cartItem => {
      if (cartItem.id === product.id){
        cartItem.count++;
        productExistInCart = true;
      }
    });
    if(!productExistInCart){
      cartItems.push({...product,count:1})
    }
    setCartItems(cartItems)
  }

  const removeFromCart =(product) => {
    const cartItemsCopy = cartItems.slice();
    setCartItems(cartItemsCopy.filter(item => item.id !== product.id));
  }

 return(
    <div>
       <Navbar cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Container>
        <Slider/>
        <Categories/>
        <Products products={products} addProductToCart={addProductToCart}/>
      </Container>
      <Footer/>
    </div>

)};

export default Home;