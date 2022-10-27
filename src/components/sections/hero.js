import React from 'react'
import styled from 'styled-components'
import mixins from '../../styles/mixins';
import pdf from '../../assets/Curriculo João - TI.pdf'
import { motion } from 'framer-motion';
import { homeAnimation } from '../../styles/animations';

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
    const three = <h3 className='big-heading'>Front-End Developer.</h3>;
    const four = (
        <>
            <p>
            Sou um desenvolvedor de software especializado em construir (e ocasionalmente projetar) aplicações Fron-End
            e futuramente mobile.
            </p>
        </>
    );
    const five = (
        <a
            className='email-link'
            href={pdf}
            target='_blank'
            rel='noreferrer'>
            Download CV 
        </a>
    );
    
    const items = [one, two, three, four, five];

  return (
    <StyledHeroSection id="home">
        <motion.div
            variants={homeAnimation}
            transition={{delay: 0.3, duration: 0.6, type: "tween"}}
        >
            {items.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
        </motion.div>
    </StyledHeroSection>
  )
}

export default Hero