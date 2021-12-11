import React, {Fragment, useState} from 'react';
import styled from "styled-components";
import {
  LocalConvenienceStoreOutlined,
  LocationOnOutlined,
  Search,
  ShoppingCartOutlined,
  PersonOutline,
} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import CartDrawer from "./cart/CartDrawer";
import {GridViewOutlined} from "@mui/icons-material";


const Container = styled.div`
  background-color: #0071dc;
`
const Wrapper = styled.div`
  height: 90px;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  
`
const Logo = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  color: #fff;
`
const LogoImage= styled.img`
  width: 30px;
  height: 30px;
  margin-left: 4px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  width: 100%;
  position: relative;
`

const Input = styled.input`
  flex: 1;
  padding: 11px;
  border: 0.5px solid lightgray;
  border-radius: 20px;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  border-radius: 62.2rem;
  padding: 6px 12px;
  color: #fff;
  &:hover{
    background-color: #004f9a;
  }
  &.store{
    margin-left: 40%;
  }
`

const StoreMenu = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 5px;
`

const AccountMenu = styled.div`
  
`

const Location = styled.div`
  background-color: #004f9a ;
  color: #fff;
  display: flex;
  align-items: center;
`
const Links = styled.a`
  font-size: 0.9rem;
  text-decoration: underline;
  color: #fff;
  padding: 9px;
  display: flex;
 align-items: center;
`

const Cart = styled.div`
  display: flex;
  flex-direction: column;
`


const Navbar = () => {
  const [open,setOpen] = useState(false);

  return (
    <Fragment>
      <CartDrawer open={open} setOpen={setOpen}/>
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              MiniMarket
              <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
            </Logo>
            <MenuItem className="store">
              <GridViewOutlined/>
              <StoreMenu>
                Stores
              </StoreMenu>
            </MenuItem>
          </Left>


          <Center>
            <SearchContainer>
              <Input placeholder="Search everything at MiniMarket online"/>
              <Search style={{
                backgroundColor: '#ffc220',
                padding:`4px`,
                borderRadius:`50%`,
                position:`absolute`,
                right:`6`
              }}/>
            </SearchContainer>
          </Center>
          <Right>
            <MenuItem>
              <PersonOutline/>
              <AccountMenu>
                Sign in<br/>
                <strong>
                  Account
                </strong>
              </AccountMenu>

            </MenuItem>
            <MenuItem>
              <Cart onClick={setOpen}>
                <Badge badgeContent={4} >
                  <ShoppingCartOutlined/>
                </Badge>
                <small style={{ fontSize:'9px' }}>$0.00</small>
              </Cart>

            </MenuItem>
          </Right>
        </Wrapper>
        <Location>
          <Links href="#">
            <LocalConvenienceStoreOutlined style={{ marginRight:'3px' }}/> Fairfield supercenter
          </Links> |
          <Links href="#">
            <LocationOnOutlined/> Fairfield, 52557
          </Links>
        </Location>
      </Container>
    </Fragment>

  );
};

export default Navbar;