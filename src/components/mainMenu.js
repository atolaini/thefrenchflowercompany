import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import device from '../css/mediaQueries';
import Socials from './socials';

const StyledNavContainer = styled.div`
    background: #3d4999;
    position: fixed;
    top: 0;
    left: ${({open})=> open ? '-100%' : '0'};
    height: 100%;
    width: 100%;
    transition: all .3s ease-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10rem;
    flex-direction: column;


    @media ${device.md} {
        width: 50vw;
`
const StyledLink = styled(Link)`
    font-size: 2rem;
    font-family: Taviraj;
    font-weight: 300;
    text-decoration: none;
    color: white;
    margin-bottom: 2rem;
    
`
const StyledNav = styled.nav`

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            position: relative;
            margin-bottom: 2rem;

            a {
                margin-left: 0;
                
            }

            .toggle {
                display: block;
                position: absolute;
                right: 1.5rem;
                top: -5px;
            }
        }
    }

    .subNav {
        display: none;
    }


    @media ${device.md} {
       

        .subNav {
            display: block;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 1px solid #f5f3ed;
            background: white;
            box-shadow: 0px 4px 9px -6px rgba(0,0,0,0.2);
            padding: 2rem;
            width: auto;
            opacity: 0;
            visibility: hidden;
            z-index: -10;
            transition: all .3s ease-out;
            min-width: 25rem;

            li {
                margin-bottom: 2rem;

                a {
                    margin-left: 0;
                    
                }
            }
        }

        .navRoot {
            > li {
                &:hover {
                    > .subNav {
                        opacity: 1;
                        visibility: visible;
                        z-index: 10;
                    }
                }
            }
        }
    }
`
const mainMenu = ({open}) => (

    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
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
      
    `} render={props =>(

        <StyledNavContainer open={open}>
            <StyledNav className='mainNav'>
                <ul className='navRoot'>
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, idx) =>(
                        <li key={idx}>
                            <StyledLink to={`/${item.object_slug}`} key={item.object_id}>
                                {item.title}
                            </StyledLink>
                                {/* {item.wordpress_children ? (
                                        <>
                                            <span className="toggle">&#8964;</span>
                                            <ul className='subNav'>
                                                {item.wordpress_children.map((child, childIdx) => (
                                                    <li key={childIdx}>
                                                        <StyledLink to={`/gallery/${child.object_slug}`}>
                                                            {child.title}
                                                        </StyledLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : null} */}
                                 
                        </li>
                    ))}
                </ul>
            </StyledNav>
            <Socials iconSize="2x"/>
        </StyledNavContainer>
    )}/>
);

const MenuItem = ({url, label}) => {
    
}

export default mainMenu;