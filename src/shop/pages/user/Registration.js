import React from 'react';
import styled from "styled-components";
import {TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {Box, Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const Wrapper = styled.div`
  
  & form {
    & .input{
      
    }
    
  }
`

const Title = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`

const Button = styled.button`
  background-color:#0071dc;
  border: none;
  padding: 12px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  transition: all 0.5s ease;
  &:hover{
    background-color:#004f9a;
  }
`

const SignInButton = styled(Link)`
  font-size: 1rem;
  padding: 12px;
  border: none;
  color: rgb(35, 47, 50);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(35 47 50) 0px 0px 0px 1px inset;
  border-radius: 62.5rem;
  font-weight: 700;
  margin-top: 16px;
  width: 100%;
  text-decoration: none;
  display: block;
  text-align: center;
`
const LogoImage= styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`
const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Link to="/">
            <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
          </Link>
          <p>Create your MiniMarket account</p>
        </Title>
        <form>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField fullWidth label="First name" id="firstName"  className="input"/>
          </Box>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField fullWidth label="Last name" id="lastName"  className="input"/>
          </Box>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField type="email" fullWidth label="Email address" id="lastName"  className="input"/>
          </Box>

          <Box sx={{ paddingBottom: 15 }}>
            <TextField type="password" fullWidth label="Password" id="password" className="input" />
          </Box>

          <FormGroup style={{ paddingBottom: '14px'}}>
            <FormControlLabel  control={
              <Checkbox defaultChecked  color="default"/>
            } label="Keep me signed in" />
          </FormGroup>

          <Button>
            Create account
          </Button>

          <p style={{ padding: '16px 0'}}>Already have an account?</p>

          <SignInButton to="/login">
            Sign in
          </SignInButton>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Registration;