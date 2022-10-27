import React from 'react'
import styled from 'styled-components';
import mixins from '../../styles/mixins';
import { motion } from 'framer-motion';
import { contactAnimation } from '../../styles/animations';
import { useScroll } from '../../hooks/useScroll';

const ContactContainer = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    @media (max-width: 768px){
        margin: 0 auto 50px;
    }
    p{
        color: var(--slate);
    }
    .overline {
        display: block;
        margin-bottom: 20px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        font-weight: 400;

        &:before {
            bottom: 0;
            font-size: var(--fz-sm);
        }
        &:after {
            display: none;
        }
    }
    .title {
        font-size: clamp(40px, 5vw, 50px);
    }
    .email-link {
        ${mixins.bigButton}
        margin-top: 50px;
    }
`;

const Contato = () => {
    const [element, controls] = useScroll();
  return (
    <ContactContainer id='contact' ref={element}>
        <motion.div
            variants={contactAnimation}
            animate={controls}
            transition={{delay: 0.4, duration: 0.8, type: "tween"}}
            >
            <h2 className='numbered-heading overline'>Qual o proximo passo?</h2>
            <h2 className='title'>Entrar em contato</h2>
            <p>
                Estou aberto a novas oportunidades, minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou quer dizer oi, pode clicar no botão abaixo.
            </p>
            <button className='email-link'>
                <a href='https://api.whatsapp.com/send?phone=5561982883180&text=Ol%C3%A1!'>Mande mensagem!</a>
            </button>
        </motion.div>
    </ContactContainer>
  )
}

export default Contato