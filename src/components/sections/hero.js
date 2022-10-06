import React from 'react'
import styled from 'styled-components'
import mixins from '../../styles/mixins';

const StyledHeroSection = styled.section`
    ${mixins.flexCenter};
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
    padding: 0;

    @media (max-width: 480px) and (min-height: 700px){
        padding-bottom: 10vh;
    }

    h1{
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        font-weight: 400;

    }

    h3{
        margin-top: 10px;
        color: var(--slate);
        line-height: 0.9;
    }
    p{
        margin-top: 20px;
        //margin: 20px 0 0;
        max-width: 550px;
    }
    .email-link {
        ${mixins.bigButton}
        margin-top: 50px;
    }
`;

const Hero = () => {
    
    const one = <h1>Olá, meu nome é</h1>;
    const two = <h2 className='big-heading'>João Araújo.</h2>;
    const three = <h3 className='big-heading'>desenvolvedor Front-End.</h3>;
    const four = (
        <>
            <p>
            Sou um engenheiro de software especializado em construir (e ocasionalmente projetar) experiências digitais excepcionais.
            dasdljashdlksahdkjashdkjahsd a shdjkas hdkjas djsa
            </p>
        </>
    );
    const five = (
        <a
            className='email-link'
            href='/'
            target='_blank'
            rel='noreferrer'>
            clica aqui arrombado!
        </a>
    );
    
    const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
        <>
            {items.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
        </>
    </StyledHeroSection>
  )
}

export default Hero