import React from 'react';
import styled from "styled-components";
import {AddOutlined} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 240px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  background-color: #0071dc;
  padding: 0 1.5rem;
  font-size: 1rem;
  height: 2.5rem;
  border-radius: 62.5rem;
  transition: all 0.5s ease;
  &:hover{
    background-color: #004f9a;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 100%;
  
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.3rem;
`

const Title = styled.p`
  padding: 0.7rem 0;
`
const Price = styled.p`
  font-weight: 700;
`
const Product = ({item}) => {
  return (
    <Container>
      <Header>
        <Image src={item.img}/>
        <ButtonContainer>
          <Button>
            <AddOutlined/> Add
          </Button>
        </ButtonContainer>
      </Header>
      <Body>
        <Price>
          ${item.price}
        </Price>
        <Title>
          {item.title}
        </Title>
      </Body>
    </Container>
  );
};

export default Product;