import * as React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles"
import Nav from "./nav.js"
import Email from './email'
import Social from './social'
import styled from "styled-components"
import Footer from "./footer"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {

  return (
    <>
      <StyledContent>
        <GlobalStyle/>  
        <Nav /> 
        <Social />  
        <Email />
        <div id="content">
          {children}
        </div>
        <Footer/>
      </StyledContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
