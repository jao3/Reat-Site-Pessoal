import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import { navLinks } from '../data/config'
import mixins from '../styles/mixins';
import Menu from './menu';

const StyledHeader = styled.header`

    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(10, 25, 47, 0.85);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);

    @media (max-width: 1080px) {
        padding: 0 40px;
    }

    @media (max-width: 768){
        padding: 0 25px;
    }
`;
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
`;
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px){
        display: none;
    }

    ol {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        list-style: none;

        li{
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: var(--fz-xs);

            a{
                padding: 10px;

                &:before {
                    content: '0' counter(item) '.';
                    margin-right: 5px;
                    color: var(--green);
                    font-size: var(--fz-xxs);
                    text-align: right;
                }
            }
        }
    }
    .resume-button {
        ${mixins.smallButton};
        margin-left: 15px;
        font-size: var(--fz-xs);
    }
`;

const Nav = ({isHome}) => {
    const ResumeLink = (
        <a className="resume-button" href="/" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      );
    return (
    <StyledHeader>
        <>
        <StyledNav>
            <a>Logo</a>
            <NavLinks>
            <ol>
               {navLinks &&
                navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                        <Link to={url}>{name}</Link>
                    </li>
                ))} 
            </ol>
            <div>{ResumeLink}</div>
            </NavLinks>
        </StyledNav>
        <Menu/>
        </>
    </StyledHeader>
  )
}

export default Nav