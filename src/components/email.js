import React from 'react'
import styled from 'styled-components';
import Side from './side'
import { email } from '../data/config';
import PropTypes from 'prop-types'

const LinkEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::after{
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: var(--light-slate);
    }
    a{
        color: var(--light-slate);
        margin: 20px auto;
        padding: 10px;
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        line-height: var(--fz-lg);
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;

        &:hover,
        &:focus {
            color: var(--green);
            transform: translateY(-3px);
        }
    }
`;

const Email = ({isHome}) => {
  return (
    <Side isHome={isHome} orientation ="right">
        <LinkEmail>
            <a href='/'>{email}</a>
        </LinkEmail>
    </Side>
  )
}
Email.propTypes = {
    isHome: PropTypes.bool,
};

export default Email