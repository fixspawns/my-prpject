import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavItem,Nav,NavLink,Button} from 'reactstrap';
import dota from "./images.jpg"
import GameCenter from "GameCenter"
  const Header = () =>{
    const Container = styled("div")`
       background: linear-gradient(110deg, rgba(238, 85, 20, 0.05) 50%, rgba(238, 85, 20, 0) 0);
        height: 700px;
        animation: span 2s ease-in-out;

      @keyframes span {
        0%{
          margin-left: -100rem;
        }
        100%{
          margin: 0;
        }
      }
    `
    const Logo = styled("img")`
      height: 54px;
    width: 66px;
    margin: auto 0;
    margin-left: 5rem;
    margin-right:1rem;
    `
    const NavBar = styled('div')`
      display: flex;
      justify-content: space-between;
      
    `
    const NavLittle = styled('div')`
      height: 70px;
    display: flex;
    align-items: center;
    `
    const NavButton = styled('div')`
      height: 70px;
    display: flex;
    align-items: center;
    animation: navbut 1.69s ease-in-out;
    margin-right: 2rem;
      @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 2rem;
        }
      }
    `
   const Game = styled("div")`
    margin: 0;
    animation: navbut 2s ease-in-out;
    margin-right: 5rem;
    display: flex;
    justify-content: space-between;
      @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 5rem;
        }
      }


   `
   const GameImg = styled("img")`
    width: auto;
    height: 630px;
    animation: navbut 2s ease-in-out;;
      @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 2rem;
        }
      }
   `
   const GameDiv = styled("div")`
   margin-left: 10px;
        animation: span 2s ease-in-out;;
      @keyframes span {
        0%{
          margin-left: -100rem;
        }
        100%{
          margin-left: 2rem;
        }
      }
   `
   const GameH1 = styled("h1")`
    margin-left:8rem;
    margin-top: 8rem;
    font-size: 64px;
   `
   const Gamep = styled('p')`
   width: 500px;
    margin-left:8rem;
    font-size: 30px;
   `
    return(
        <Container>
         
          <NavBar>
            <NavLittle>
         <Nav
>
  <NavItem>
    <GameCenterH1>GameCenter</GameCenterH1>
  </NavItem>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Paid games
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Free games
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
     For Premium users
    </NavLink>
  </NavItem>
  
</Nav>
</NavLittle>
<NavButton>

  <Button
    color="primary"
    href="#"
    tag="a"
  >
    Sign Up
  </Button>
  
</NavButton>
</NavBar>
<Game>
  <GameDiv>
    <GameH1>Game Center</GameH1>
    <Gamep>With this web site you can install free and paid games</Gamep>
    <Gamep>Enjoy !!!</Gamep>
  </GameDiv>
    <GameImg src={dota} alt="" />
</Game>
        </Container>
    )
 }

 export default Header