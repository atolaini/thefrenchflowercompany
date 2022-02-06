import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import device from '../css/mediaQueries';
import ContentContainer from '../components/contentContainer';
import GalleryGrid from '../components/gallery-container';


const StyledHero = styled.div`
    width: 100%;
    height: 250px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: black;
        opacity: .3;
        display: block;
        z-index: 1;
    }
    
    @media ${device.md} {
        height: 500px;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    h1 {
        top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		color: white;
        width: 100%;
		max-width: 130rem;
		margin: 0 auto;
		text-align: center;
    }

`


export default ({pageContext}) => (
    <Layout>
        <StyledHero>
            <img src={pageContext.featured_media.source_url} />
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
        </StyledHero>

        <main>
            <ContentContainer>
                
                <GalleryGrid>
                <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>  

                </GalleryGrid>
            </ContentContainer>
        </main>    
    </Layout>
);