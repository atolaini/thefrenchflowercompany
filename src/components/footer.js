import React from "react";
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import device from '../css/mediaQueries';
import Socials from './socials';
import logo from '../images/logo_1.png';


const SiteFooter = styled.footer`
    border-top: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;

    @media ${device.md} {
        flex-direction: row;
        padding: 4rem 4rem;
        justify-content: space-between;
        
    }
`

const FooterNav = styled.nav`
    display: flex;
    flex-direction: center;
    justify-content: center;
    list-style: none;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    @media ${device.md} {
        flex-direction: row;
    }
`

const StyledLink = styled(Link)`
    font-size: 2rem;
    font-family: Taviraj;
    font-weight: 400;
    text-decoration: none;
    color: black;
    margin-bottom: 2rem;
    

    @media ${device.md} {
        color: black;
        margin-bottom: 0;
        margin-left: 2rem;
    }
`

const LogoContainer = styled(Link)`
  max-width: 7rem;
  

  img {
    width: 100%;
    height: auto;
  }
`


const footer = () => (

    <StaticQuery query = {graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Footer menu"}}) {
          edges {
            node {
              name
              items {
                title
                object_slug
                object_id
                url
                wordpress_children {
                  url
                  object_slug
                  object_id
                  title
                }
                
              }
            }
          }
        }
      }
      
    `} render= {props => (
        <SiteFooter>
            <LogoContainer to={'/'}>
                <img src={logo} />   
            </LogoContainer> 
            <FooterNav className='footerRoot'>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, idx) =>(
                    <li key={idx}>
                        <StyledLink to={`/${item.object_slug}`} key={item.object_id}>
                            {item.title}
                        </StyledLink>
                    </li>
                ))}
            </FooterNav>
            <Socials iconSize="2x"/>
        </SiteFooter>
    )} />
)

export default footer