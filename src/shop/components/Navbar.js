import React from 'react';
import styled from "styled-components";
import {LocalConvenienceStoreOutlined, LocationOnOutlined, Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
const Container = styled.div`
  background-color: #0071dc;
`

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
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


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            MiniMarket
            <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
          </Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search everything at OjaMart online"/>
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
            Sign in
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlined/>
            </Badge>
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
  );
};

export default Navbar;