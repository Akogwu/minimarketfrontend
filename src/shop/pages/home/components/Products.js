import React, {useState} from 'react';
import styled from "styled-components";
import Product from "./Product";
import SingleProduct from "./SingleProduct";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-between;
  
`

const Title = styled.h2`
  font-size: 1.5rem;
  padding: 5px;
  margin-top: 1.6rem;
`


const Products = ({products,addProductToCart}) => {
  const [open,setOpen] = useState(false);
  const [singleProduct,setSingleProduct] = useState({});
  const [cartItems,setCartitems] = useState([]);



  
  const loadProduct = (product) => {
    setOpen(true);
    setSingleProduct(product);
  }

  return (
    <section>
      <Title>Fearued Products</Title>
      <Container>
        {products.map(item => <Product key={item.id} item={item} loadProduct={loadProduct} addProductToCart={addProductToCart} />)}
      </Container>
      <SingleProduct product={singleProduct} open={open} setOpen={setOpen}/>
    </section>

  );
};

export default Products;