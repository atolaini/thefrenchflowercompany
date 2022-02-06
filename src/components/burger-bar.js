import React, {useState} from 'react';
import styled from 'styled-components';
import MainNav from './mainMenu';
import device from '../css/mediaQueries';

const StyledBurger = styled.div`
    height: 2rem;
    width: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    span {
        width: 100%;
        height: 3px;
        background: ${({open}) => open ? 'black' : 'white'};
        display: block;
        border-radius: 20px;
        transform-origin: 3px;
        transition: all .3s ease-in-out;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(0)' : 'rotate(45deg)'};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
            opacity: ${({open}) => open ? '1' : '0'};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(0)' : 'rotate(-45deg)'};
        }

        @media ${device.md} {
            flex-direction: row;
            background: black;
        }

    }

`

const BurgerBar = (props) => {
    const [open, setOpen ] = useState(true)

    return (
        <>
            <MainNav open={open}/>
           
            <StyledBurger open={open} onClick={() =>setOpen(!open)} role='button'>
                {/* add in the word menu */}
            {/* <p>Menu</p> */}
                <span></span>
                <span></span>
                <span></span>
            </StyledBurger> 
        </>
    )
}

export default BurgerBar;