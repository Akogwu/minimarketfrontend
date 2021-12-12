import React from 'react';
import Navbar from "../../components/Navbar";
import Slider from "./components/Slider";
import Categories from "../../components/Categories";
import {Container} from "@material-ui/core";
import Products from "./components/Products";
import Footer from "../../components/Footer";

const Home = (props) => (
    <div>
       <Navbar/>
      <Container>
        <Slider/>
        <Categories/>
        <Products/>
      </Container>
      <Footer/>
    </div>

);

export default Home;