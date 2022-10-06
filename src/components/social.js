import React from 'react'
import styled from 'styled-components';
import { socialMedia } from '../data/config';
import Side  from './side'
import PropTypes from 'prop-types'
import Icon from '../data/icons'

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after{
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: var(--light-slate);
    }
    li{
        &:last-of-type {
            margin-bottom: 20px;
        }
        a{
            padding: 10px;
            &:focus,
            &:hover {
                transform: translateY(-3px);
            }
        }
    }
    svg {
        width: 20px;
        height: 20px;
    }
`;

const Social = ({isHome}) => {
  return (
    <Side isHome={isHome} orientation='left'>
    <SocialList>
        {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
                <li key={i}>
                    <a href={url} aria-label={name} target='_blank' rel='noreferrer'>
                        <Icon name={name} />
                    </a>
                </li>
            ))}
    </SocialList>
    </Side>
  )
};
Social.propTypes ={
    isHome: PropTypes.bool,
};

export default Social