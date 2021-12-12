import React from 'react';
import {Close} from "@material-ui/icons";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import {cartData} from "../../pages/home/store/data";
import CartItem from "./CartItem";

const ShoppingCartContent = styled.div`
  width: 430px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f1f1f1;
  overflow: scroll;
  margin-bottom: 120px;
  
`

const ShoppingCartContentHeader = styled.div`
  height: 10%;
  background-color:#0071dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  position: fixed;
  width: inherit;
  & span{
    font-size: 12px;
    font-weight: lighter;
  }
`

const CartBody = styled.div`
  margin-top: 20%;
  
`

const ShoppingCartContentFooter = styled.div`
  position: fixed;
  width: inherit;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 12px;
  border-top: 0.34px solid #eee;
  background-color: #fff;
`

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  
`

const Button = styled.button`
  background-color:#0071dc;
  border: none;
  padding: 10px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: .9rem;
`

const CartDrawer = ({open,setOpen}) => {
  return (
    <div>
      <Drawer onClose={ ()=> setOpen(false)} anchor="right" open={open} >
        <ShoppingCartContent className="CartContent">
          <ShoppingCartContentHeader>
            <p>Cart <span>(4)</span></p>
            <Close onClick={ () => setOpen(false)} style={{cursor:"pointer"}}/>
          </ShoppingCartContentHeader>

          <CartBody>
            {cartData.map( item => <CartItem key={item.id} item={item}/> )}
          </CartBody>

          <ShoppingCartContentFooter>
            <SubTotal>
              <p>Estimated total</p>
              <h3>$189.99</h3>
            </SubTotal>
            <Button>
              Continue to checkout
            </Button>
          </ShoppingCartContentFooter>
        </ShoppingCartContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;