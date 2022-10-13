import React from 'react'
import styled from 'styled-components';
import Experience from '../../data/experiencia';
import Cards from '../cards';

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
  return (
    <StyledTrabalhosSection id='xp'>
        <h2 className='numbered-heading'>Qualificações</h2>
        <div className='inner'>
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
        </div>
    </StyledTrabalhosSection>
  )
}

export default Trabalhos