import React from 'react';
import styled from 'styled-components';
import device from '../css/mediaQueries';

const StyledDiv = styled.div`
    width: 100%;
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3rem;


    @media ${device.xl} {
        padding: 0;
    }

`

const ContentContainer = ({children}) => (

    <StyledDiv>
        {children}
    </StyledDiv>
)


export default ContentContainer;