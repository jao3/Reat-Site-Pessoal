import React, { useState } from 'react'
import styled from 'styled-components'
import { navLinks } from '../data/config';
import { Link } from 'gatsby';
import mixins from '../styles/mixins';

const HamburguerBtn = styled.a`
    position: relative;
    background-color: transparent;
    width: 2rem;
    height: 2px;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 768px){
        display: inline-block;
    }

    &:before,
    &:after {
        content: '';
        background-color: var(--green);
        width: 2rem;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        cursor: pointer;
        transition: var(--transition);
    }

    &:before{
        top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    }

    &:after {
        top: ${(props) => (props.clicked ? '0' : '0.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    }
`;
const MobileMenu = styled.div`
    display: none;
    
    @media only screen and (max-width: 48rem){
        display: flex;
    }

    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    opacity: ${props => (props.clicked ? "1" : "0")};
    visibility: ${props => props.clicked ? "visible" : "hidden"};
    transition: var(--transition);
    z-index: -10;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    margin: 0.5rem;
    overflow-x: hidden;

`;
const MobileLinks = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ol {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
        margin: 0;
        list-style: none;

        li{
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: var(--fz-xl);
            font-family: var(--font-mono);

            a{
                padding: 10px;

                &:before {
                    content: '0' counter(item) '.';
                    margin-right: 5px;
                    color: var(--green);
                    font-size: var(--fz-md);
                    text-align: right;
                    font-family: var(--font-mono);
                }
            }
        }
    }
    .resume-button {
        ${mixins.smallButton};
        font-size: var(--fz-xs);
        padding: 1rem 2rem;
    }
`;

const Button = styled.button ``;

const Menu = () => {

    const ResumeLink = (
        <a className="resume-button" href="/" target="_blank" rel="noopener noreferrer">
          Resumo
        </a>
      );

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
    <HamburguerBtn onClick={() => handleClick()} clicked={click}>
          <span></span>
      </HamburguerBtn>
          <MobileMenu clicked={click}>
              <MobileLinks>
                <ol>
                {navLinks &&
                    navLinks.map(({ url, name }, i) => (
                        <li key={i}>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))} 
                </ol>
                <div>{ResumeLink}</div>
              </MobileLinks>

          </MobileMenu>
    </>
  )
}

export default Menu