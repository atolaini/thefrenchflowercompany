
import React from "react";
import MainHeader from "./header";
import GlobalStyle from '../css/globalStyles';
import '../css/sass/image-grid.scss';
import '../css/sass/homepageBanner.scss';
import '../css/sass/our-story.scss';
import '../css/sass/locations.scss';
import '../css/sass/page-layout.scss';
import Footer from "./footer";


const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <MainHeader />
    {children}
    <Footer />
  </div>
)



export default Layout
