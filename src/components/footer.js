import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const FooterSection = styled.section`
  padding: 2rem 5%;
  width: 100%;
  box-sizing: border-box;
`;

const Creditos = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top:3rem;
  span{
    font-family: var(--font-mono);
  }
`;

export const Footer = () => {
  return (
    <FooterSection>
      <Creditos><span>© 2022 Criado por João Araújo</span></Creditos>
    </FooterSection>
  )
}

export default Footer