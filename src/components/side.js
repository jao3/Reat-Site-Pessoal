import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SideElement = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    z-index: 10;
    color: var(--light-slate);
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'right' ? '40px' : 'auto')};

    @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
    @media only Screen and (max-width: 768px) {
    
    display: none;
  }
`;

const Side = ({children, orientation}) => {
  return (
    <SideElement orientation={orientation}>
        <>
            {children}
        </>
    </SideElement>
  )
};
Side.protoTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string,
};

export default Side;