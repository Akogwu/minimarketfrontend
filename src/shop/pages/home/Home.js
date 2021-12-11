import React from 'react';
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Slider from "./components/Slider";
import Categories from "../../components/Categories";
import {Container} from "@material-ui/core";
import Products from "./components/Products";

const Home = (props) => (
    <div>
      <Announcement/>
       <Navbar/>
      <Container>
        <Slider/>
        <Categories/>
        <Products/>
      </Container>


    </div>

);

export default Home;