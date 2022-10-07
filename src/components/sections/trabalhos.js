import React from 'react'
import styled from 'styled-components'

const StyledTrabalhosSection = styled.section`
    max-width: 700px;
`;
const StyledTabList = styled.div`
`;
const StyledTabButton = styled.button``;

const Trabalhos = () => {
  return (
    <StyledTrabalhosSection>
        <h2 className='numbered-heading'>Lugares onde trabalhei</h2>
        <div className='inner'>
        </div>
    </StyledTrabalhosSection>
  )
}

export default Trabalhos