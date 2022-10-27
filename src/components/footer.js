import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import Icon from '../data/icons'
import { socialMedia } from '../data/config';


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

const StyledSocials = styled.div`
  list-style: none;
  
  display: none;
  @media only screen and (max-width: 768px){  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    }
`;

export const Footer = () => {
  return (
    <FooterSection>
      <Creditos><span>© 2022 Criado por João Araújo</span></Creditos>
      <StyledSocials>
        {socialMedia && 
          socialMedia.map(({url, name}, i) => (
            <li key={i}>
              <a href={url}>
                <Icon name={name}/>
              </a>
            </li>
          ))
        }
      </StyledSocials>
    </FooterSection>
  )
}

export default Footer