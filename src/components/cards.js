import React from 'react'
import styled from 'styled-components';
import Icon from '../data/icons';

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2.125rem;
  padding-bottom: 2.124rem;

  :last-child{
    padding-bottom: 0;
  }
  :before{
    content: '';
    width: 1px;
    height: 100%;
    background-color: var(--green);
    position: absolute;
    left: .25rem;
    top: 0;
  }
  svg{
    position: absolute;
    width: 25px;
    height: 35px;
    top: -0.4375rem;
    left: -0.475rem;
    background-color: var(--light-navy);
    color: var(--green);
    padding: 0.4375rem 0;
  }
  span{
    font-family: var(--font-mono);
  }
`;

const Cards = (props) => {
  return (
    <TimelineItem>
      <Icon name={props.name}></Icon>
      <span>{props.ano}</span>
      <h3>{props.titulo}</h3>
      <p>{props.desc}</p>
    </TimelineItem>
  )
}

export default Cards