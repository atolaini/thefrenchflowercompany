import React from 'react';
import styled from 'styled-components';
import device from '../css/mediaQueries';

const StyledSection = styled.section`

    .blocks-gallery-grid {
        display: flex;
        flex-direction: column;

        .blocks-gallery-item {
            img {
                width: 100%;
                max-height: 30rem;
                object-fit: cover;
            }
        }
    }

    @media ${device.md} {
        .blocks-gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            grid-gap: 4rem;
        }
    }


`


const GalleryGrid = ({children}) => (
    <StyledSection>
        {children}
    </StyledSection>
)

export default GalleryGrid;