import React from 'react';
import styled from "styled-components";
import {products} from "../store/data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  padding: 3rem 0;
  justify-content: space-between;
  
`

const Title = styled.h2`
  font-size: 1.5rem;
  padding: 5px;
  margin-top: 1.6rem;
`

const Products = () => {
  return (
    <section>
      <Title>Fearued Products</Title>
      <Container>
        {products.map(item => <Product key={item.id} item={item}/>)}
      </Container>
    </section>

  );
};

export default Products;