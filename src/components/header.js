import React from "react"
import {Link} from 'gatsby';
import MainMenu from './mainMenu';
import styled from 'styled-components';
import BurgerBar from './burger-bar';
import ContentContainer from './contentContainer';
import logo from '../images/logo_1.png';

const StyledHeader = styled.header`
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: white;
  box-shadow: 0px 4px 9px -6px rgba(0,0,0,0.2);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoContainer = styled(Link)`
  max-width: 7rem;
  

  img {
    width: 100%;
    height: auto;
  }
`

const MainHeader = () => (
  <StyledHeader>
    <ContentContainer>
      <LogoContainer to={'/'}>
        <img src={logo} />   
      </LogoContainer> 
      <BurgerBar />
    </ContentContainer>
  </StyledHeader>
)


export default MainHeader
