import React from 'react'
import styled from 'styled-components';
import Experience from '../../data/experiencia';
import Cards from '../cards';
import { motion } from 'framer-motion'
import { qualificationtAnimation } from '../../styles/animations';
import { useScroll } from '../../hooks/useScroll';

const StyledTrabalhosSection = styled.section`
    max-width: 1200px;
    .inner{
      
    }
`;
const StyledTabList = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.875rem;
      
    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
    }
`;
const StyledTimeline = styled.div`
    background-color: var(--light-navy);
    padding: 20px 30px;
    border-radius: var(--border-radius);
    position: relative;
    
`;

const Trabalhos = () => {
  const [element, controls] = useScroll();
  return (
    <StyledTrabalhosSection id='xp' ref={element}>
        <h2 className='numbered-heading'>Qualificações</h2>
        <motion.div className='inner'
          variants={qualificationtAnimation}
          animate={controls}
          transition={{delay: 0.3, duration: 0.6, type: "tween"}}
        >
          <StyledTabList>
            <StyledTimeline>
              {Experience.map((val, id) => {
                if (val.name === "Education") {
                  return (
                    <Cards
                      key={id}
                      name={val.name}
                      titulo={val.titulo}
                      ano={val.ano}
                      desc={val.desc}   
                    />
                  )
                }
              })}
            </StyledTimeline>
            <StyledTimeline>
              {Experience.map((val, id) => {
                if (val.name === "Experience") {
                  return (
                    <Cards
                      key={id}
                      name={val.name}
                      titulo={val.titulo}
                      ano={val.ano}
                      desc={val.desc}   
                    />
                  )
                }
              })}
            </StyledTimeline>
          </StyledTabList>
        </motion.div>
    </StyledTrabalhosSection>
  )
}

export default Trabalhos